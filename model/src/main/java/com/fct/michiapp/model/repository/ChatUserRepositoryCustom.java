package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.ChatUser;
import com.fct.michiapp.model.entities.queries.ChatsData;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChatUserRepositoryCustom {
	List<ChatsData> getChatsByUserId(Integer userId);
}
