import React from 'react';





export default function ImgMediaCard() {
  

  return (
      <div className="Photo">
      <img className="PhotoOne" src={require('./Photo/firstPhoto.jpg').default} height={300} ></img>
      <h1 className="text">I play the guitar </h1>
      <img className="PhotoTwo" src={require('./Photo/secondPhoto.png').default} height={300} ></img>
      <h1 className="text">I love snowboarding !</h1>
    </div>
  );
}
