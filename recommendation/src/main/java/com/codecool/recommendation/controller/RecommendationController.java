package com.codecool.recommendation.controller;

import com.codecool.recommendation.entity.Recommendation;
import com.codecool.recommendation.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecommendationController {

    @Autowired
    private RecommendationService recommendationService;

    @GetMapping("/get/{videoId}")
    public List<Recommendation> getRecommendationsForVideo(@PathVariable long videoId) {
        return recommendationService.getAllRecommendationsForVideo(videoId);
    }

    @PostMapping("/new")
    public Recommendation postRecommendationForVideo(@RequestBody Recommendation toSave) {
        return recommendationService.saveNewRecommendation(toSave);
    }

    @PutMapping("/update")
    public Recommendation updateRecommendationForVideo(@RequestBody Recommendation toSave) {
        return recommendationService.updateRecommendation(toSave);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRecommendation(@PathVariable long id) {
        recommendationService.deleteRecommendation(id);
        return "Success";
    }

}
