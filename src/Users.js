import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import UserDelete from './UserDelete';


const Users = ({ users, things })=> {
  return (
    <div>
      <h1>Users</h1>
      <UserForm />
      <table className='users'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Thing</th>
            <th>Delete User</th>
          </tr>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{things.map(thing => {
                  if(thing.userId === user.id){
                    return (
                      <p key={thing.id}>{thing.name}</p>
                    )
                  }
                })}</td>
                <td><UserDelete user={user} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  (state)=> {
    return {
      things: state.things,
      users: state.users
    }
  }
)(Users);

// {/* <ul>
// {
//   users.map( user => {
//     return (
//       <li key={user.id}>
//         { user.name }
//         {things.map(thing => {
//           if(thing.userId === user.id){
//             return (
//               <table>
//                 <tbody>
//                 <tr key={thing.id}>
//                 <td>{thing.name}</td>
//               </tr>
//                 </tbody>
//               </table>
//             )
//           }
//         })}
//         <UserDelete user={user}/>
//       </li>
//     );
//   })
// }
// </ul> */}