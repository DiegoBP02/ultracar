package com.example.Ultracar.controller;

import com.example.Ultracar.dtos.VehicleDTO;
import com.example.Ultracar.entities.Vehicle;
import com.example.Ultracar.services.VehicleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<Vehicle> create(@Valid @RequestBody VehicleDTO vehicleDTO) {
        Vehicle vehicle = vehicleService.create(vehicleDTO);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(vehicle.getId()).toUri();

        return ResponseEntity.created(uri).body(vehicle);
    }

}