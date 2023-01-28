import React from "react";
import Image from "next/image";

import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <>

          <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <Image src={direction === "next" ? rightArrow : leftArrow} />
    </button>

      <style jsx>{`



.btn-slide {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


.prev {
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
}
.next {
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
}
@media screen and (max-width: 600px){

.btn-slide {
  width: 30px;
  height: 30px;
}

}



`}</style>



    </>

  );
}
