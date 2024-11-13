import { ConnectDB } from "@/lib/config/db";
import { writeFile } from 'fs/promises';
import { NextResponse } from "next/server";
import { arrayBuffer } from "stream/consumers";



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
    const image = formData.get('image');
  
    if (!image) {
      return NextResponse.json({ error: 'No image file uploaded' }, { status: 400 });
    }
  
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const timestamp = Date.now();
    const path = `./public/${timestamp}_${image.name}`;
  
    await writeFile(path, buffer);
    const imgURL = `/${timestamp}_${image.name}`;
  
    return NextResponse.json({ imgURL });
  }
  
   