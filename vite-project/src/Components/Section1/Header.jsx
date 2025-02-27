import React from 'react';
import Hero from '../../assets/hero1.jpg';
import Color from '../../assets/colors.png';

const Header = () => {
    return (
        <>
            <div className='relative w-[100%] h-[115vh] bg-cover bg-top  m-0 p-0' style={{ backgroundImage: `url(${Hero})` }} >
                <nav className='flex justify-between items-center border-[1.5px] border-gray-300 rounded-[10px]  w-[1260px] h-[70px] px-[25px] py-[20px] top-[30px] relative mx-auto '>

                    <div className='flex w-[123px] h-[40px] justify-between items-center'>
                        <div>
                            <button className="w-[40px] h-[40px] rounded-[6px] bg-[#0066FF] text-white font-roboto font-extrabold pb-[3px] pr-[6px]">+1
                            </button>
                        </div>
                        <div><h1 className='text-white font-extrabold'>Plus One</h1></div>
                    </div>
                    <ul className="flex w-[412px] h-[25px] gap-[30px] list-none font-semibold">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">How it Works</a></li>
                        <li><a href="#" className="text-white">Safety & Trust</a></li>
                        <li><a href="#" className="text-white">Contact Us</a></li>
                    </ul>

                    <button className="w-[200px] h-[52px] rounded-[6px] bg-[#0066FF] text-white font-roboto font-bold text-[15px] leading-[20px] text-center px-[16px]">
                        Join Waiting List Now
                    </button>

                </nav>
                <div className=" relative mx-auto w-[600px] h-[400px] py-[40px] px-[56px] rounded-[24px] bg-[linear-gradient(124.42deg,rgba(0,0,0,0.675)_5.12%,rgba(0,0,0,0.2625)_102.99%)] top-[17%] text-white">

                    <div className="flex flex-col justify-between h-full items-start gap-6">
                        <img src={Color} alt="Color-Block" className="w-[80px] h-[16px]" />

                        <h1 className="w-[572px] h-[144px] font-poppins font-normal text-[64px] leading-[72px] tracking-[0%]">Your Perfect Plus One, On Demand</h1>
                        <p className="w-[572px] h-[54px] font-manrope font-normal text-[20px] leading-[27.32px] tracking-[0%]">
                            Transform any occasion into a memorable experience with a carefully matched companion.
                        </p>
                        <button className="w-[336px] h-[66px] rounded-[36px] px-[48px] py-[24px] bg-[#0066FF] shadow-[0px_0px_20px_0px_#639AE19C] text-white font-poppins font-normal text-[23px] leading-[18px]">
                            Join Waiting List Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
