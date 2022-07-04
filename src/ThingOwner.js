import React, {useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const ThingOwner = ({ updateOwner, thing, users })=> {
    const [newId, setId] = useState('')
    const handleSubmitted = (e) => {
      e.preventDefault();
      updateOwner(thing,newId);
    }
  return (
    <form onSubmit={handleSubmitted}>
        <select defaultValue={thing.userId? thing.userId : ''} onChange={(e)=> setId(e.target.value)}>
            <option value=''>No Owner</option>
            {users.map(user => {
                return(
                    <option value={user.id} key={user}>{user.name}</option>
                )
            })}
        </select>
        <button type='submit'>Change Owner</button>
    </form>
  );
};

const mapDispatchToProps =(dispatch) => {
    return {
      updateOwner: async(thing, owner)=> {
        await axios.put(`/api/things/${thing.id}`, { userId: owner});
        const response = await axios.get('/api/things');
        const things = response.data;
        dispatch({ type: 'SET_THINGS', things});
      }
    };
  }

export default connect(null, mapDispatchToProps)(ThingOwner);
