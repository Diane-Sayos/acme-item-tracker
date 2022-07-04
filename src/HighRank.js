import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const HighRank = ({ things })=> {
    const sortedThings = things.sort((a, b) =>{return b.rank - a.rank}).slice(0, 5);
  return (
    <table className='highRank'>
        <tbody>
        <tr>
          <th>Thing</th>
          <th>Rank</th>
        </tr>
        {sortedThings.map(sorted => {
            return(
                <tr key={sorted.id}>
                    <td>{sorted.name}</td>
                    <td>{sorted.rank}</td>
                </tr>
            )
        })}
        {/* <tr>
          //loop through array with sorted ranks
        </tr> */}
        </tbody>
      </table>
  );
};

export default connect(
  (state)=> {
    return {
      things: state.things
    }
  }
)(HighRank);
