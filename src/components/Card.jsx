import React from 'react'

const Card = ({data}) => {
 const {image,title,price,rating,keywords} = data;
  return (
    <div>
        <div className="border border-black p-5">
        <div className="h-60">
            <img src={image} className="h-full w-full" alt="" />
        </div>
        <div className=' my-5 text-3xl space-y-2'>
            <p>{title}</p>
            <p>price : {price}</p>
            <p>rating : {rating}</p>
            <p>keyword : {keywords.map((i,j) => (
             <div  key={j}>
              <p>{i}</p>
             </div>
            ))}</p>
        </div>
      </div>

    </div>
  )
} 

export default Card
