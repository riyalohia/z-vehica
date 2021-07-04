import React from 'react';
import classNames from 'classnames';
import './style.css';

export const Categories = (props) => {
  const [selected, setSelected] = React.useState(0);

  const onTabClick = React.useCallback((id) => {
    setSelected(id);
  }, [selected]);

  const getTabClass = React.useCallback((id) => {
    const TabClass = classNames({
      ['Categories-tab']: true,
      ['Categories-tab--active']: selected === id
    });

    return TabClass;
  }, [selected]);

  return (
    <div className="Categories">
      {props.categories.map((category, index) => (
        <div
          key={index}
          className={getTabClass(category.id)}
          onClick={() => onTabClick(category.id)}
        >
          {category.label.charAt(0).toUpperCase() + category.label.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default Categories;