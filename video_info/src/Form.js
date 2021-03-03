import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios'


export default function Form(props) {

    const commentRef = useRef()
    const ratingRef = useRef()

    const submit = () => {
        const body = {
            videoId : props.videoId,
            comment: commentRef.current.value,
            rating: ratingRef.current.value
        }
        axios({
            method: 'POST',
            url: `http://localhost:8762/videoservice/video/${props.videoId}/recommendation`, 
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.status === 200){
                props.setShowForm(false)
                props.setUpdater(prev => !prev)
            }
            })
    }

    return (
        <FormContainer>
            <TextField inputRef={ratingRef} label="Rating" type="number" inputProps={{min : 1, max : 5}}></TextField>
            <TextField inputRef={commentRef} label="Comment" multiline rows={4}></TextField>
            <div>
                <Button variant="contained" color="primary" width="100px" onClick={() => props.setShowForm(false)}>Cancel</Button>
                <Button variant="contained" color="secondary" onClick={submit}>Submit</Button>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin: auto;
    width: 300px;
    display: flex;
    flex-direction: column;
`