import { useEffect, useState } from "react";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./WindowWrapper.scss"

const WindowWrapper = () => {
    
    useEffect(() => {
        fetch("http://localhost:8080/getAll")
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
          });
      }, []);
    
    return (
        <div className="WindowWrapper">
            <SlidableWindow />
            <SlidableWindow />
            <SlidableWindow />
            <SlidableWindow />
        </div>
    );
};

export default WindowWrapper;