import React from 'react';
import styled from 'styled-components'
import ReactPlayer from "react-player";

export default function EmbeddedVideo(props) {
    return (
        <div>
            <StyledReactPlayer url={props.url}/>
        </div>
    )
}

const StyledReactPlayer = styled(ReactPlayer)`
    margin: auto
`