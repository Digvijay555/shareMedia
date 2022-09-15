import React from 'react'

function check() {
   function onHandleClick(){
    const shareUrl="https://www.google.com/search?q=ncert+book"
        window.open("https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/search?q=ncert+book",shareUrl);
        // https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dhow%2Bto%2Bopen%2Bexternal%2Bwebsite
      }
  return (
    <div><button onClick={onHandleClick}>Click to move</button></div>
  )
}

export default check