package com.codecool.videoservice.service;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.model.RecomPosted;
import com.codecool.videoservice.model.VideoComplete;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private RecommendationCaller recommendationCaller;

    public List<Video> getAllVideos(){ return videoRepository.findAll(); }

    public VideoComplete getVideoWithRecommendations(long videoId) {
        Video video = videoRepository.findById(videoId).orElseThrow(IllegalArgumentException::new);
        Set<RecomPosted> results = recommendationCaller.getRecommendationsForVideo(videoId);
        VideoComplete videoComplete = new VideoComplete(video);
        videoComplete.setRecommendations(results);
        return videoComplete;
    }

    public RecomPosted saveNewRecommendation(RecomPosted toSave) {
        return recommendationCaller.saveNewRecommendation(toSave);
    }

    public RecomPosted updateRecommendation(RecomPosted toUpdate) {
        return recommendationCaller.updateRecommendation(toUpdate);
    }
}
