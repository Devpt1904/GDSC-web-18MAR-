import React from 'react'
import Card from './Card'
import mouse from '../assets/mouse.jpg'

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
  return (
    <div className='flex flex-row  flex-wrap '>
        {data.map((item)=>(
          <div key={item.id}>
          <Card data={item}/>
          </div>
        ))}
    </div>  
  )
}

export default Home
