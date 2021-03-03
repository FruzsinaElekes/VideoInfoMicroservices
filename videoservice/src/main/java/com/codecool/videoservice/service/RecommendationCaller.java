package com.codecool.videoservice.service;

import com.codecool.videoservice.model.RecomPosted;
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

    public Set<RecomPosted> getRecommendationsForVideo(long video) {
        String url = String.format(baseUrl + "/get/%s", video);
        ResponseEntity<RecomPosted[]> entity = restTemplate.getForEntity(url, RecomPosted[].class);
        RecomPosted[] results = entity.getBody();
        return Set.of(results);
    }

    public RecomPosted saveNewRecommendation(RecomPosted recomPosted) {
        String url = baseUrl + "/new";
        HttpEntity<RecomPosted> entity = new HttpEntity<>(recomPosted);
        return restTemplate.postForObject(url, entity, RecomPosted.class);
    }

    public RecomPosted updateRecommendation(RecomPosted toUpdate) {
        String url = baseUrl + "/update";
        HttpEntity<RecomPosted> entity = new HttpEntity<>(toUpdate);
        HttpEntity<RecomPosted> response = restTemplate.exchange(url, HttpMethod.PUT, entity, RecomPosted.class);
        return response.getBody();
    }

    public void deleteRecommendation(long recId) {
        String url = baseUrl + "/delete/" + recId;
        restTemplate.delete(url);
    }
}
