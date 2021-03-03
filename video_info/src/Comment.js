import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {FaUserEdit} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Comment(props) {
    const [editable, setEditable] = useState(false)
    const commentUpdateRef= useRef()
    const ratingUpdateRef= useRef()
    const toggleEditable = () => setEditable(prev => !prev)


    const updateRecommendation = () => {
        const body = {
            id : props.recommendation.id,
            videoId : props.recommendation.videoId,
            comment: commentUpdateRef.current.value,
            rating: parseInt(ratingUpdateRef.current.value)
        }
        axios({
            method: "PUT",
            url: `http://localhost:8762/videoservice/video/${props.recommendation.videoId}/recommendation`,
            data: body,
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (response.status === 200){
                toggleEditable()
                props.setUpdater(prev => !prev)
            }
        })
    }

    return (
        <StyledComment>
            {!editable 
            ? <React.Fragment>
                <Rating>{props.recommendation.rating}</Rating>
                <Recommendation>{props.recommendation.comment}</Recommendation>
                <FaUserEdit onClick={toggleEditable}/>
            </React.Fragment>
            : <React.Fragment>
                <TextField inputRef={ratingUpdateRef} label="Rating" defaultValue={props.recommendation.rating} type="number"></TextField>
                <TextField inputRef={commentUpdateRef} label="Comment" defaultValue={props.recommendation.comment} multiline rows={4}></TextField>
                <Button onClick={updateRecommendation}>Save</Button>
            </React.Fragment>
            }
        </StyledComment>
    )
}

const StyledComment = styled.div`
    display:flex;
    margin: auto;
`

const Rating = styled.div`
    width: 3em;
    padding: 0 1em;
`

const Recommendation = styled.div`
    width: 15em;
    padding: 0 1em;

`