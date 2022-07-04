import React from 'react';
import ThingForm from './ThingForm';
import ThingDelete from './ThingDelete';
import { connect } from 'react-redux';
import ThingRank from './ThingRank';
import ThingOwner from './ThingOwner';

const Things = ({ things, users })=> {

  return (
    <div>
      <h1>Things</h1>
      <ThingForm />
      <table className='things'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Rank</th>
            <th>Adjust Rank</th>
            <th>Delete Thing</th>
          </tr>
          {things.map(thing => {
            return (
              <tr key={thing.id}>
                <td>{thing.name}</td>
                <td><ThingOwner users={users} thing={thing} /></td>
                <td>{thing.rank}</td>
                <td><ThingRank thing={thing} /></td>
                <td><ThingDelete thing={thing} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect(
  (state)=> {
    return {
      things: state.things,
      users: state.users
    }
  }
)(Things);

// {/* <table className='highRank'>
//         <tbody>
//         <tr>
//           <th>Thing</th>
//           <th>Rank</th>
//         </tr>
//         {sortedThings.map(sorted => {
//             return(
//                 <tr key={sorted.id}>
//                     <td>{sorted.name}</td>
//                     <td>{sorted.rank}</td>
//                 </tr>
//             )
//         })}
//         {/* <tr>
//           //loop through array with sorted ranks
// //         </tr> */}
// //         </tbody>
// //       </table>

// // <ul>
// // {
// //   things.map( thing => {
// //     return (
// //       <li key={ thing.id }>
// //         { thing.name }<br/>
// //         {thing.rank}<br/>
// //         <ThingOwner users={users} thing={thing} />
// //         <ThingRank thing={thing} />
// //         <ThingDelete thing={thing} />
// //       </li>
// //     );
// //   })
// // }
// // </ul> */}