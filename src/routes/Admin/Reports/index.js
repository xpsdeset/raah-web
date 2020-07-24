import React, { useEffect, useState } from "react" 
import {isLoaded, isEmpty } from "react-redux-firebase" 
import enhancer from "./enhancer"
import {Table,Modal,Button} from "react-bootstrap"
import Messages from "./Messages"  
let path = "/reports" 
 
function Component(props) {
  
  let { reports,setRoomId} = props   


  if (!isLoaded(reports)) return <span>Loading </span>
   
  if (window.UndefinedVariable) {
    Object.assign(window.UndefinedVariable, {})
  }
  
  
  return (
      <div className="container"> 
          <em>Reports</em>
          
      <Table>
        <thead>
          <tr>
            <th>For User</th>
            <th>By User</th>
            <th>Reason</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(reports).map(d => {
                  let report = reports[d]; 
                  return (<tr  id={report.roomId} >
                    <td>{report.by}</td> 
                    <td>{report.for} </td>
                    <td>{report.reason}</td> 
                      <td><button onClick = {()=>setRoomId(report.roomId)} > View messages </button></td>
                    
                    </tr>)
                })} 
        </tbody>
      </Table>
      
     <div hidden> <Messages {... props}  /></div>
            </div>
        )
}
 
export default {
  path,
  component: enhancer(Component),
}