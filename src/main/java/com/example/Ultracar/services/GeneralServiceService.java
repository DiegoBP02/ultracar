package com.example.Ultracar.services;

import com.example.Ultracar.dtos.GeneralServiceDTO;
import com.example.Ultracar.entities.GeneralService;
import com.example.Ultracar.exceptions.UniqueConstraintViolationException;
import com.example.Ultracar.repositories.GeneralServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralServiceService {

    @Autowired
    private GeneralServiceRepository generalServiceRepository;

    public GeneralService create(GeneralServiceDTO generalServiceDTO) {
        try {
            GeneralService generalService = GeneralService.builder()
                    .serviceName(generalServiceDTO.getServiceName())
                    .build();
            return generalServiceRepository.save(generalService);
        } catch (DataIntegrityViolationException e) {
            throw new UniqueConstraintViolationException();
        }
    }

    public List<GeneralService> findAll() {
        return generalServiceRepository.findAll();
    }

}
