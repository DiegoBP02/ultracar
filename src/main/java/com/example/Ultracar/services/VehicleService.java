package com.example.Ultracar.services;

import com.example.Ultracar.dtos.VehicleDTO;
import com.example.Ultracar.entities.Client;
import com.example.Ultracar.entities.Vehicle;
import com.example.Ultracar.exceptions.UniqueConstraintViolationException;
import com.example.Ultracar.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ClientService clientService;

    public Vehicle create(VehicleDTO vehicleDTO) {
        Client client = clientService.findByCpf(vehicleDTO.getClientCpf());
        try {
            Vehicle vehicle = Vehicle.builder()
                    .licensePlate(vehicleDTO.getLicensePlate())
                    .year(vehicleDTO.getYear())
                    .model(vehicleDTO.getModel())
                    .accessories(vehicleDTO.getAccessories())
                    .observations(vehicleDTO.getObservations())
                    .client(client)
                    .build();
            return vehicleRepository.save(vehicle);
        } catch (DataIntegrityViolationException e) {
            throw new UniqueConstraintViolationException();
        }
    }
}
