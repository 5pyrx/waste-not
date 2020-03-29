import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../providers/UserProvider";

import style from './Authenticated.module.css';

import PantryIcon from '../../assets/pantry.png';
import PlannerIcon from '../../assets/Planner.png';
import WasteIcon from '../../assets/Waste.png';

const Authenticated = () => {
  const user = useContext(UserContext);
  console.log(user);
  const userArray = {...user};
  console.log(userArray);
  return (
    <div className={style.Authenticated}>
      <div className={style.TopImage}>
        <div className={style.TopWrapper}>
          <h3>Hi {userArray.displayName}!</h3>
          <ul className={style.tiles}>
            <Link to="/your-pantry">
              <li>
                <p>Kitchen Pantry</p>
                <img src={PantryIcon} alt="Pantry" />
              </li>
            </Link>
            <li>
              <p>Meal Planner</p>
              <img src={PlannerIcon} alt="Planner" />
            </li>
            <li>
              <p>Waste tracker</p>
              <img src={WasteIcon} alt="Tracker" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Authenticated;
