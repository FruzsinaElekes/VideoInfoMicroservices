package com.codecool.videoservice.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Video {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Column(unique = true)
    private String url;
}
