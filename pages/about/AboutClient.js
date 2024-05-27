'use client'

import Image from 'next/image'
import PersonCard from './PersonCard'

var IndividualInfo = [
  {
    id:1,
    name:"Edward Rich",
    age:"40",
    image:'/images/person4.jpg',
    role:"Owner"
  },
  {
    id:2,
    name:"Liza",
    age:"34",
    image:'/images/person2.jpg',
    role:"CEO"
  },
  {
    id:3,
    name:"William",
    age:"30",
    image:'/images/person3.jpg',
    role:"sales marketing"
  },
  {
    id:4,
    name:"Lily",
    age:"28",
    image:'/images/person5.jpg',
    role:"sales marketing"
  },
  {
    id:5,
    name:"jack",
    age:"34",
    image:'/images/person 1.jpg',
    role:"sales marketing"
  },
  {
    id:6,
    name:"Amelia",
    age:"32",
    image:'/images/person6.jpg',
    role:"sales marketing"
  },
  {
    id:7,
    name:"Anne",
    age:"34",
    image:'/images/person7.jpg',
    role:"Blog maneger"
  },
  {
    id:8,
    name:"Audrey",
    age:"31",
    image:'/images/person8.jpg',
    role:"Customer servicer"
  }
]

const AboutClient = ()=>{
    return(
        <div className="
          mt-5
          grid
          gap-2
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          mx-auto
          lg:mx-[10%]
        ">
          {
            IndividualInfo.map((info)=>{
              return(
                <PersonCard 
                  key={info.id}
                  name={info.name}
                  age={info.age}
                  image={info.image}
                  role={info.role}
                />
              )
            })
          }
          
        </div>
    )
}

export default AboutClient