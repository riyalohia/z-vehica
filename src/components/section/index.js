import React from "react";
import { withRouter } from 'react-router-dom';
import video from '../../assets/video.mp4';
import './style.css';

export const Section = withRouter((props) => {
  const onClickHandler = () => {
    props.history.push('/favourites');
  };

  return (
    <div className="Section Col--12">
      <video loop={true} autoPlay={true} muted={true} className="Section-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="Section-wrapper">
        <div className="Section-header">
          <h2 className="Section-heading">
            Find your
            <em className="highlight Section-highlight">perfect</em>
            car!
          </h2>
          <div className="Section-button" onClick={onClickHandler}>
            Favourite Cars
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section;
