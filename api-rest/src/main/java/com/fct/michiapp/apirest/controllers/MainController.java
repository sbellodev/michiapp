package com.fct.michiapp.apirest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class MainController {
	@RequestMapping(value = {"/", "/signup", "/home", "/chats", "/chat", "/settings", "/apitest", "/profile/{\\d+}"})
	public String getIndex() {
		return "/index.html";
	}
}
