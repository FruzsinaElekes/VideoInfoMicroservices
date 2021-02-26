package com.codecool.videoservice.entity;

import com.codecool.videoservice.model.RecomResult;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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
    @ElementCollection
    private Set<RecomResult> recommendations = new HashSet<>();
}
