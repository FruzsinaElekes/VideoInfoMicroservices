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
        <div>
            <h2>Some selected yoga videos</h2>
            <Container>
                {videoList && videoList.map(i => <p key={i.id}><Link to={`/video/${i.id}`}>{i.name}</Link></p>)}
            </Container>
        </div>
    )
}

const Container = styled.div`
    width: 300px;
    margin: auto;
`
