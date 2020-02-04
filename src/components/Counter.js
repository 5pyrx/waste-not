import React from 'react';
import { Consumer } from './Context';

const Counter = () => {
  return (
    <Consumer>
      { context => {
        const totalPlayers = context.length;
        const totalPoints = context.reduce( (total, player) => {
          return total + player.score;
        }, 0);
        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Food Items:</td>
                <td>{totalPlayers}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>
  );
}

export default Counter;
