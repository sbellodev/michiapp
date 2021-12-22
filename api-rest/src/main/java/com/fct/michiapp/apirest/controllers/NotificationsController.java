package com.fct.michiapp.apirest.controllers;

import com.fct.michiapp.apirest.apimodels.AddAnimalRequest;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.mail.Message;
import java.security.Principal;

@CrossOrigin
@Controller
public class NotificationsController {

	private SimpMessagingTemplate messagingTemplate;

	@MessageMapping("/hello")
	@SendTo("/topic/notification")
	public String greeting(String message) throws Exception {
		Thread.sleep(1000); // simulated delay
		return "Echo:" + message;
	}

	@MessageMapping("/addAnimal")
	@SendTo("/topic/notification")
	public AddAnimalRequest addAnimal(AddAnimalRequest message) throws Exception {
		Thread.sleep(1000); // simulated delay
		message.setAnimalName(message.getAnimalName() + " modificado");
		return message;
	}

	@MessageMapping("/imConnected")
	@SendToUser("/queue/reply")
	public String processMessageFromClient(@Payload Integer id, Principal principal, @Header("simpSessionId") String sessionId) {
		return "Recibido: soy " + id + "Con session: " + sessionId + " Principal: " + (principal != null ? principal.getName() : "nulll");
	}
}
