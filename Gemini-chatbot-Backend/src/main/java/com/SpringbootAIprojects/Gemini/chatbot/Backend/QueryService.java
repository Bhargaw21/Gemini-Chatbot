package com.SpringbootAIprojects.Gemini.chatbot.Backend;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Value;

@Service
public class QueryService {

    // Access the API key and the URL [Gemini]
    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public QueryService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }


    public String getResponse(String query) {

        // Construct the request paylaod

        Map<String , Object> requestBody = Map.of(
            "contents" , new Object[] {
                Map.of(
                    "parts",new Object[] {
                        Map.of(
                            "text" , query
                        )})});


        //make the api call

       String response =  webClient.post()
        .uri(geminiApiUrl + geminiApiKey)
        .header("Content-Type", "application/json")
        .bodyValue(requestBody)
        .retrieve()
        .bodyToMono(String.class)
        .block();


        //return response

        return response;
    }

}

    
