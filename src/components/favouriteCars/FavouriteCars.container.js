import { connect } from "react-redux";

import FavouriteCars from './FavouriteCars.component';

const mapStateToProps = ({ carsList, categories, favouriteCars }) => ({
  loading: carsList.loading || categories.loading,
  error: carsList.error || categories.error,
  cars: carsList.cars,
  favouriteCars: favouriteCars.favouriteCars
});

export default connect(mapStateToProps, {})(FavouriteCars);
