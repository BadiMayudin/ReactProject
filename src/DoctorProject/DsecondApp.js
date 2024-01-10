import React from 'react'
import DprojectNav from './DprojectNav'
import Dshero from './Dshero'
import Dsp3 from './Dsp3'
import Dsfooter from './Dsfooter'
import Achivment from './Achivment'
import Education from './Education'

const DsecondApp = (props) => {
  return (
    <>
      <DprojectNav title="MED" tspan="DICAL" a1="Home" a2="About us" a3="Doctor" a4="Contact">hello</DprojectNav>
      <Dshero hTopHead="PROFILE"></Dshero>
      <Dsp3 rfHead="Doctor's Name" rfname="ortho" details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis ut vero harum, in quo, eos possimus iusto odit ad ex doloribus doloremque nobis, at laboriosam natus id! Fugiat?"></Dsp3>
      <Dsfooter heading2="WORK EXPERIENCE" fmainfHead="Feb-2020" fSmallHead="Running" fmainsHead="Sep-2017" fmaintHead="Jan-2020" fmainFourHead="Jun-2013" fmainFiveHead="Aug-2016" fmainContant="White Pearl Dental Clinc & Implant Center-South Bhopal" fmainSecondContant="Lorem ipsum dolor sit, amet consectetur adipisicing." skill="SKILL" button1="x-Ray Machine" button2="Open Dental" button3="Mexillofacial Surgery" button4="Cosmetic Dentistey" button5="Data Team" button6="Oral Surgery" button7="Oral Radiology" button8="Dental Assessment" button9="Orthodinties"></Dsfooter>
      <Achivment achivment="ACHIEVEMENTS" aLeftOne="2019" aLeftTwo="2013" aLeftThree="2010" aRightContant="Use CAD-CAM Technology For Complite Denture Febriction"></Achivment>
      <Education education="EDUCATION" fmainfHead="Feb-2020" fSmallHead="Running" fmainsHead="Sep-2017" fmaintHead="Jan-2020" fmainFourHead="Jun-2013" fmainFiveHead="Aug-2016" educationContant1="White Pearl Dental Clinc & Implant Center-South Bhopal" educationContant2="Lorem ipsum dolor sit, amet consectetur adipisicing."></Education>
    </>
  )
}

export default DsecondApp
