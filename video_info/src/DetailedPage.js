import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        <Container>
            <Button variant="contained" color="primary"><StyledLink to="/">Home</StyledLink></Button>
            {details !== undefined
            ? 
            <React.Fragment>
                <h2>{details.name}</h2>
                <EmbeddedVideo url={details.url}></EmbeddedVideo>
                <CommentsSection>
                {details.recommendations.length > 0 ?
                    <React.Fragment>
                        <h3>Recommendations</h3>
                        <CommentList>
                            {details.recommendations.map(r => <Comment setUpdater={setUpdater} key={r.id} recommendation={r}></Comment>)}
                        </CommentList>
                    </React.Fragment>
                   : <p>Be the first to post a recommendation!</p>
                }
                </CommentsSection>

                {!showForm && <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Add recommendation</Button>}
                {showForm && <Form setUpdater={setUpdater} videoId={id} setShowForm={setShowForm} ></Form>}

            </React.Fragment>
            : <React.Fragment>Still loading data</React.Fragment>
            }
        </Container>
    )
}

const CommentsSection = styled.div`
    width: 50vw;
    margin: 2em auto;
`

const CommentList = styled.div`
    display: grid;
    grid-gap: 1em;
    margin-bottom: 3em;
    margin-top: 3em;
`

const Container = styled.div`
    text-align: center;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    :visited{
        color:white
    }
`