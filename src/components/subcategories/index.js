import React from 'react';
import classNames from 'classnames';
import './style.css';

export const Subcategories = (props) => {
  const { subcategories = [] } = props;
  const [selected, setSelected] = React.useState(0);

  const onTabClick = React.useCallback((id) => {
    setSelected(id);
    props.onSelectSubcategory(id);
  }, [selected]);

  const getTabClass = React.useCallback((id) => {
    const TabClass = classNames({
      'Subcategories-tab': true,
      'Subcategories-tab--active': selected === id
    });

    return TabClass;
  }, [selected]);

  return (
    <div className="Subcategories">
      {subcategories.map((type, index) => {

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