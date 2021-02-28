import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoItem(props) {
    return (
        <div>
            {props.base.id + ". "} <Link to={`/video/${props.base.id}`}>{props.base.name}</Link>
        </div>
    )
}
