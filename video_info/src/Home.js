import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';

export default function Home() {

    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8762/videoservice/video/list")
            .then(response => setVideoList(response.data))
    }, [])

    return (
        <div>
            <h2>This is the top part of the page</h2>
            <div>
                {videoList && videoList.map(i => <VideoItem key={i.id} base = {i}/>)}
            </div>
        </div>
    )
}
