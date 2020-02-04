import React from 'react';
import { Consumer } from './Context';

const Counter = () => {
  return (
    <Consumer>
      { context => {
        const totalFood = context.length;
        return (
          <table className="stats">
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
