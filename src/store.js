import { createStore } from 'redux';

const initialState = {
  view: window.location.hash.slice(1),
  users: [],
  things: []
};

const store = createStore((state = initialState, action)=> { 
  if(action.type === 'SET_THINGS'){
    return {...state, things: action.things };
  }
  if(action.type === 'SET_USERS'){
    return {...state, users: action.users }; 
  }
  if(action.type === 'SET_VIEW'){
    return {...state, view: action.view }; 
  }
  if(action.type === 'CREATE_THING'){
    return {...state, things: [...state.things, action.thing ]}; 
  }
  if(action.type === 'DELETE_THING'){
    const updatedThings = state.things.filter(thing => thing !== action.thing);
    return {...state, things: updatedThings};
  }
  if(action.type === 'CREATE_USER'){
    return {...state, users: [...state.users, action.user]}
  }
  if(action.type === 'DELETE_USER'){
    const updatedUsers = state.users.filter(user => user !== action.user);
    return {...state, users: updatedUsers};
  }
  if(action.type === 'INC_RANK'){
    action.thing.rank = action.thing.rank++;
    const incThings = state.things.map(_thing => _thing)
    return {...state, things: incThings}
  }
  if(action.type === 'DEC_RANK'){
    action.thing.rank = action.thing.rank--;
    const decThings = state.things.map(_thing => _thing)
    return {...state, things: decThings}
  }
  // if(action.type === 'UPDATE_OWNER'){
  //   const updated = state.things.map(_thing => {
  //     if(Object.is(action.thing.id, _thing.id)){
  //       _thing = action.thing;
  //       return _thing
  //     }
  //     return _thing;
  //   })
  //   return {...state, thing: updated}
  // }
  return state;
});

export default store;

