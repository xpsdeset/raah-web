import React from "react" 
import {isLoaded, isEmpty } from "react-redux-firebase"
import enhancer from "./enhancer"
import {Table,Button,Modal} from "react-bootstrap" 

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

 
function Component(props) {
  
  let {room,setRoomId,messages,startTime,roomId} = props
 
  const handleBanUser = (userId) => {props.banUser(userId);}
 
  let talker,listener,value  
  
  if (!isLoaded(room))  return  <span>Loading</span>

  
  if (window.UndefinedVariable) {
    Object.assign(window.UndefinedVariable, {})
  }
  
  
  let roles={}
   
    for(var key in room){   
      if(room[key].key == 'talker'){
        talker = room[key].value;
        roles[talker]='Talker'
      }
      if(room[key].key == 'listener'){
        listener = room[key].value;
                roles[listener]='Listener'
      }

      if(room[key].key == 'messages'){
        messages = room[key].value; 
      }

      if(room[key].key == 'sessionStarted'){ 
        console.log(room[key].value);
        startTime = timeConverter(room[key].value) ;  
        console.log(startTime) 
      }
      
     
     
      
    }
    if(isEmpty(messages)){
      return (<div>no data </div>)
    } 
    return (
   
        <Modal show={roomId} onHide={()=> setRoomId(false)  }>
          <Modal.Header closeButton>
            <Modal.Title>Chat History</Modal.Title>
          </Modal.Header>
          <Modal.Body>

         
          <div className="container-fluid">
        <div className="container"> 
  
            <p>Talker:  {talker} </p>
            <p>Listener:   {listener} </p>
            <p>Conversation Started Time: {startTime}      </p>  
          <p>Detailed Conversation</p> 
          <Table>
            <thead> 
            <tr>
            <th>Role</th>
            <th>Messages</th> 
            </tr>
            </thead>
            <tbody>
              
         
            {Object.keys(messages).map(d => {
                      let message = messages[d]; 
                        return (<tr id={message.id}>
                          <td><p>{roles[message.id]}</p></td>
                          <td><p>{message.text} </p></td> 
                          </tr>)
                    }) 
                  }
                  
            </tbody>
          </Table>  
        </div>
      </div>
          </Modal.Body>
          <Modal.Footer>
       
            <Button variant="primary" onClick={handleBanUser}>
              Ban User
            </Button>
          </Modal.Footer>
        </Modal>
      
  )
              

}  


export default enhancer(Component)