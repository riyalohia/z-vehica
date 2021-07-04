import { connect } from "react-redux";
import { getCars } from '../../redux/carsList';
import { getCategories } from '../../redux/categories';

import Home from './Home.component';

const mapStateToProps = ({ carsList, categories }) => ({
  loading: carsList.loading || categories.loading,
  error: carsList.error || categories.error,
  cars: carsList.cars,
  categories: categories.categories,
});

export default connect(mapStateToProps, {
  getCars,
  getCategories,
})(Home);
