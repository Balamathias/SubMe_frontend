import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { LucidePersonStanding } from 'lucide-react'
import { Button } from '../ui/button'



const About = () => {
  return (
    <section className='w-full h-full flex items-center light:bg-slate-800/[0.2] bg-slate-800 py-8'>
        <div className="flex gap-3 w-full max-md:flex-col p-4 lg:p-8 justify-between mx-auto bg-cover max-w-7xl rounded-2xl flex-col space-y-4">
            <div className="flex-1 flex items-center justify-center space-x-2 w-full">
                <LucidePersonStanding size={28} className='text-violet-500' />
                <h2 className="text-2xl max-sm:text-xl bg-gradient-to-r from-violet-600 via-purple-700 to-violet-800 text-transparent text-clip bg-clip-text font-semibold">About Us</h2>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 columns-3 gap-4 flex-wrap py-8">
                <h2 className="text-white text-2xl font-semibold col-span-3">Our Mission</h2>
                <p className="text-white col-span-3">It is a common thing these days that data consumption has actually paced up and even caught up with all other human necessities. While this pressing demand is still at its development stage, SubMe is an initiative for mitigating the complexities that arise with increase in data requirements and consumption.</p>

                <h2 className='text-white text-2xl font-semibold col-span-3'>Our Vision</h2>
                <p className='text-white col-span-3'>
                    While there are still epic areas struggling to carve away from the difficulties that comes with getting substantial data and airtime plans, SubMe hopes to reach thousands of people in both towns and cities to solve their data needs and complement their efforts while offering ease of usage and intuitiveness.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About