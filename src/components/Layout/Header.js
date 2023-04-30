import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../components/assets/meals.jpg'

const Header = () => (
  <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </>
);

export default Header;
