import React from 'react';
import { connect } from 'react-redux';
import HighRank from './HighRank';

const Home = ({ users, things })=> {
  return (
    <div className='home'>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have { users.length } users and { things.length } things!
      </p>
     <HighRank />
    </div>
  );
};

const mapSToP = (s)=> {
  return {
    users: s.users,
    things: s.things
  };
};

export default connect(mapSToP)(Home);
