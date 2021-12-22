package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.AddAnimalRequest;
import com.fct.michiapp.apirest.apimodels.GetAnimalResponse;
import com.fct.michiapp.apirest.mappers.AnimalMapper;
import com.fct.michiapp.model.entities.Animal;
import com.fct.michiapp.model.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class AnimalController {
	@Autowired
	AnimalRepository animalRepository;
	@Autowired
	AnimalMapper animalMapper;


	@GetMapping("/animal/{id}")
	public ResponseEntity<GetAnimalResponse> getAnimal(@PathVariable Integer id) {
		Optional<Animal> animal = animalRepository.findByUserId(id);
		if (animal.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(animalMapper.toAnimalApi(animal.get()));
	}

	@PostMapping("/addanimal")
	public ResponseEntity<String> addAnimal(@RequestBody AddAnimalRequest aApi) {
		animalRepository.save(animalMapper.toAnimalRequest(aApi));
		return ResponseEntity.ok("Animal added");
	}

	@PutMapping("/updateanimal/{id}")
	public ResponseEntity<String> updateAnimal(@PathVariable Integer id, @RequestBody GetAnimalResponse aApi) {
		Animal animal = animalRepository.findById(id).orElse(null);
		if (animal == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Animal not found");
		animal.setAnimalName(aApi.getAnimalName());
		animalRepository.save(animal);
		return ResponseEntity.ok("Animal updated successfully");
	}

	@DeleteMapping("/deleteanimal/{id}")
	public ResponseEntity<String> deleteAnimal(@PathVariable Integer id) {
		animalRepository.deleteById(id);
		return ResponseEntity.ok("Animal deleted");
	}
}
