import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const NavbarHeader = () => {
  return (
    <section className='font-poppins mt-8 before:content-[""] before:absolute relative before:w-full before:H-[1.5px] before:border-solid before:border-[#EFEEEE] before:border before:top-10'>
        <Container>
            <Flex className={"justify-around "}>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase'>Women's Fashion</h2>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase'>men's Fashion</h2>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase'>Kid's Fashion</h2>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase'>Home & Lifestyle</h2>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase'>Arts & Crafts</h2>
                <h2 className='w-[16%] text-base font-medium text-[#333333] uppercase'>Computer & Electronics</h2>
                <h2 className='w-[11%] text-base font-medium text-[#333333] uppercase '>Food & Grocery</h2>
            </Flex>
        </Container>
    </section>
  )
}

export default NavbarHeader