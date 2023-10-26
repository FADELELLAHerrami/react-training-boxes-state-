import { useState } from "react";

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

   
    
    return (
        <div 
            className="box"
            onClick={() => props.toggle(props.id)}
            style={styles} 
        >
        </div>
    )
}