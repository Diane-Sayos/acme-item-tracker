import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const ThingRank = ({ incrementRank, decrementRank, thing })=> {
  return (
    <div>
      <button onClick={ () => incrementRank(thing) }>+</button>
      <button onClick={ () => decrementRank(thing) }>-</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    incrementRank: async(thing)=> {
        await axios.put(`/api/things/${thing.id}`,{
            rank: thing.rank+=1
        });
        dispatch({type: 'INC_RANK', thing})
    },
    decrementRank: async(thing)=> {
        await axios.put(`/api/things/${thing.id}`, {
            rank: thing.rank -=1
        });
        dispatch({type: 'DEC_RANK', thing})
    }
  };
}

export default connect(null, mapDispatchToProps)(ThingRank);
