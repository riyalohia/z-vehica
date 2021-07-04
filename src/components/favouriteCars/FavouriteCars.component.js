import React from "react";
import { withRouter } from "react-router-dom";
import Line from '../../assets/line.png';
import { Car } from '../../components';
import './style.css';

export const FavouriteCars = withRouter((props) => {
  const { favouriteCars = [], cars = [] } = props;
  const filteredCars = cars.filter(car => favouriteCars.find(favouriteCar => favouriteCar === car.id));

  const onClickHandler = () => {
    props.history.push('/');
  }

  if (!favouriteCars.length) {
    return (
      <section className="FavouriteCars">
        <div className="FavouriteCars-wrapper">
          <h2 className="FavouriteCars-emptyHeading">List is Empty.</h2>
          <div className="Section-button" onClick={onClickHandler}>
            Add Favourites
        </div>
        </div>
      </section>
    );
  }

  return (
    <section className="FavouriteCars">
      <div class="FavouriteCars-heading">
        <h2>Favourite <em className="highlight">Cars</em></h2>
        <img src={Line} alt="" />
      </div>
      <div className="FavouriteCars-cars">
        {filteredCars.map((car, index) => (
          <Car
            key={car.id}
            car={car}
            showLikeButton={false}
          />
        ))}
      </div>
    </section>
  )
});

export default FavouriteCars;
