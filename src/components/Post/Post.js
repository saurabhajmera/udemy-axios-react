import React from 'react';

import './Post.css';

const post = (props) => {
    return (
        <article className="Post" onClick={props.clickHandler}>
            <h1>{props.title}</h1>
            <div className="Info">
                {props.body}
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default post;
