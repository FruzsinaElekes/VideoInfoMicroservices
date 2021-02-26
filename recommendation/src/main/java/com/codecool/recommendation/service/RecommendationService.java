package com.codecool.recommendation.service;

import com.codecool.recommendation.entity.Recommendation;
import com.codecool.recommendation.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository recommendationRepository;

    public List<Recommendation> getAllRecommendationsForVideo(long videoId) {
        return recommendationRepository.findAllByVideo(videoId);
    }

    public Recommendation saveNewRecommendation(Recommendation recommendation) {
        return recommendationRepository.save(recommendation);
    }

    @Transactional
    public Recommendation updateRecommendation(Recommendation toSave) {
        Recommendation toUpdate = recommendationRepository.findById(toSave.getId()).orElseThrow(IllegalArgumentException::new);
        toUpdate.setComment(toSave.getComment());
        toUpdate.setRating(toSave.getRating());
        return toUpdate;
    }
}
