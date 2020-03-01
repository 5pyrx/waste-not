import React from 'react';

import style from './LandingPage.module.css';

const LandingPage = () => (
  <div className={style.LandingPage}>
    <div className={style.Intro}>
      <h1>Welcome to Waste Not!</h1>
      <p>We want to help you reduce the amount of food you waste</p>
      <p>and manage your food better</p>
      <br />
      <p>Waste Not will help you:</p>
      <ul>
        <li>always know the food in your kitchen</li>
        <li>notify you before any food goes out of date</li>
        <li>recommend meals that you can cook to use your food the most effectively</li>
      </ul>
    </div>
  </div>
);


export default LandingPage;
