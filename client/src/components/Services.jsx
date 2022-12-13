import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";

const ServiceCard = ({color,title,icon,subtitle}) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div class={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex-flex-col-flex-1">
      <h1 className='m1-2 text-white text-lg'>{title}</h1>
      <p className='m1-2 text-white text-sm'>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start text-white text-3xl sm:text-5xl py-2 text-gradient">
          <h1>Services we</h1>
          <p>continue to improve</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsFillCheckCircleFill fontSize={12} className="text-white" />}
          subtitle="Security is guaranteed"
        />
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsFillCheckCircleFill fontSize={12} className="text-white" />}
          subtitle="Security is guaranteed"
        />
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsFillCheckCircleFill fontSize={12} className="text-white" />}
          subtitle="Security is guaranteed"
        />
      </div>
    </div>
  )
}

export default Services