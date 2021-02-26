package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Embeddable
public class RecomResult {

    private long id;
    private int rating;
    private String comment;
    private long video;
}
