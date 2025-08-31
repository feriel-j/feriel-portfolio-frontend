import React from 'react'
import "../../_dist/EsdCompArrowsCaroussel.css"

interface ArrowCarousselProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    onNext: ()=>void;
    onPrev: ()=>void;   
  }

const EsdCompArrowsCaroussel  : React.FC<ArrowCarousselProps>=({onNext,onPrev,...props}) => {
  return (
    <div {...props} className='arrows-container'>
        <p onClick={onPrev}>prev</p>
        <p  onClick={onNext}>next</p>
    </div>
  )
}

export default EsdCompArrowsCaroussel