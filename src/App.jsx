/** @format */

import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./Image/logo.png";
import Messages from "./Messages";

import db from "./firebase";
import firebase from "firebase";

import FlipMove from 'react-flip-move';

import FormControl from "@material-ui/core/FormControl";
import {Button, Input } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import IconButton from "@material-ui/core/IconButton";

function App() {

  // useState is similar to a variable (variable in react) use to strore some app/website/user data in terms of short-term memory.
  const [input, setinput] = useState("");
  const [message, setmessage] = useState([ ]);
  const [user, setuser] = useState("");

  const InputEvent = (e) => {
    setinput(e.target.value);
  };

  const AddMessage = () => {

    /*setmessage((preVal) => {
      return [...preVal, input];
    });*/

    db.collection('Messages').add({
      Message : input,
      username : user,
      timestamp : firebase.firestore.FieldValue.serverTimestamp() // where the firebase is hosting your database get the timestamp
    })

    setinput("");
  };

  //when a specific condition satisfied then this peice of code written in the body of useEffect is triggered.(run code on a condition in react)

  useEffect(() => {
    //run once when the app component loads
    db.collection('Messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {   //snapshot means whenever anything change in database it takes its picture n store it in {parameter} automatically no need to refresh awesome
      setmessage(snapshot.docs.map(doc => ({ id : doc.id, Message : doc.data()})))  // now we iterate over the docs and display each item
    });

  }, []);


  useEffect(() => {
    setuser(prompt("Enter your name"));
  }, []);

  return (
    <>
      <div className="app">
        <div className="app_heading">
          <img src={logo} alt="logo" width='80' height='80' />
          <h2>facebook-messenger-app</h2>
          <p>Welcome : <span>{user ? user : "unknown User"}</span></p>
        </div>

        <div className="send">
            <FormControl className="input_cointainer" >
              <Input
                className="input_feild"
                placeholder="Enter a message"
                type="text"
                value={input}
                onChange={InputEvent}
              />

              <IconButton disabled={!input} color="primary" className="add" onClick={AddMessage}  >
                <SendRoundedIcon/>
              </IconButton>
            </FormControl>
        </div>

        <FlipMove>
        {message.map(({id, Message}) => {
          return <Messages key={id} message={Message} user={user} />;
        })}
        </FlipMove>
        
      </div>
    </>
  );
}

export default App;
