import React, {useState} from 'react'
import Image from 'next/image'

import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (

<>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Image 
                        src={ `/Imgs/img${index + 1}.jpg`} 
                        width={1200}
                        height= {500}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                 
            </div>
        </div>

            <style jsx>{`


.container-slider {
  max-width: 1200px;
  height: 500px;
  margin: 10px auto 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 600px){
  .container-slider {
    margin: 100px 10px 0;
  }

.container-slider {
  height: 150px;
  margin: 5px auto 0;

}

}
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.active-anim {
  opacity: 1;
}

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

.btn-slide img {
  width: 25px;
  height: 25px;
  pointer-events: none;
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


.container-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
}
.dot.active {
  background: rgb(32, 32, 32);
}




`}</style>



</>



    )
}
