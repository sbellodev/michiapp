package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.AddUserSettingsRequest;
import com.fct.michiapp.apirest.apimodels.DeleteUserSettingsRequest;
import com.fct.michiapp.apirest.apimodels.GetCityResponse;
import com.fct.michiapp.apirest.mappers.CityMapper;
import com.fct.michiapp.model.entities.*;
import com.fct.michiapp.model.entities.queries.UserAnimalData;
import com.fct.michiapp.model.entities.queries.UserSettingsData;
import com.fct.michiapp.model.repository.AnimalImageRepository;
import com.fct.michiapp.model.repository.AnimalRepository;
import com.fct.michiapp.model.repository.CityRepository;
import com.fct.michiapp.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Controller
public class UserSettingsController {
	@Autowired
	AnimalRepository animalRepository;
	@Autowired
	AnimalImageRepository animalImageRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	CityRepository cityRepository;
	@Autowired
	CityMapper cityMapper;


	@GetMapping("/usersettings/{id}")
	public ResponseEntity<UserSettingsData> getUserSetting(@PathVariable Integer id) {
		UserSettingsData us = userRepository.getUserSettingsDataById(id);
		return ResponseEntity.ok(us);
	}

	@GetMapping("/userfiles/{id}")
	public ResponseEntity<UserAnimalData> getUserFiles(@PathVariable Integer id) {
		UserAnimalData uf = userRepository.getUserFiles(id);
		return ResponseEntity.ok(uf);
	}

	@PostMapping("/addusersettings")
	public ResponseEntity<String> addUserSettings(@RequestBody AddUserSettingsRequest usApi) {
		Users u = userRepository.findById(usApi.getId()).orElse(null);
		Animal a = animalRepository.getAnimalById(usApi.getId());
		if (u == null || a == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User or animal not found");
		if (!usApi.getName().isEmpty()) u.setName(usApi.getName());
		if (usApi.getCityId() != 0) u.setCityId(usApi.getCityId());
		if (!usApi.getAnimalName().isEmpty()) a.setAnimalName((usApi.getAnimalName()));
		userRepository.save(u);
		animalRepository.save(a);
		return ResponseEntity.ok("User settings added");
	}

	@PostMapping("/addprofileimage")
	public ResponseEntity<String> addProfileImage(@RequestParam("files") MultipartFile[] files, @RequestParam("id") Integer id) throws IOException {
		Integer numImages = animalImageRepository.getNumImagesById(id);
		if (numImages > 4) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You can't upload more than 4 images");
		if (files != null) {
			Arrays.stream(files).forEach(file -> {
				try {
					animalImageRepository.saveFile(id, file.getOriginalFilename(),
						file.getBytes(), file.getContentType());
					Integer defaultImageId = animalImageRepository.getDefaultImageByUserId(id);
					if (defaultImageId != null)  animalImageRepository.deleteFile(defaultImageId);
				} catch (IOException e) {
					e.printStackTrace();
				}
			});
		} else {
			ResponseEntity.ok("File was empty");
		}
		return ResponseEntity.ok("File added");
	}

	@GetMapping("/getcitynames")
	public ResponseEntity<List<GetCityResponse>> getCityNames() {
		List<City> c = cityRepository.getCityNames();
		return ResponseEntity.ok(cityMapper.toListCityApi(c));
	}

	@PostMapping("/deleteimage")
	public ResponseEntity<String> deleteImage(@RequestBody DeleteUserSettingsRequest usApi) {
		Integer numImages = animalImageRepository.getNumImagesById(usApi.getUserId());
		if (numImages <= 1) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You can't delete the last image");
		try {
			animalImageRepository.deleteFile(usApi.getId());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File not found");
		}
		return ResponseEntity.ok("Image deleted");
	}
}
