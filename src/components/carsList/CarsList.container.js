import { connect } from "react-redux";
import { updateFavouriteCars } from '../../redux/favouriteCars';

import CarsList from './CarsList.component';

const mapStateToProps = ({ carsList, categories, favouriteCars }) => ({
  cars: carsList.cars,
  categories: categories.categories,
  favouriteCars: favouriteCars.favouriteCars
});

export default connect(mapStateToProps, {
  updateFavouriteCars
})(CarsList);
