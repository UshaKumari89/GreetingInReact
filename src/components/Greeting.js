import React from 'react'


//date object to get the hours

//let date = new Date()

//custom time to check the logic
let date = new Date(2023, 3, 1, 12)
let time = date.getHours()

//message variable to change the message according to time
let message = ''

//message color will update according to the time
let messageColor = {};
let box = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(120, 152, 152)',
  height: "8rem",
  width: "30rem",
  borderRadius: '5px',
  padding: '1rem',
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  color: 'rgba(255, 255, 255)'
}

//greeting message will appear according to local time
if(time >= 5 && time < 11){
     message = 'Good Morning'
     messageColor.color = 'green'
 }else if(time >= 11 && time < 16){
    message ='Good Afternoon'
    messageColor.color = 'orange'
}else if(time >= 16 && time < 20){
    message = 'Good Evening'
    messageColor.color = 'yellow'
}else{
    message = 'Good Night'
    messageColor.color = 'black'
 }

//function greeting
function Greeting() {
  return (
  <>
      <div style={box}> 
        <h1>Hey there,<span style={messageColor}>{message}</span></h1>
      </div>

  </>
  )
}

export default Greeting
