package com.fct.michiapp.model.entities.queries;


import java.util.List;

public class ChatRoom {
	private Integer user1Id;
	private List<ChatRoom> cr;

	public ChatRoom(Integer user1Id) {
		this.user1Id = user1Id;
	}

	public List<ChatRoom> getChatRoomsByUserId(Integer user1Id) {
		return this.cr;
	}
}
