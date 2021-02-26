package com.codecool.videoservice.controller;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/video")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/list")
    private List<Video> getAllVideos() { return videoService.getAllVideos(); }

    @GetMapping("/{id}")
    public Video getVideoWithRecommendations(@PathVariable long id) {
        System.out.println("requested video");
        return videoService.getVideoWithRecommendations(id);
    }


}
