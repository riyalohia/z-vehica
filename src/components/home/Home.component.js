import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './style.css';
import { Section, CarsList, FavouriteCars, Layout } from '../../components';

export const Home = (props) => {
  React.useEffect(() => {
    props.getCategories();
    props.getCars();
  }, []);

  if (props.loading) {
    return (
      <div className="Home Home--loading">
        <span class="Dot Dot-1"></span>
        <span class="Dot Dot-2"></span>
        <span class="Dot Dot-3"></span>
        <span class="Dot Dot-4"></span>
      </div>
    );
  }

  if (props.error) {
    return (
      <div className="Home Home--error">
        <h2 className="Home-heading">There is a problem loading this page</h2>
      </div>
    );
  }

  const component = () => (
    <>
      <Section />
      <CarsList />
    </>
  );

  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={component} />
          <Route exact path="/favourites" component={FavouriteCars} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Home;
