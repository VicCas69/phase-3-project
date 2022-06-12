import React from 'react';

function RelativeList( {relatives, handleRelativeDelete} ) {
  
    return (
        <div>
        <ul>
            <h1>🎁Relatives/Recipient List🎁</h1>
        {relatives.map((relative) => (
          <li key={relative.id}>
            <table width="400px">
            <tr>
              <th>Name:</th>
              <th>Relationship:</th>
            </tr>
            <tr>            
              <td>{relative.name}</td>
              <td>{relative.relationship}</td>
              <td><button className="button button2" onClick={()=>handleRelativeDelete(relative.id)}>✖</button></td>
            </tr>                        
            </table>
          </li>))}
      </ul>
      </div>
    );
  }
  
  export default RelativeList;