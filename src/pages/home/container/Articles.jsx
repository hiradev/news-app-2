import ArticleCard from '@/components/ArticleCard'
import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const Articles = () => {
  return (
    <div>
      <section className='flex flex-col container mx-auto px-5 py-10'>
        <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
          <ArticleCard className='w-full md:w-[calc(33.33%-14px)] lg:w-[calc(25%-20px)]'/>
          <ArticleCard className='w-full md:w-[calc(33.33%-14px)] lg:w-[calc(25%-20px)]'/>
          <ArticleCard className='w-full md:w-[calc(33.33%-14px)] lg:w-[calc(25%-20px)]'/>
          <ArticleCard className='w-full md:w-[calc(33.33%-14px)] lg:w-[calc(25%-20px)]'/>          
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-green-500 border-2 border-green-500 px-6 py-3 rounded'>
          <span>More News</span>
          <FaArrowRight className='w-3 h-3'/>
        </button>
      </section>      
    </div>
  )
}

export default Articles