import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Link from 'next/link';
const AboutUs = () => {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];
  return (
    <div>
        <Navbar/>
        <h3>This Is About Us Page</h3>
        {
          details.map((user,index)=>{
           return <h3>
            <Link href={`/UI/AboutUs/${user.id}`} key={index} style={{color:'grey',textDecoration:'none'}}>{user.name}</Link>
            </h3>
          })
        }
      
    </div>
  )
}

export default AboutUs
