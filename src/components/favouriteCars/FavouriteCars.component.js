import React from "react";
import Line from '../../assets/line.png';
import { Car } from '../../components';
import './style.css';

export const FavouriteCars = (props) => {
  const { favouriteCars = [], cars = [] } = props;
  const filteredCars = cars.filter(car => favouriteCars.find(favouriteCar => favouriteCar === car.id));

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
};

export default FavouriteCars;
