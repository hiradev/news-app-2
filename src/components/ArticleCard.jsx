import React from 'react'
import Image from 'next/image'
import { images } from '@/constants'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
        <Image src={images.Post1} alt='post1' className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
        <div className='p-5'>
            <h2 className='font-bold text-xl text-black dark:invert'>
                Future of work
            </h2>
            <p className='text-grey text-sm'>
               Paragraph 01 
            </p>
            <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <h4 className='text-green-700 text-sm'>
                            Author
                        </h4>
                        <h5 className='font-bold text-black text-xs dark:invert'>User Name 1</h5>
                    </div>
                </div>
                <span className='mt-3 italic text-black text-sm dark:invert'>02 May 2023</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard