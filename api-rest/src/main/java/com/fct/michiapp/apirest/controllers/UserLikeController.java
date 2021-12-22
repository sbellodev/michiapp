package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.AddUserLikeRequest;
import com.fct.michiapp.apirest.apimodels.GetUserLikeResponse;
import com.fct.michiapp.apirest.mappers.UserLikeMapper;
import com.fct.michiapp.model.entities.ChatLog;
import com.fct.michiapp.model.entities.ChatUser;
import com.fct.michiapp.model.entities.UserLike;
import com.fct.michiapp.model.repository.ChatLogRepository;
import com.fct.michiapp.model.repository.ChatUserRepository;
import com.fct.michiapp.model.repository.UserLikeRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserLikeController {
	@Autowired
	UserLikeRepository userLikeRepository;
	@Autowired
	ChatUserRepository chatUserRepository;
	@Autowired
	ChatLogRepository chatLogRepository;
	@Autowired
	UserLikeMapper userLikeMapper;


	@GetMapping("/match/{user_id}")
	public ResponseEntity<List<GetUserLikeResponse>> getLikeMatch(@PathVariable Integer userId) {
		List<UserLike> userLike = userLikeRepository.findMatchById(userId);
		return ResponseEntity.ok(userLikeMapper.toListUserLikeApi(userLike));
	}

	@PostMapping("/adduserlike")
	public ResponseEntity<String> addLike(@RequestBody AddUserLikeRequest lApi) {
		Integer u1Id = lApi.getUserLikeId().getUser1Id();
		Integer u2Id = lApi.getUserLikeId().getUser2Id();
		if (u1Id == null || u2Id == null) return ResponseEntity.badRequest().body("User id is required");
		Integer chatExists = chatUserRepository.getChatId(u1Id, u2Id);
		Integer chatReverseExists = chatUserRepository.getChatId(u2Id, u1Id);
		if (chatExists != null || chatReverseExists != null) return ResponseEntity.ok("Already matched");
		Integer userLike = userLikeRepository.getMatch(u1Id, u2Id); // Our like
		Integer userReverseLike = userLikeRepository.getMatch(u2Id, u1Id); // Opposite's like

		if (userLike != null)
			return ResponseEntity.ok("Nothing changed");
		if (userReverseLike == null) {
			UserLike ul = new UserLike(lApi.getUserLikeId());
			userLikeRepository.save(ul);
			return ResponseEntity.ok("User like added");
		}
		ChatUser cu = new ChatUser(u1Id, u2Id);
		chatUserRepository.save(cu);
		ChatLog cl = new ChatLog(cu.getId(), u1Id, "<¡Ha sido Match!>");
		chatLogRepository.save(cl);
		return ResponseEntity.ok("User like Matched!");
	}

	@DeleteMapping("/deleteuserlike/{id}")
	public ResponseEntity<String> deleteLike(@PathVariable Integer id) {
		userLikeRepository.deleteById(id);
		return ResponseEntity.ok("Like deleted");
	}
}
