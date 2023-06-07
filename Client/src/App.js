import layoutImg from './images/gymLayout.svg'
import './App.css';
import { useEffect, useState } from 'react';
import MyDots from './MyDots';


function App() {

  const [allDots, setAllDots] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const imageWidth = windowWidth * .7
  const dotDiameter = (imageWidth*.015)      //The size of each dot is relative to the image width.

  


  //Centering the image caused positional errors for placing the dots
  //a useEffefct had to be created to constantly update state and capture the "current width of the window"
  useEffect(()=>{
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
      // setImageHeight(document.querySelector('#main_image').clientHeight)
      
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  },[])
  
  
  //! Add Dot Click 
  const addDotClick = (e) => {
    
    //When image is clicked, a dot will appear. Compute the height/width as a percentage relative to the image location
    const imageHeight = document.querySelector('#main_image').clientHeight
    const x = ((e.pageX - ((windowWidth-imageWidth)/2))-(dotDiameter/2))/imageWidth*100;
    const y = (e.pageY-(dotDiameter/2))/imageHeight*100;

    const newDotObj = {
      xPosition:(x),
      yPosition:(y)
    }
    setAllDots((prevDots)=>[...prevDots, newDotObj])
  }

  const displayDots = allDots.map((eachDot)=>{
    return <MyDots key={allDots.indexOf(eachDot)} id={allDots.indexOf(eachDot)} xPosition={eachDot.xPosition} yPosition={eachDot.yPosition} dotDiameter={dotDiameter}/>
  })
  
  return (
    <div className="App">
        <div className='main_image_wrapper' style={{width:imageWidth}}  >
          <img src={layoutImg} id="main_image" alt="main_image" useMap='#imgMap' onClick = {addDotClick} />
          {displayDots}
        </div>
    </div>
  );
}

export default App;

