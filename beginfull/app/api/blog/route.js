import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/model/BlogModel";
import { writeFile } from 'fs/promises';
import { NextResponse } from "next/server";
import { arrayBuffer } from "stream/consumers";
import { deserialize } from "v8";



const LoadDB = async () => {
    await ConnectDB();
}
//ที่เราไม่เรียกฟังชั่นตรงๆเพราะเราอยากให้การ เฟด ข้อมูลเป็นขั้นเป็นตอนมากกว่าการเรียกเอง

LoadDB();

export async function GET(request){
    console.log("Blog GET Hit")
    return NextResponse.json({msg:"API Working"})
}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
  
    if (!image) {
      return NextResponse.json({ error: 'No image file uploaded' }, { status: 400 });
    }
    
    
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
  
    await writeFile(path, buffer);
    const imgURL = `/${timestamp}_${image.name}`;
    console.log(imgURL);
    

    const blogData = {
      title: `${formData.get('title')}`,
      description: `${formData.get('description')}`,
      category: `${formData.get('category')}`,
      author: `${formData.get('author')}`,
      image: `${imgURL}`,
      imageImg: `${formData.get('authorImg')}`  // Use imageImg instead of authorImg
  };
  
    
    await BlogModel.create(blogData) ;
    console.log("Blog Saved")

    return NextResponse.json({success:true,msg:"Blog Added"});
  }
  
   