"use client"

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [data,setData] = useState(null);

    // for loop หา  blog id
    const fetchBlogData = () => {
        for(let i = 0 ; i < blog_data.length;i++){
            if(Number(params.id)==blog_data[i].id){
                setData(blog_data[i])
                console.log(blog_data[i])
                break;
    
            }
        }
    }

    useEffect(() => {
       fetchBlogData(); 
    },[])

  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
            <Image src={assets.logo} width={180} alt="" className='w-[130px] sm:w-auto' />
        </Link>
        <button className='flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get started <Image src={assets.arrow}></Image></button>
      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
            {data.title}
        </h1>
        <Image className=" mx-auto mt-6 border border-white rounded-full"src={data.author_img} width={60} height={60} alt= '' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className="border-4 border-white"src={data.image} width={1280} height={720} alt='' />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>step 1 : Self reflectin and goal</h3>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>
 
        <h3 className='my-5 text-[18px] font-semibold'>step 2 : Self reflectin and goal</h3>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>
 
        <h3 className='my-5 text-[18px] font-semibold'>step 3 : Self reflectin and goal</h3>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>
        <p className='my-3'>before you can go  and manage your Lifestyle</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conslusion</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora corrupti modi dolore facere ipsa nulla optio earum, exercitationem aperiam deserunt voluptas, excepturi iure rem ea dolores fuga molestias quasi.</p>
        <div className="my-24">
            <p className='text-black font font-semibold my-4'> Share this to your social media </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} width= {50} alt = "" />
                <Image src={assets.twitter_icon} width= {50} alt = "" />
                <Image src={assets.googleplus_icon} width= {50} alt = "" />
            </div>
        </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page
