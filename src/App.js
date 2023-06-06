import layoutImg from './images/gymLayout.svg'
import './App.css';
import { useEffect, useState } from 'react';
import MyDots from './MyDots';


function App() {

  const [allDots, setAllDots] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  // const imageWidth = windowWidth * .7
  const imageWidth = 900
  

  // const handleClick = () => {
  //   console.log("I was clicked")
  // }

  const displayDots = allDots.map((eachDot)=>{
    return <MyDots key={allDots.indexOf(eachDot)} id={allDots.indexOf(eachDot)} xPosition={eachDot.xPosition} yPosition={eachDot.yPosition}/>
  })
  


  //Centering the image caused positional errors for placing the dots
  //a useEffefct had to be created to constantly update state and capture the "current width of the window"
  useEffect(()=>{
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  },[])
  
  
  
  //! Add Dot Click 
  const addDotClick = (e) => {
    // 900 is the width of an image
    let x
    if (windowWidth > imageWidth){
      x = e.pageX - ((windowWidth-imageWidth)/2);
    } else {
      x = e.pageX
    }
    
    const y = e.pageY;
    // e.target.title = "X is "+x+" and Y is "+y;
    // console.log(x,y)

    //The 8 subtracted from the position is because the height/width of the svg dog file is 16
    const newDotObj = {
      xPosition:(x-8),
      yPosition:(y-8)
    }
    setAllDots((prevDots)=>[...prevDots, newDotObj])
  }


  return (
    <div className="App">
        <div className='main_image_wrapper' style={{width:imageWidth}}  >
          <img src={layoutImg} alt="main_image" useMap='#imgMap' onClick = {addDotClick} />
          {displayDots}
    
          {/* <map name="imgMap">
            <area onClick={handleClick} alt='test' shape='poly' coords='223, 245, 282, 217, 435, 236, 341, 403, 286, 423' ></area>
          </map> */}
        </div>
    </div>
  );
}

export default App;

