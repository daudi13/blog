import React from 'react';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className='mt-[20px] md:mt-[30px]'>
      <h1 className="text-[36px] md:text-[40px] lg:text-[50px] xl:text-[96px] xl:mb-[40px]"><b>Hey, Daudi dev here</b> Discover my stories and creative idea</h1>
      <div className="lg:flex lg:gap-[30px] lg:items-start xl:items-center xl:gap-[50px]">
        <div className="relative h-[200px] mt-[30px] mb-[30px] w-full lg:flex-1 lg:h-[350px] lg:mt-0 xl:h-[500px]" >
          <Image src="/p1.jpeg" alt="" className='object-cover' fill/>
        </div>
        <div className='flex flex-col gap-[20px] lg:flex-1'>
          <h1 className='text-[26px] leading-none xl:text-[40px]'>Lorem ipsum dolor sit amet alim consecteur adipiscing elit.</h1>
          <p className="xl:text-[20px]">Lorem ipsum dolor sit amet alim consecteur adipiscing elit.
            Lorem ipsum dolor sit amet alim consecteur adipiscing elit.Lorem ipsum dolor sit amet alim consecteur adipiscing elit.Lorem ipsum dolor sit amet alim consecteur adipiscing elit.
          </p>
          <button className="px-[10px] lg:px-[16px] py-[15px] lg:py-[20px] bg-[#24a0ed] rounded-[10px] text-[#fff] font-bold lg:self-start">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured