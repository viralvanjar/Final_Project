// Importing required dependency
import './FeedBackModal.css';
import { Button, Input, makeStyles, Modal, TextareaAutosize } from 'material-ui-core';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './Firebase';

// Createing the function for feedback
function getModalStyle() {
  const top = 40;
  const left = 35;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transfrom: `translate(-${top}%,-${left}%)`
  };
}

// Createing the const variable for feedback button
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

// Createing the function for feedbackmodal
const FeedBackModal = () => {

  const classes = useStyles();
  // using usestate hook for opening and closing Feedbackmodal, usernme and message
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [modalStyle] = useState(getModalStyle);

  // Createing the function for feedback from to save data in firestore database
  const submitHadler = () => {
    setOpen(false);

    addDoc(collection(db, "feedback"), {
      caption: message,
      username: username
  });

  setUsername('');
  setMessage('');

  }

  return (
    <>
      {/* Modal for feedback */}    
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          {/* feedback form */}    
          <form>
            <center className='login-from'>
              <div className='logo-text'>
                <h1><span className='logo-first-text'>V</span>iral <span className='logo-first-text'>V</span>anjar</h1>
              </div>
              <Input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <TextareaAutosize name='message' placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
              <Button type='submit' className='btn' onClick={submitHadler}>Send</Button>
            </center>
          </form>
        </div>
      </Modal>
      {/* button for feedback from */}    
      <Button id='feedback' className='btn' onClick={() => setOpen(true)}>Feedback</Button>
    </>
  )
}
export default FeedBackModal;