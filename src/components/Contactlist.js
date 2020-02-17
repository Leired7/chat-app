import React from 'react'
import Contact from './Contact'


const ContactData = [
  {
    image:
      "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Joyce Bradley",
    email:
      "joyce.bradley@example.com",
    status: ""
  },
  {
    image:
      "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Charlie Mitchelle",
    email:
      "hilda.freeman@example.com",
    status: "online"
  },
  {
    image:
      "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Rene Alexander",
    email:
      "rene.alexander@example.com",
    status: ""
  },
  {
    image:
      "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Danielle Crawford",
    email:
      "daniell.crawford@example.com",
    status: "online"
  }
]

const Contactlist = () =>(
  <div>
    {ContactData.map(item => (
      <Contact image={item.image} name={item.name} email={item.email} status={item.status}/>
    ))}
  </div>
)


export default Contactlist
