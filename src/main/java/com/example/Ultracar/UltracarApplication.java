package com.example.Ultracar;

import com.example.Ultracar.entities.User;
import com.example.Ultracar.enums.Role;
import com.example.Ultracar.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class UltracarApplication {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(UltracarApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            User admin = User.builder()
                    .name("admin")
                    .password(passwordEncoder.encode("password"))
                    .role(Role.ADMIN)
                    .build();
            userRepository.save(admin);
        };
    }

}
