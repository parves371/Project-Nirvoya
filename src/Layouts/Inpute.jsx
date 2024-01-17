import React from 'react'

const Inpute = ({type,label,className}) => {
  return (
    <section className={`flex flex-col gap-y-4 pr-5 ${className}`}>
        <label For="" className='text-lg text-[#383838] font-normal'>{label}</label>
        <input type={type} className='w-full cd::w-[745px] h-[60px] bg-[#FAFAFA] rounded-[5px] outline-[#A7A7A7] p-2 placeholder:p-2 border-2 border-solid border-[#A7A7A7]'/>
    </section>
  )
}

export default Inpute