import React from 'react';
import './index.scss';

const LinkOut = ({ content }) => {
    return (
        <div className="linkout-spacing">
            {content.name && <a href={content.url}>{content.name}</a>}
        </div>
    )
}
export default LinkOut