import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Style",
    img: "/style.png",
    background: "bg-[#e1f1ff]"
  },
  {
    id: 2,
    name: "Fashion",
    img: "/fashion.png",
    background: "bg-[#f7e7f3]"
  },
  {
    id: 3,
    name: "Food",
    img: "/food.png",
    background: "bg-[#e5eee6]"
  },
  {
    id: 4,
    name: "Travel",
    img: "/travel.png",
    background: "bg-[#fde1db]"
  },
  {
    id: 5,
    name: "Culture",
    img: "/culture.png",
    background: "bg-[#fee8d3]"
  },
  {
    id: 6,
    name: "Coding",
    img: "/coding.png",
    background: "bg-[#dfddfe]"
  }
]   // Path: src/components/categorylist/CategoryLIst.jsx

const CategoryLIst = () => {
  return (
    <div className="my-[50px]">
      <h2 className="text-[25px] font-bold mb-[20px]">Popular Category</h2>

      <div className='flex items-center flex-wrap justify-center gap-[30px]'>
        {
          categories.map((items, index) => (
            <Link href="" className={`${items.background} flex center gap-[10px] capitalize w-[40%] h-[80px] justify-center items-center rounded-[10px] md:w-[25%] lg:w-[15%] xl:w-[13%] `} key={index}>
              <Image src={items.img} alt="" className='w-[32px] h-[32px] rounded-full' width={32} height={32}/>
              <span className="text-[#000]">{items.name}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryLIst