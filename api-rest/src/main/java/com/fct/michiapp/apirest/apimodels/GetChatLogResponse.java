package com.fct.michiapp.apirest.apimodels;

import java.io.Serializable;


public class GetChatLogResponse implements Serializable {
	private Integer id;
	private Integer chatroomId;
	private Integer userId;
	private String message;
	private String createdAt;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getChatroomId() {
		return chatroomId;
	}

	public void setChatroomId(Integer chatroomId) {
		this.chatroomId = chatroomId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
}
