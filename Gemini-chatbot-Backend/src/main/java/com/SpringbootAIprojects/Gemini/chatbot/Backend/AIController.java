package com.SpringbootAIprojects.Gemini.chatbot.Backend;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Api/query")
public class AIController {

    @Autowired
    private QueryService queryService;

    @PostMapping("/ask")
    public ResponseEntity<String> getResponse(@RequestBody Map<String, String> payload) {
        String query = payload.get("query");
        String response = queryService.getResponse(query);
        return ResponseEntity.ok(response);
    }
    
}
