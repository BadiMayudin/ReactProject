import React from 'react'
import DprojectNav from './DprojectNav'
import Dhero from './Dhero'
import Dprojectp3 from './Dprojectp3'

const Dfproject = () => {
  return (
    <>
     <DprojectNav title="MED" tspan="DICAL" a1="Home" a2="About us" a3="Doctor" a4="Contact"></DprojectNav>
      <Dhero hsmallHead="PROTECTING LIFE" hTopHead="The Fronrunners In" hSecondHead="Medical Excellence" btnText="Our Service"></Dhero>
      <Dprojectp3 cHead1="Meet Our Doctors" rfHead="Doctor's Name" rfname="Ortho" details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere rem dolorum voluptas! Tempore ipsa quod maiores, inventore tempora possimus. Tempore reprehenderit perferendis impedit ut. Dolores ad incidunt molestiae dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium." rfname1="dentist" rButton="View Profile"></Dprojectp3>

    </>
  )
}

export default Dfproject
