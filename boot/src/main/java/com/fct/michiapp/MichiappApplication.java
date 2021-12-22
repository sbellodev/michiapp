package com.fct.michiapp;

import com.fct.michiapp.model.repository.UserLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class MichiappApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MichiappApplication.class, args);
	}

	@Autowired
	UserLikeRepository userLikeRepository;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("¡Hola Mundo!");
	}
}
