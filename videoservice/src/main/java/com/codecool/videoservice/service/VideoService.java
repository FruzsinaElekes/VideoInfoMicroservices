package com.codecool.videoservice.service;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.model.RecomResult;
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

    public Video getVideoWithRecommendations(long videoId) {
        Video video = videoRepository.findById(videoId).orElseThrow(IllegalArgumentException::new);
        System.out.println(video.getName());
        Set<RecomResult> results = recommendationCaller.getRecommendationsForVideo(videoId);
        video.setRecommendations(results);
        return video;
    }

}
