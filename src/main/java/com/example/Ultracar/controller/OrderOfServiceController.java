package com.example.Ultracar.controller;

import com.example.Ultracar.dtos.OrderOfServiceDTO;
import com.example.Ultracar.dtos.OrderOfServiceResponse;
import com.example.Ultracar.services.OrderOfServiceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/orderOfService")
public class OrderOfServiceController {

    @Autowired
    private OrderOfServiceService orderOfServiceService;

    @PostMapping
    public ResponseEntity<OrderOfServiceResponse> create
            (@Valid @RequestBody OrderOfServiceDTO orderOfServiceDTO) {
        OrderOfServiceResponse orderOfServiceResponse
                = orderOfServiceService.create(orderOfServiceDTO);

        return ResponseEntity.status(201).body(orderOfServiceResponse);
    }

}