/** @format */

import React, {forwardRef} from "react";

import "./messages.css"

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Messages = forwardRef(({ message, user }, ref) => {
  //console.log(message);
  //const time = message.timestamp.toDate();
  const isUser = message.username === user;
  //console.log(time);
  /*console.log(message.timestamp.toDate());
  console.log(message.timestamp.toMillis());*/

  return (
    <>

      <Card ref={ref} className={ isUser ? "card_userCard" : "card_guestCard"} variant="outlined">
        <CardContent>
          { isUser ? null : 
            <Typography
              className="card_username"
              color="textSecondary"
              gutterBottom>
              {message.username} :
            </Typography>
          }

          <Typography className="card_text" variant="body2" component="p">
            {message.Message}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
})

export default Messages;
