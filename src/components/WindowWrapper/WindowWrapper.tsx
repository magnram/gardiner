// import { useEffect, useState } from "react";
import SlidableWindow from "../SlidableWindow/SlidableWindow";
import "./WindowWrapper.scss"

const WindowWrapper = () => {
  return (
    <div className="WindowWrapper">
        <SlidableWindow />
        <SlidableWindow />
        <SlidableWindow />
        <SlidableWindow />
    </div>
    )
};

export default WindowWrapper;