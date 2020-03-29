import React from 'react';
import { Consumer } from '../../providers/index';

import style from './Counter.module.css'

const Counter = () => {
  return (
    <Consumer>
      { context => {
        const totalFood = context.length;
        return (
          <table className={style.Stats}>
            <tbody>
              <tr>
                <td>Food Items:</td>
                <td>{totalFood}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>
  );
}

export default Counter;
