"use server"
import { NextRequest } from 'next/server';
import { ImageResponse } from "next/og";
import fs from 'fs';
import path from 'path';

// Read the font file
// const oswaldSemiBoldPath = path.resolve('./assets/fonts/Oswald-SemiBold.ttf');
// const oswaldSemiBold = fs.readFileSync(oswaldSemiBoldPath);


export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");

        if (!title) {
            return new Response("No title provided", { status: 500 });
        }

        const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

        return new ImageResponse(
        (
            <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
                <div tw="flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M4 11a9 9 0 0 1 9 9" />
                    <path d="M4 4a16 16 0 0 1 16 16" />
                    <circle cx="5" cy="19" r="1" />
                    </svg>
                    <p tw="ml-2 font-bold text-2xl">Syncware Technologies, Inc.</p>
                </div>
                <div tw="flex flex-col flex-1 py-10">
                    <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
                    BLOG POST
                    </div>
                    <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
                </div>
                <div tw="flex items-center w-full justify-between">
                    <div tw="flex text-xl">https://syncwaretechnologies.com</div>
                    <div tw="flex items-center text-xl">
                    <div tw="flex ml-2">https://github.com/cryptixcoder</div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            // fonts: [
            // {
            //     name: "Inter",
            //     data: oswaldSemiBold,
            //     style: "normal",
            //     weight: 700,
            // },
            // ],
        }
        );
    }
    catch(error:any) {
        console.log(error.message)
        return new Response("Failed to generate image", { status: 500 });
    }
}