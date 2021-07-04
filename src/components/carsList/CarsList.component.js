import React from "react";
import Line from '../../assets/line.png';
import { Categories, Subcategories, Car } from '../../components';
import './style.css';

export const CarsList = (props) => {
  const onToggleFavourite = (liked, car) => {
    const { favouriteCars = [] } = props;
    let updatedFavouriteCars = [...favouriteCars];

    if (liked) {
      updatedFavouriteCars.push(car.id);
    } else {
      const index = updatedFavouriteCars.findIndex(item => item === car.id);
      updatedFavouriteCars.splice(index, 1);
    }

    props.updateFavouriteCars(updatedFavouriteCars);
  };

  const { categories = [], cars = [], favouriteCars = [] } = props;

  return (
    <section className="CarsList" id="featured">
      <div class="CarsList-heading">
        <h2>Featured <em className="highlight">Cars</em></h2>
        <img src={Line} alt="" />
      </div>
      <div className="Tabs">
        <Categories categories={categories} />
        <Subcategories />
      </div>
      <div className="CarsList-cars">
        {cars.map((car) => (
          <Car
            key={car.id}
            car={car}
            showLikeButton={true}
            liked={favouriteCars.includes(car.id)}
            onToggleFavourite={(liked) => onToggleFavourite(liked, car)}
          />
        ))}
      </div>
    </section>
  )
};

export default CarsList;
