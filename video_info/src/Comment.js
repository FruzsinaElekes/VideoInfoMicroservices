import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {FaUserEdit} from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
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

    const deleteRecommendation = () => {
        axios.delete(`http://localhost:8762/videoservice/video/${props.recommendation.videoId}/recommendation/${props.recommendation.id}`)
        .then(response => {
            if (response.status === 200){
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
                <MdDelete onClick={deleteRecommendation}></MdDelete>
            </React.Fragment>
            : <React.Fragment>
                <EditableRating 
                    inputRef={ratingUpdateRef}
                    label="Rating"
                    defaultValue={props.recommendation.rating} 
                    type="number">
                </EditableRating>
                <TextField 
                    inputRef={commentUpdateRef} 
                    label="Comment" 
                    defaultValue={props.recommendation.comment} multiline></TextField>
                <Button onClick={updateRecommendation}>Save</Button>
            </React.Fragment>
            }
        </StyledComment>
    )
}

const StyledComment = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin: auto;
    width: 100%
`

const Rating = styled.div`
    width: 3em;
    padding: 0 1em;
`

const Recommendation = styled.div`
    width: 15em;
    padding: 0 1em;
    word-wrap: break-word
`
const EditableRating = styled(TextField)`
    width: 3em;
    margin:0 1em;
`