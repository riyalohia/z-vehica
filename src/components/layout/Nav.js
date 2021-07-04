import React from "react";
import classNames from 'classnames';
import { withRouter, useLocation } from 'react-router-dom';

const pathMapping = {
  '/': 'home',
  '/favourites': 'favourite'
}

export const Nav = withRouter((props) => {
  const location = useLocation();
  const pathName = location.pathname;
  const active = pathMapping[pathName];

  const onClickHome = () => {
    props.history.push('/');
  };

  const onClickFavourite = () => {
    props.history.push('/favourites');
  };

  const headerClass = classNames({
    ['Nav-header']: true,
    ['Nav-header--dark']: active === 'favourite'
  })

  const logoClass = classNames({
    ['Nav-logo']: true,
    ['Nav-logo--dark']: active === 'favourite'
  });

  const getClass = (id) => {
    const itemClass = classNames({
      ['Nav-listItem']: true,
      ['Nav-listItem--dark']: active === 'favourite',
      ['Nav-listItem--active']: active === id
    });

    return itemClass;
  };

  return (
    <header className={headerClass}>
      <div className="Nav-container">
        <div className="Row">
          <div className="Col--8 Col--s-12 Col--xs-12 Nav-logoWrapper">
            <a href="/" className={logoClass}>
              Z -
              <em className="highlight"> Vehica</em>
            </a>
          </div>
          <div className="Col--4 Col--s-12 Col--xs-12 Nav-list">
            <div
              className={getClass('home')}
              onClick={onClickHome}
              id="home"
            >
              Home
            </div>
            <div
              className={getClass('favourite')}
              onClick={onClickFavourite}
              id="favourite"
            >
              Favourite
            </div>
          </div>
        </div>
      </div>
    </header>
  )
});

export default Nav;
