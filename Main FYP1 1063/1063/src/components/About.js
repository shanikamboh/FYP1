import React from 'react';
import { Table } from 'reactstrap';

export default class About extends React.Component {
render(){
    return(
     <div className="innercontrol">
          <Table>
        <tbody>
          <tr>
            <th scope="row">Made By</th>
            <td>Muhammad
           Awais Zeeshan</td>
          </tr>
         
          <tr>
            <th scope="row">Submitted To</th>
            <td>Sir Khurram Raheel</td>
          </tr>
          <tr>
            <th scope="row">Made For</th>
            <td>Saylani Final Year Project</td>
          </tr>
        </tbody>
      </Table>
     </div>
    );
}
}