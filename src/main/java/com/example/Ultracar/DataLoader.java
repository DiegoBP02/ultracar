package com.example.Ultracar;

import com.example.Ultracar.entities.*;
import com.example.Ultracar.enums.Accessory;
import com.example.Ultracar.enums.Role;
import com.example.Ultracar.enums.Situation;
import com.example.Ultracar.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private VehicleRepository vehicleRepository;
    @Autowired
    private ObservationRepository observationRepository;
    @Autowired
    private SpecificServiceRepository specificServiceRepository;
    @Autowired
    private GeneralServiceRepository generalServiceRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        createAdmin();
        Client client1 = createClient1();
        Client client2 = createClient2();
        Client client3 = createClient3();
        createVehicle1(client1);
        createVehicle2(client2);
        createVehicle3(client3);
        createObservations();
        createSpecificServices();
        createGeneralServices();
    }

    private void createObservations() {
        Observation observation1 = Observation.builder()
                .name("Arranhão pequeno")
                .situation(Situation.REPAIR)
                .build();

        Observation observation2 = Observation.builder()
                .name("Amassado na porta")
                .situation(Situation.FIXED)
                .build();

        Observation observation3 = Observation.builder()
                .name("Pintura descascada")
                .situation(Situation.IN_PROGRESS)
                .build();

        List<Observation> observations = Arrays.asList(observation1, observation2, observation3);

        observationRepository.saveAll(observations);

        System.out.println("Observation saved: " + observation1.getId());
    }

    private void createSpecificServices() {
        SpecificService specificService1 = SpecificService.builder()
                .vehicleModel("Challenger")
                .serviceName("troca de airbag")
                .situation(Situation.REPAIR)
                .build();
        SpecificService specificService2 = SpecificService.builder()
                .vehicleModel("Fiesta")
                .serviceName("reparo do motor")
                .situation(Situation.FIXED)
                .build();
        SpecificService specificService3 = SpecificService.builder()
                .vehicleModel("Gol")
                .serviceName("substituição da bateria")
                .situation(Situation.IN_PROGRESS)
                .build();

        List<SpecificService> specificServices
                = Arrays.asList(specificService1, specificService2, specificService3);

        specificServiceRepository.saveAll(specificServices);

        System.out.println("SpecificService saved: " + specificService1.getId());
    }

    private void createGeneralServices() {
        GeneralService generalService1 = GeneralService.builder()
                .serviceName("lavagem do carro")
                .situation(Situation.PENDING)
                .build();

        GeneralService generalService2 = GeneralService.builder()
                .serviceName("troca de óleo")
                .situation(Situation.IN_PROGRESS)
                .build();

        GeneralService generalService3 = GeneralService.builder()
                .serviceName("alinhamento e balanceamento")
                .situation(Situation.IN_PROGRESS)
                .build();

        List<GeneralService> generalServices
                = Arrays.asList(generalService1, generalService2, generalService3);

        generalServiceRepository.saveAll(generalServices);

        System.out.println("GeneralService saved: " + generalService1.getId());
    }

    private void createVehicle1(Client client1) {
        Vehicle vehicle1 = Vehicle.builder()
                .client(client1)
                .licensePlate("11111")
                .model("Fiesta")
                .year("2019")
                .accessories(Collections.singletonList(Accessory.ACS))
                .build();
        Vehicle savedVehicle = vehicleRepository.save(vehicle1);
        System.out.println("Vehicle saved: " + savedVehicle.getId());
    }

    private void createVehicle2(Client client2) {
        Vehicle vehicle2 = Vehicle.builder()
                .client(client2)
                .licensePlate("22222")
                .model("Gol")
                .year("2018")
                .accessories(Collections.singletonList(Accessory.ACS))
                .build();
        vehicleRepository.save(vehicle2);
    }

    private void createVehicle3(Client client3) {
        Vehicle vehicle3 = Vehicle.builder()
                .client(client3)
                .licensePlate("11111")
                .model("Fiesta")
                .year("2019")
                .accessories(Collections.singletonList(Accessory.ACS))
                .build();
        vehicleRepository.save(vehicle3);
    }

    private Client createClient1() {
        Client client1 = Client.builder()
                .name("Cliente 1")
                .phone("111111111")
                .email("cliente1@email.com")
                .cpf("11111111111")
                .address("Endereço 1")
                .build();
        Client savedClient = clientRepository.save(client1);
        System.out.println("Client saved: " + savedClient.getId());
        return savedClient;
    }

    private Client createClient2() {
        Client client2 = Client.builder()
                .name("Cliente 2")
                .phone("222222222")
                .email("cliente2@email.com")
                .cpf("22222222222")
                .address("Endereço 2")
                .build();
        return clientRepository.save(client2);
    }

    private Client createClient3() {
        Client client3 = Client.builder()
                .name("Cliente 3")
                .phone("333333333")
                .email("cliente3@email.com")
                .cpf("33333333333")
                .address("Endereço 3")
                .build();
        return clientRepository.save(client3);
    }

    private void createAdmin() {
        User admin = User.builder()
                .name("admin")
                .password(passwordEncoder.encode("senha"))
                .role(Role.ADMIN)
                .build();
        User savedAdmin = userRepository.save(admin);
        System.out.println("Admin saved: " + savedAdmin.getId());
    }
}