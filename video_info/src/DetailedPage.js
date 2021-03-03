import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import EmbeddedVideo from './EmbeddedVideo';
import Form from "./Form";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

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
                <EmbeddedVideo url={details.url}></EmbeddedVideo>
                <CommentsSection>
                {details.recommendations.length > 0 ?
                    <React.Fragment>
                        <h3>Comments Section:</h3>
                        <CommentList>
                            {details.recommendations.map(r => <Comment setUpdater={setUpdater} key={r.id} recommendation={r}></Comment>)}
                        </CommentList>
                    </React.Fragment>
                   : <p>Be the first to post a comment!</p>
                }
                </CommentsSection>

                {!showForm && <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Add recommendation</Button>}
                {showForm && <Form setUpdater={setUpdater} videoId={id} setShowForm={setShowForm} ></Form>}

            </React.Fragment>
            : <React.Fragment>Still loading data</React.Fragment>
            }
        </div>
    )
}

const CommentsSection = styled.div`
    width: 50vw;
    margin: 3em auto;
    border: 1px solid blueviolet;
    border-radius: 10px;
`

const CommentList = styled.div`
    display: grid;
    grid-gap: 1em;
    margin-bottom: 1em;

`