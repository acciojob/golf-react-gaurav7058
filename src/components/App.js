import React, { useEffect, useState } from 'react'
import '../styles/App.css'
export default function App() {
  const[show,setShow]=useState(false)
  const [position, setPosition] = useState(0);
  function buttonClickHandler(){
    setShow(!show)
  }
  useEffect(()=>{
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.keyCode === 39) {
        setPosition((prevPosition) => prevPosition + 5);
      }
    };
    if(show){
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[show])
  
  return (
    <div>
        {!show && <div className="start" onClick={buttonClickHandler}><button>start</button></div>}
        {show && <div className='ball' style={{
            position: 'absolute',
            left: `${position}px`,
            top: '100px', // You can adjust the initial vertical position if needed
          }}></div>}
    </div>
  )
}
