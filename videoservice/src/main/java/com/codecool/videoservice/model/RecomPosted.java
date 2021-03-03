package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecomPosted {
    private Long id;
    private String comment;
    private int rating;
    private long videoId;
}
