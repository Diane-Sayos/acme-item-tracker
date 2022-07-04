import React, {useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const ThingOwner = ({ updateOwner, thing, users })=> {
    const onChange = (e) => {
      updateOwner(thing, e);
    }
  return (
    <form>
        <select defaultValue={thing.userId? thing.userId : ''} onChange={onChange}>
            <option value=''>No Owner</option>
            {users.map(user => {
                return(
                    <option value={user.id} key={user.id}>{user.name}</option>
                )
            })}
        </select>
        {/* <button type='submit'>Change Owner</button> */}
    </form>
  );
};

const mapDispatchToProps =(dispatch) => {
    return {
      updateOwner: async(thing, e)=> {
        const newId = e.target.value*1;
        const response =  await axios.put(`/api/things/${thing.id}`, { userId: newId? newId : null});
        const updatedThing = response.data;
        dispatch({ type: 'UPDATE_OWNER', updatedThing});
      }
    };
  }

export default connect(null, mapDispatchToProps)(ThingOwner);
