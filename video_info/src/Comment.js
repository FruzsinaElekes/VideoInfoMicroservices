import React from 'react'
import styled from 'styled-components'

export default function Comment(props) {
    return (
        <StyledComment>
            {props.recommendation.rating}: {props.recommendation.comment}
        </StyledComment>
    )
}

const StyledComment = styled.div`
    
`