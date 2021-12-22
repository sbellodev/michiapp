package com.fct.michiapp.model.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;


@Entity
@Data
public class ChatUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "user1_id")
	private Integer user1Id;
	@Column(name = "user2_id")
	private Integer user2Id;
	@Column(name = "created_at")
	private Timestamp createdAt;

	public ChatUser() {
	}

	public ChatUser(Integer user1Id, Integer user2Id) {
		this.user1Id = user1Id;
		this.user2Id = user2Id;
		this.createdAt = new Timestamp(System.currentTimeMillis());
	}
}