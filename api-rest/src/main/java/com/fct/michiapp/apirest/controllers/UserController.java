package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.GetUserResponse;
import com.fct.michiapp.apirest.apimodels.AddUserRequest;
import com.fct.michiapp.apirest.mappers.UserMapper;
import com.fct.michiapp.model.entities.Animal;
import com.fct.michiapp.model.entities.AnimalImage;
import com.fct.michiapp.model.entities.Users;
import com.fct.michiapp.model.entities.queries.UserAnimalData;
import com.fct.michiapp.model.entities.queries.UserData;
import com.fct.michiapp.model.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
public class UserController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserMapper userMapper;
	@Autowired
	AnimalRepository animalRepository;
	@Autowired
	AnimalImageRepository animalImageRepository;

	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	@Autowired
	@Qualifier("getUserIdRelation")
	private Map<String, String> userRelation;


	@GetMapping("/user/{id}")
	public ResponseEntity<UserData> getUser(@PathVariable Integer id) {
		UserData user = userRepository.getUserById(id);
		if (user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<List<GetUserResponse>> getUsers(@PathVariable Integer id) {
		UserData user = userRepository.getUserById(id);
		List<UserAnimalData> users = userRepository.findNearUsers(user.getCityName());
		return ResponseEntity.ok(userMapper.toListUserAnimalDataApi(users));
	}

	@GetMapping("/userlogin/{email}/{password}")
	public ResponseEntity<Integer> getUserLogin(@PathVariable String email, @PathVariable String password) {
		Integer userExists = userRepository.findByEmailAndPassword(email, password);
		if (userExists == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		return ResponseEntity.ok(userExists);
	}

	@PostMapping("/adduser")
	public ResponseEntity<String> addUser(@RequestBody AddUserRequest uApi) {
		String email = uApi.getEmail();
		Integer emailExists = userRepository.findByEmail(email);
		if (emailExists != null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
		
		try{
			Users u = new Users(uApi.getName(), uApi.getCityId(), uApi.getEmail(), uApi.getPassword());
			AnimalImage a_def = animalImageRepository.getDefaultImage();
			if(a_def == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Default image not found");
			userRepository.save(u);

			Animal a = new Animal(u.getId(), uApi.getAnimalName());
			animalRepository.save(a);

			AnimalImage ai = new AnimalImage(u.getId(), a_def.getAnimalImg(), a_def.getImgEncoded(), a_def.getImgType());
			animalImageRepository.save(ai);
		}
		catch (Exception e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error creating account");
		}

		return ResponseEntity.ok("User added");
	}

	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
		userRepository.deleteById(id);
		return ResponseEntity.ok("User deleted");
	}

	@PutMapping("/updateuser/{id}")
	public ResponseEntity<String> updateUser(@PathVariable Integer id, @RequestBody GetUserResponse uApi) {
		Users user = userRepository.findById(id).orElse(null);
		if (user == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
		user.setName(uApi.getName());
		userRepository.save(user);
		return ResponseEntity.ok("User updated.");
	}

	@GetMapping("/testSession/{session}")
	public ResponseEntity<String> sendToSession(@PathVariable String session) {
		messagingTemplate.convertAndSendToUser(userRelation.get(session), "/queue/reply", "Mensaje enviado a la sesion");
		System.out.print("Mensaje enviado a la sesion");
		System.out.print(session);
		return ResponseEntity.ok("Mensaje enviado a la sesion: " + userRelation.get(session));
	}
}
