import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Home() {

    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8762/videoservice/video/list")
            .then(response => setVideoList(response.data))
    }, [])

    return (
        <Container>
            <h2>Some selected videos</h2>
            <VideoList>
                {videoList && videoList.map(i => <p key={i.id}><Link to={`/video/${i.id}`}>{i.name}</Link></p>)}
            </VideoList>
        </Container>
    )
}

const VideoList = styled.div`
    width: 300px;
    margin: auto;
`

const Container = styled.div`
    text-align:center;
`
