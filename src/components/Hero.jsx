import React from 'react'
import hero from '../assets/hero.jpeg'


const Hero = () => {
  return (
    <div className='px-[3%] mt-3'>
        
        <div className='flex items-center justify-between'>
            <div className='bg-white px-6 py-1 rounded cursor-pointer flex items-center gap-3'>
                <p>Report</p>
                {/* <input type="date"  placeholder='date'/> */}
                
                
            </div>
            <div className='flex items-center gap-3'>
                <div className='px-6 py-1 bg-[#090979] rounded text-white'>
                    <p>SYNC</p>
                </div>
                <div className='px-6 py-1 bg-white '>
                    <p>Location: Hydroleap</p>
                </div>
                <div className='px-6 py-1 bg-white '> 
                    <p>FM Status: Active (13/03/2025 10:30:45)</p>
                </div>

            </div>
            
        </div>

        <div className='mt-3'>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero