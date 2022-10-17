import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) =>{
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src="https://i.ytimg.com/vi/yHtRtuLcHFk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8qeHJaIJODSinit-AWLRAxoacSg" alt="" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time:' 00.00',
    title:'Default title',
    desc:'999999x ditonton, 9999 hari yang lalu'
}
export default YoutubeComponent;