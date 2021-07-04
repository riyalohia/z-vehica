import React from 'react';
import classNames from 'classnames';
import './style.css';

const types = [
  {
    "id": 0,
    "label": "all"
  },
  {
    "id": 101,
    "label": "compact sedan"
  },
  {
    "id": 102,
    "label": "midsize sedan"
  },
  {
    "id": 103,
    "label": "luxury sedan"
  }
];

export const Subcategories = () => {
  const [selected, setSelected] = React.useState(0);

  const onTabClick = React.useCallback((id) => {
    setSelected(id);
  }, [selected]);

  const getTabClass = React.useCallback((id) => {
    const TabClass = classNames({
      ['Subcategories-tab']: true,
      ['Subcategories-tab--active']: selected === id
    });

    return TabClass;
  }, [selected]);

  return (
    <div className="Subcategories">
      {types.map((type, index) => {

        const size = type.label.split(' ')[0];
        return (
          <div
            className={getTabClass(type.id)}
            onClick={() => onTabClick(type.id)}
            key={index}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </div>
        );
      })}
    </div>
  );
};

export default Subcategories;