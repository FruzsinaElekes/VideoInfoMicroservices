package com.codecool.videoservice;

import com.codecool.videoservice.entity.Video;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
@EnableEurekaClient
public class VideoserviceApplication {

    private VideoRepository videoRepository;

    @Autowired
    public VideoserviceApplication(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

	public static void main(String[] args) {
		SpringApplication.run(VideoserviceApplication.class, args);
	}

	@PostConstruct
    public void createData(){
        List<Video> videos = List.of(
                Video.builder()
                        .name("peaceful warrior")
                        .url("https://www.youtube.com/watch?v=YUIlJU7-rB4&list=PLui6Eyny-UzytwJuOoFMlOtDFjo7MwXZY&ab_channel=YogaWithAdriene")
                        .build(),
                Video.builder()
                        .name("uncertainty")
                        .url("https://www.youtube.com/watch?v=fLlFSWgK2y4&ab_channel=YogaWithAdriene")
                        .build(),
                Video.builder()
                        .name("discipline")
                        .url("https://www.youtube.com/watch?v=_Ki_-GM_5Ec&ab_channel=YogaWithAdriene")
                        .build(),
                Video.builder()
                        .name("let it go")
                        .url("https://www.youtube.com/watch?v=iIHCWMplHsw&ab_channel=YogaWithAdriene")
                        .build()
                );
        videoRepository.saveAll(videos);
    }
}
