import React, { useEffect, useState } from "react" 
import { useFirebase,isLoaded, isEmpty } from "react-redux-firebase"
import { useNotifications } from "modules/notification"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import enhancer from "./enhancer"
import {Table,Button,Modal} from "react-bootstrap"
 

function Component(props) {
  
  let { messages,room,banUser} = props 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleBanUser = () => {banUser(); setShow(false);}
  const handleShow = () => setShow(true);
  

  let talker,listener,startTime
  
  if (!isLoaded(messages))   
  console.log(room) 

  if(!isEmpty(room)){

    for(var key in room){  
      console.log(room[key].key) 
      console.log(room[key].value)
      if(room[key].key == 'talker'){
        talker = room[key].value;
      }
      if(room[key].key == 'listener'){
        listener = room[key].value;
      }
      if(room[key].key == 'sessionStarted'){
        startTime = room[key].value;
      }
      if(room[key].key == "messages")
      messages = room[key].value; 
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Messages
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
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
            <th>Time</th>
            <th>Messages</th> 
            </tr>
            </thead>
            <tbody>

            {Object.keys(messages).map(d => {
                      let message = messages[d];
                      return <tr>
                        <td><p>{message.time}</p></td> 
                        <td><p>{message.text} </p></td> 
                        </tr>
                    })} 
            </tbody>
          </Table>  
        </div>
      </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBanUser}>
              Ban User
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}
else{
  return ( <div>
    
    <p>View Messages</p>
  </div>  )
}
}  
export default enhancer(Component)