package com.codecool.videoservice.controller;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.model.RecomResult;
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
    public Video getVideoWithRecommendations(@PathVariable long id) {
        return videoService.getVideoWithRecommendations(id);
    }

    @PostMapping("/{id}/recommendation")
    public RecomResult saveNewRecommendation(@PathVariable long id, @RequestBody RecomResult toSave) {
        return videoService.saveNewRecommendation(toSave);
    }

    @PutMapping("/{id}/recommendation")
    public RecomResult updateRecommendation(@PathVariable long id, @RequestBody RecomResult toUpdate) {
        return videoService.updateRecommendation(toUpdate);
    }


}
