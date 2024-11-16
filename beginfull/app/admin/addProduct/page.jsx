'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png"
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(data);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
    if (file) {
      setImgPreview(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('author',data.author);
    formData.append('autorImg',data.authorImg);
    formData.append('image',image);
    const respone = await axios.post('/api/blog',formData);
    if( respone.data.success ) {
        
    }
  }
 
  useEffect(() => {
    // Cleanup the object URL to prevent memory leaks
    return () => {
      if (imgPreview) URL.revokeObjectURL(imgPreview);
    };
  }, [imgPreview]);

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={imgPreview || assets.upload_area}
            width={140}
            height={70}
            alt="Thumbnail Preview"
          />
        </label>
        <input
          onChange={handleImageChange}
          type="file"
          id="image"
          hidden
          required
        />
        
        <p>Blog Title</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
          name="title"
          onChange={onChangeHandler}
          value={data.title}
        />
        
        <p>Blog Description</p>
        <textarea
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Write content here"
          rows={6}
          required
          name="description"
          onChange={onChangeHandler}
          value={data.description}
        />
        
        <p>Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="mt-4 w-40 px-4 py-3 border text-gray-500"
        >
          <option value="startup">Startup</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default Page;
