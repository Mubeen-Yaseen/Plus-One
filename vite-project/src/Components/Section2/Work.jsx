import React from 'react'
import Rectangle from '../../assets/Rectangle.png'
import Earth from '../../assets/earth.svg'
import Team from '../../assets/team.svg'
import Calender from '../../assets/calender.svg'

const Work = () => {
  return (
    <>
      <div className='relative w-[100%] h-[524px] bg-[#FFFFFF]'>
        <div className='w-[900px] h-[454px] relative mx-auto bg-[#F9FAFC]'><h1 className="font-poppins font-medium text-[56px] leading-[61.6px] text-center">How it works</h1></div>
        <div className="flex gap-12 absolute left-1/2 transform -translate-x-1/2 w-[1040px] top-[134px]  z-10">
          <div className="w-[350px] h-[230px] pt-[30px] pl-[30px] pb-[30px] bg-white rounded-[16px]">
            <img src={Earth} alt="Icon" />
            <h1 className='text-[20px] py-[15px]'>Browse Qualified Companions</h1>
            <p className='text-[13px] text-[#535353] pr-[20px]'>Review detailed profiles of potential plus-ones, including their interests, experience, and availability.</p>
          </div>
          <div className="w-[350px] h-[230px] p-[30px]  bg-white rounded-[16px]">
            <img src={Team} alt="Icon" className='' />
            <h1 className='text-[20px] py-[15px]'>Connect & Coordinate</h1>
            <p className='text-[13px] text-[#535353]'>Chat with your chosen companion through our secure platform to discuss event details and expectations.</p>
          </div>
          <div className="w-[350px] h-[230px] p-[30px] bg-white rounded-[16px]">
            <img src={Calender} alt="Icon" className='' />
            <h1 className='text-[20px] py-[15px]'>Enjoy Your Event</h1>
            <p className='text-[13px] text-[#535353]'>Attend your function with confidence, knowing you have a compatible companion by your side.</p>
          </div>
        </div>
        <div className='absolute top-[287px] left-[487px] z-0'><img src={Rectangle} alt="" /></div>
      </div>
      <div className="w-[100%] h-[95px] bg-white">
        <h1 className='text-[50px] text-center '>Plus One Perfect For</h1>
      </div>

    </>

  )
}

export default Work
