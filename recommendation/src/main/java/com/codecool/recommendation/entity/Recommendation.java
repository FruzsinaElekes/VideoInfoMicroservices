package com.codecool.recommendation.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recommendation {

    @Id
    @GeneratedValue
    private long id;
    private int rating;
    private String comment;
    private long videoId;
}
