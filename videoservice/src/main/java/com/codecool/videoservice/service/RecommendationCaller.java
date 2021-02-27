package com.codecool.videoservice.service;

import com.codecool.videoservice.model.RecomResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Set;

@Service
public class RecommendationCaller {

    @Value("${recommendation.url}")
    private String baseUrl;

    @Autowired
    RestTemplate restTemplate;

    public Set<RecomResult> getRecommendationsForVideo(long video) {
        String url = String.format(baseUrl + "/get/%s", video);
        ResponseEntity<RecomResult[]> entity = restTemplate.getForEntity(url, RecomResult[].class);
        RecomResult[] results = entity.getBody();
        return Set.of(results);
    }

    public RecomResult saveNewRecommendation(RecomResult recomResult) {
        String url = baseUrl + "/new";
        HttpEntity<RecomResult> entity = new HttpEntity<>(recomResult);
        return restTemplate.postForObject(url, entity, RecomResult.class);
    }

    public RecomResult updateRecommendation(RecomResult toUpdate) {
        String url = baseUrl + "/update";
        HttpEntity<RecomResult> entity = new HttpEntity<>(toUpdate);
        HttpEntity<RecomResult> response = restTemplate.exchange(url, HttpMethod.PUT, entity, RecomResult.class);
        return response.getBody();
    }

}
