package com.fct.michiapp.config;

import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.standard.TomcatRequestUpgradeStrategy;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

//import javax.mail.Message;
import javax.mail.MessagingException;
import java.security.Principal;
import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
@EnableWebSocket
@EnableWebSocketMessageBroker
@Slf4j
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Autowired
    @Qualifier("getUserIdRelation")
    private Map<String, String> userRelation;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic/", "/queue/");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/michisocket")
                .setHandshakeHandler(new AssignPrincipalHandshakeHandler())
                .setAllowedOrigins("*");
                //.setHandshakeHandler(new DefaultHandshakeHandler(new TomcatRequestUpgradeStrategy()))

                //.withSockJS();
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        //WebSocketMessageBrokerConfigurer.super.configureClientInboundChannel(registration);
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
                if (StompCommand.CONNECT.equals(accessor.getCommand())) {
                    log.info("configureClientInboundChannel: " + message.getHeaders().toString());
                    LinkedMultiValueMap<String, String> nativeHeaders = message.getHeaders().get("nativeHeaders", LinkedMultiValueMap.class);
                    ConcurrentHashMap<String, String> simpSessionAttributes = message.getHeaders().get("simpSessionAttributes", ConcurrentHashMap.class);

                    String uuidPrincipal = simpSessionAttributes.get("__principal__");
                    String userId = nativeHeaders.getFirst("login");

                    log.info("uuidPrincipal: " + uuidPrincipal);
                    log.info("userId: " + userId);

                    userRelation.put(userId, uuidPrincipal);
                }
                return message;
            }
        });
//        registration.interceptors(new ChannelInterceptor() {
//            @Override
//            public org.springframework.messaging.Message<?> preSend(org.springframework.messaging.Message<?> message, MessageChannel channel) {
//                return ChannelInterceptor.super.preSend(message, channel);
//            }
//        });

    }
}