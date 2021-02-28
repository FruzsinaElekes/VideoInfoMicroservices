import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import EmbeddedVideo from './EmbeddedVideo';

export default function DetailedPage() {
    
    const [details, setDetails] = useState(undefined)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8762/videoservice/video/${id}`)
        .then(response => setDetails(response.data))
    }, [])

    return (
        <div>
            {details !== undefined
            ? 
            <React.Fragment>
                <h2>{details.name}</h2>
                <EmbeddedVideo></EmbeddedVideo>
                <div>
                    {details.recommendations.map(r => <Comment key={r.id} recommendation={r}></Comment>)}
                </div>
            </React.Fragment>
            : <React.Fragment>Still loading data</React.Fragment>
            }
        </div>
    )
}
