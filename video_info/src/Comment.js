import React from 'react'

export default function Comment(props) {
    return (
        <div>
            {props.recommendation.rating}: {props.recommendation.comment}
        </div>
    )
}
