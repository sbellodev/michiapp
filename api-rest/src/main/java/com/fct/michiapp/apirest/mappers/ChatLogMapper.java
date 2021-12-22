package com.fct.michiapp.apirest.mappers;

import com.fct.michiapp.apirest.apimodels.AddChatLogRequest;
import com.fct.michiapp.apirest.apimodels.GetChatLogResponse;
import com.fct.michiapp.model.entities.ChatLog;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChatLogMapper {
    List<GetChatLogResponse> toListChatLogApi(List<ChatLog> cl);
}
