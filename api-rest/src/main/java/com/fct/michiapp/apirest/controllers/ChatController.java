package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.*;
import com.fct.michiapp.apirest.mappers.ChatLogMapper;
import com.fct.michiapp.apirest.mappers.ChatUserMapper;
import com.fct.michiapp.model.entities.ChatLog;
import com.fct.michiapp.model.entities.queries.ChatsData;
import com.fct.michiapp.model.repository.ChatLogRepository;
import com.fct.michiapp.model.repository.ChatUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
public class ChatController {
	@Autowired
	ChatLogRepository chatLogRepository;
	@Autowired
	ChatUserRepository chatUserRepository;
	@Autowired
	ChatLogMapper chatLogMapper;
	@Autowired
	ChatUserMapper chatUserMapper;
	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	@Autowired
	@Qualifier("getUserIdRelation")
	private Map<String, String> userRelation;

	@GetMapping("/chats/{user_id}") //
	public ResponseEntity<List<GetChatUserResponse>> getChats(@PathVariable Integer user_id) {
		List<ChatsData> chats = chatUserRepository.getChatsByUserId(user_id);
		return ResponseEntity.ok(chatUserMapper.toListChatUserApi(chats));
	}

	@GetMapping("/chat/{chat_id}") //
	public ResponseEntity<List<GetChatLogResponse>> getChatLog(@PathVariable Integer chat_id) {
		List<ChatLog> chat_log = chatLogRepository.findChatLogMessagesId(chat_id);
		return ResponseEntity.ok(chatLogMapper.toListChatLogApi(chat_log));
	}

	@PostMapping("/addmessage")
	public ResponseEntity<String> addMessage(@RequestBody AddChatLogRequest crApi) {
		ChatLog chatlog = new ChatLog(crApi.getChatroomId(), crApi.getUserId(), crApi.getMessage());
		chatLogRepository.save(chatlog);
		Integer otherId = chatLogRepository.findChatUserOtherId(crApi.getUserId(), crApi.getChatroomId());

		if (userRelation.containsKey("user-" + otherId)) {
			String jsonData = "{\"id\": " + chatlog.getId() + ", \"message\": \"" + crApi.getMessage() + "\", \"date\": \"" + chatlog.getCreatedAt() + "\"}";
			messagingTemplate.convertAndSendToUser(userRelation.get("user-" + otherId), "/queue/reply", jsonData);
		}

		return ResponseEntity.ok("Message added");
	}
}
