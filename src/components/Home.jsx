import React, { useEffect, useState } from 'react'
import Card from './Card'
import mouse from '../assets/mouse.jpg'
import Loading from './Loading';

const data=[

 {
    id:1,
    image:mouse,
    title:"G102",
    price:"$49",
    rating:"9",
    keywords:["Durable", 
    "anvja"]  
 },
 {
  id:2,
  image:mouse,
  title:"G102",
  price:"$49",
  rating:"9",
  keywords:["Durable", 
  "anvja"]
 },
 {
  id:3,
  image:mouse,
  title:"G102",
  price:"$49",
  rating:"9",
  keywords:["Durable", 
  "anvja"]
 },
 {
  id:4,
  image:mouse,
  title:"G102",
  price:"$49",
  rating:"9",
  keywords:["Durable", 
  "anvja"]
 },
 {
  id:5,
  image:mouse,
  title:"G102",
  price:"$49",
  rating:"9",
  keywords:["Durable", 
  "anvja"]

 }
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },10000)
  }, [])
 return (
    <div >
      {isLoading ? <Loading/> : 
        <div className='flex flex-row flex-wrap '>
        {data.map((item, idx)=>(
          <div key={idx}>
          <Card data={item}/>
          <p>{idx}</p>
          </div>
        ))}
            </div>

        }
        </div>
  )
}

export default Home
