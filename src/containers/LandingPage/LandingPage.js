import React from 'react';

import style from './LandingPage.module.css';

const LandingPage = () => (
  <div className={style.LandingPage}>
    <div className={style.TopImage}>
      <div className={style.Intro}>
        <h1>Welcome to Waste Not!</h1>
        <p>We want to help you reduce the amount of food you waste</p>
        <p>and manage your food better</p>
      </div>
    </div>

    <div className={style.ListBanner}>
      <h3>Waste Not will help you:</h3>
      <ul className={style.ListWrapper}>
        <li>Keep track of the food in your kitchen</li>
        <li>Use your food before it goes out of date</li>
        <li>Plan your meals to waste less</li>
      </ul>
    </div>
  </div>
);


export default LandingPage;
