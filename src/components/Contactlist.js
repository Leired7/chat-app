import React from 'react'
import Contact from './Contact'


const ContactData = [
  {
    image:"https://randomuser.me/api/portraits/women/48.jpg",
    nameavatar: "Joyce Bradley",
    email:"joyce.bradley@example.com",
    online: "false"
  },
  {
    image:"https://randomuser.me/api/portraits/men/91.jpg",
    nameavatar: "Charlie Mitchelle",
    email:"hilda.freeman@example.com",
    online: "false"
  },
  {
    image:"https://randomuser.me/api/portraits/men/17.jpg",
    nameavatar: "Rene Alexander",
    email:"rene.alexander@example.com",
    online: "true"
  },
  {
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    nameavatar: "Danielle Crawford",
    email: "daniell.crawford@example.com",
    online: "false"
  }
]

const Contactlist = () =>(
  <div>
    {ContactData.map(item => (
      <Contact image={item.image} nameavatar={item.nameavatar} email={item.email} online={item.online}/>
    ))}
  </div>
)


export default Contactlist
