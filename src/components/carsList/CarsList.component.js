import React from "react";
import Line from '../../assets/line.png';
import { Categories, Subcategories, Car } from '../../components';
import './style.css';

const SubcategoriesApiMapping = {
  11: 'https://run.mocky.io/v3/4d1d1033-b9b2-4f65-ac78-0bdd210c1abb',
  13: 'https://run.mocky.io/v3/701a0454-ddb4-40e5-8ef1-86b870c6653f'
}

const initialState = {
  loading: false,
  error: false,
  subcategories: undefined
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_SUBCATEGORIES_PENDING':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'GET_SUBCATEGORIES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        subcategories: [
          {
            id: 0,
            label: "all"
          },
          ...action.subCategory
        ]
      }
    case 'GET_SUBCATEGORIES_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      }
    case 'SET_SUBCATEGORIES_UNDEFINED':
      return {
        ...state,
        loading: false,
        error: false,
        subcategories: undefined
      }
    default:
      return;
  }
};

export const CarsList = (props) => {
  const { categories = [], cars = [], favouriteCars = [] } = props;

  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [carsPrice, setCarsPrice] = React.useState({});

  const onAddPrice = (id, price) => {
    const updatedPriceList = { ...carsPrice, [id]: price };

    setCarsPrice(updatedPriceList);
  }

  const getSubcategories = (id) => {
    setSelectedCategory(id);

    if (id === 0) {
      // Subcategories are not shown for All tab.
      dispatch({ type: 'SET_SUBCATEGORIES_UNDEFINED' });
      setSelectedSubcategory(0);
      return;
    }

    dispatch({ type: 'GET_SUBCATEGORIES_PENDING' });
    fetch(SubcategoriesApiMapping[id])
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'GET_SUBCATEGORIES_SUCCESS', subCategory: data.subCategory });
        setSelectedSubcategory(0);
      })
      .catch(() => {
        dispatch({ type: 'GET_SUBCATEGORIES_ERROR' });
      })
  }

  const onToggleFavourite = (liked, car) => {
    let updatedFavouriteCars = [...favouriteCars];

    if (liked) {
      updatedFavouriteCars.push(car.id);
    } else {
      const index = updatedFavouriteCars.findIndex(item => item === car.id);
      updatedFavouriteCars.splice(index, 1);
    }

    props.updateFavouriteCars(updatedFavouriteCars);
  };

  const renderCards = () => {
    if (state.loading) {
      return (
        <div className="CardsList-LoaderWrapper">
          <div className="CardsList-Loader"></div>
        </div>
      )
    }

    if (state.error) {
      return (
        <div>Try again Later</div>
      )
    }

    const categoryCars = selectedCategory === 0 ? cars : cars.filter(car => car.catId === selectedCategory);
    const subcategoryCars = selectedSubcategory === 0 ? categoryCars : categoryCars.filter(car => car.subCatId === selectedSubcategory);
    subcategoryCars.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    const favourites = subcategoryCars.filter(car => favouriteCars.includes(car.id));
    const others = subcategoryCars.filter(car => !favouriteCars.includes(car.id));

    return (
      <>
        <Subcategories
          subcategories={state.subcategories}
          onSelectSubcategory={setSelectedSubcategory}
        />
        <div className="CarsList-cars">
          {favourites.map(car => (
            <Car
              key={car.id}
              car={car}
              showLikeButton={true}
              liked={true}
              price={carsPrice[car.id]}
              onAddPrice={onAddPrice}
              onToggleFavourite={(liked) => onToggleFavourite(liked, car)}
            />
          ))}
          {others.map((car) => (
            <Car
              key={car.id}
              car={car}
              showLikeButton={true}
              liked={favouriteCars.includes(car.id)}
              price={carsPrice[car.id]}
              onAddPrice={onAddPrice}
              onToggleFavourite={(liked) => onToggleFavourite(liked, car)}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <section className="CarsList" id="featured">
      <div class="CarsList-heading">
        <h2>Featured <em className="highlight">Cars</em></h2>
        <img src={Line} alt="" />
      </div>
      <div className="Tabs">
        <Categories
          categories={categories}
          loading={state.loading}
          getSubcategories={getSubcategories}
        />
      </div>
      {renderCards()}
    </section>
  )
};

export default CarsList;
