package com.fct.michiapp.model.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
public class ChatLog {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "chatroom_id")
	private Integer chatroomId;
	@Column(name = "user_id")
	private Integer userId;
	private String message;
	@Column(name = "created_at")
	private Timestamp createdAt;

	public ChatLog() {
	}

	public ChatLog(Integer chatroomId, Integer userId, String message) {
		this.chatroomId = chatroomId;
		this.userId = userId;
		this.message = message;
		this.createdAt = new Timestamp(System.currentTimeMillis());
	}
}