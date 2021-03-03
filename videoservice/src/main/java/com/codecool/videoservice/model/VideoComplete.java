package com.codecool.videoservice.model;

import com.codecool.videoservice.entity.Video;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class VideoComplete {

    private Long id;
    private String name;
    private String url;
    private Set<RecomPosted> recommendations = new HashSet<>();

    public VideoComplete(Video video){
        this.id = video.getId();
        this.name = video.getName();
        this.url = video.getUrl();
    }
}
