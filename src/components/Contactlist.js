import React from 'react'
import Contact from './Contact'

// Array de objetos
const ContactData = [
  {
    image:"https://randomuser.me/api/portraits/women/48.jpg",
    nameavatar: "Joyce Bradley",
    email:"joyce.bradley@example.com",
    
  },
  {
    image:"https://randomuser.me/api/portraits/men/91.jpg",
    nameavatar: "Charlie Mitchelle",
    email:"hilda.freeman@example.com",
    
  },
  {
    image:"https://randomuser.me/api/portraits/men/17.jpg",
    nameavatar: "Rene Alexander",
    email:"rene.alexander@example.com",
   
  },
  {
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    nameavatar: "Danielle Crawford",
    email: "daniell.crawford@example.com",
    
  }
]

const Contactlist = () =>(
  <div>
    {ContactData.map((item, index)=> (
      <Contact key={index} image={item.image} nameavatar={item.nameavatar} email={item.email}/>
    ))}
  </div>
)


export default Contactlist
