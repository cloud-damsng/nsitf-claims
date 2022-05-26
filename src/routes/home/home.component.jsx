import React from 'react';
import Directory from '../../components/directory/directory.component';



const Home =()=> {
  const categories =[
    {
      "id": 1,
      "title": "Lagos Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 2,
      "title": "Ibadan Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 3,
      "title": "Abuja Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 4,
      "title": "Kaduna Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 5,
      "title": "Kano Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 6,
      "title": "Jos Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 7,
      "title": "Port Harcourt  Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 8,
      "title": "Asaba Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 9,
      "title": "Maiduguri Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 10,
      "title": "Bauch Region",
      "imageUrl": "https://i.ibb.co/L9DBVfY/nsitf.jpg"
    },
    {
      "id": 11,
      "title": "Enugu Region",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];
    
  return (
    <Directory categories={categories}/>
  );
}

export default Home;