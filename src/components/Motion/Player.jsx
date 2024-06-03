import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
    return (
        <div className="player-wrapper">
            <ReactPlayer url='https://www.youtube.com/watch?v=8zJMZmL9Coc' controls />
            <ReactPlayer url='https://www.youtube.com/watch?v=fe__k2dqPHw' controls />
            <ReactPlayer url='https://www.youtube.com/watch?v=K_woAdodpqw' controls />
            <ReactPlayer url='https://www.youtube.com/watch?v=hoKDrFyQDy0' controls />
        </div>
    );
}

export default VideoPlayer;