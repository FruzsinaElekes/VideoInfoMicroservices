package com.codecool.videoservice.controller;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.model.RecomPosted;
import com.codecool.videoservice.model.VideoComplete;
import com.codecool.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/video")
@CrossOrigin(value = "http://localhost:3000")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/list")
    private List<Video> getAllVideos() { return videoService.getAllVideos(); }

    @GetMapping("/{id}")
    public VideoComplete getVideoWithRecommendations(@PathVariable long id) {
        return videoService.getVideoWithRecommendations(id);
    }

    @PostMapping("/{id}/recommendation")
    public RecomPosted saveNewRecommendation(@PathVariable long id, @RequestBody RecomPosted toSave) {
        return videoService.saveNewRecommendation(toSave);
    }

    @PutMapping("/{id}/recommendation")
    public RecomPosted updateRecommendation(@PathVariable long id, @RequestBody RecomPosted toUpdate) {
        return videoService.updateRecommendation(toUpdate);
    }

    @DeleteMapping("/{id}/recommendation/{recId}")
    public String deleteRecommendation(@PathVariable long id, @PathVariable long recId) {
        videoService.deleteRecommendation(recId);
        return "Success";
    }
}
