import React from "react";
import './style.css';

export const Car = (props) => {
  const { car = {}, liked, onToggleFavourite, showLikeButton } = props;

  const onErrorHandler = (e) => {
    e.target.onerror = null;

    // Fallback Image
    e.target.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-109.jpeg?q=85';
  }

  return (
    <div className="Car">
      <img
        className="Car-image"
        src={car.photo}
        onError={onErrorHandler}
      />
      <div className="Car-info">
        <h4 className="Car-title">{car.name}</h4>
        {showLikeButton && (
          <>
            <input
              defaultChecked={liked}
              onChange={(e) => onToggleFavourite(e.target.checked)}
              type="checkbox"
              id={`like-${car.id}`}
              className="Car-likeIcon"
            />
            <label htmlFor={`like-${car.id}`} className="Car-likeLabel">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
              </svg>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default Car;
