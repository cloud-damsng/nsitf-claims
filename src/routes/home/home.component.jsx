import React from 'react';
import Directory from '../../components/directory/directory.component';



const Home =()=> {
  const categories =[
    {
      "id": 1,
      "title": "Lagos Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 2,
      "title": "Ibadan Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 3,
      "title": "Abuja Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 4,
      "title": "Kaduna Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 5,
      "title": "Kano Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 6,
      "title": "Jos Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 7,
      "title": "Port Harcourt  Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 8,
      "title": "Asaba Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 9,
      "title": "Maiduguri Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
    },
    {
      "id": 10,
      "title": "Bauch Region",
      "imageUrl": "https://ibb.co/ss4qTMh"
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