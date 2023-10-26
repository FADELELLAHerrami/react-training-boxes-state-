import { useState } from "react";

export default function Box(props) {
    const [on,setOn]= useState(props.on);
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function Toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        <div 
            className="box"
            onClick={() => Toggle()}
            style={styles} 
        >
        </div>
    )
}