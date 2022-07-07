import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const UserDelete = ({ deleteUser, user })=> {
  return (
    <div>
      <button onClick={ () => deleteUser(user) }>x</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    deleteUser: async(user)=> {
        await axios.delete(`/api/users/${user.id}`);
        dispatch({type: 'DELETE_USER', user})
    }
  };
}

export default connect(null, mapDispatchToProps)(UserDelete);