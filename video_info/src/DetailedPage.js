import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import EmbeddedVideo from './EmbeddedVideo';
import Form from "./Form";
import Button from '@material-ui/core/Button';

export default function DetailedPage() {
    
    const [details, setDetails] = useState(undefined)
    const {id} = useParams()
    const [showForm, setShowForm] = useState(false)
    const [updater, setUpdater] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8762/videoservice/video/${id}`)
        .then(response => setDetails(response.data))
    }, [updater])

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
                {!showForm && <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Add recommendation</Button>}
                {showForm && <Form setUpdater={setUpdater} videoId={id} setShowForm={setShowForm} ></Form>}

            </React.Fragment>
            : <React.Fragment>Still loading data</React.Fragment>
            }
        </div>
    )
}
