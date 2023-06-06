import { useState } from "react"

function MyDots({ id, xPosition, yPosition }) {

    const [modalToggle, setModalToggle ] = useState(false)
    console.log(modalToggle)
    
    
    const handleDotClick = (e) => {
        console.log("I was clicked")
        setModalToggle(!modalToggle)
        console.log(e.target.id)
    }

    return (
        <div onClick={handleDotClick}>
            <svg className='dots'height="16" width="16" style={{ left:xPosition, top:yPosition}} >
                <circle id={id}  cx="8" cy="8" r="7" stroke="black" strokeWidth="1" fill="red" />
            </svg>

            <div id="myModal" className={modalToggle?"modal_on":"modal_off"}>
                <div className="modal-content" >
                    <p >I am the modal for Dot Number {id}</p>
                </div>
            </div>
        </div>
    )




}


export default MyDots;