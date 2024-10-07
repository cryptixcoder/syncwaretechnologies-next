"use client"
import { photography } from '@/.velite';
import { useState, useEffect } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { MDXComponent } from '@/components/MDXComponent';
import "@/styles/mdx.css"
import {
  RenderImageContext,
  RenderImageProps,
  MasonryPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image';

interface PostPageProps {
    params: {
        slug: string[]
    }
}


function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}


function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join("/");
    const post = photography.find(post => post.slug === slug);

    return post;
}

interface Photo {
  url: string;
  width: number;
  height: number;
}

export default function PhotographyPage({params}: PostPageProps) {
    const [index, setIndex] = useState(-1);
    const [isClient, setIsClient] = useState(false)
    const post = getPostFromParams(params);

    useEffect(() => {
        setIsClient(true);
    },[]);

    const photos = post.photos.map((photo: Photo) => ({
      src: photo.url,
      width: photo.width,
      height: photo.height
    }))
  

    return (
       <div>
            <div className="px-4 md:px-0 container max-w-6xl py-[80px]">
                <div className='flex flex-col items-center mb-20'>
                  <h3 className="text-center text-[16px] text-primary-700 uppercase font-display">{post.type}</h3>
                  <h1 className="text-center font-display text-[32px] md:text-[72px] leading-[44px] md:leading-[115px]">{post?.title}</h1>
                  <p className="text-center text-18 font-light max-w-lg">{post.description}</p>
                </div>
                <MasonryPhotoAlbum
                    photos={photos}
                    render={{ image: renderNextImage }}
                    sizes={{ size: "calc(100vw - 240px)" }}
                    onClick={({ index: current }) => setIndex(current)}
                />

                {isClient && (
                      <Lightbox
                        index={index}
                        slides={photos}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                    />
                  )}
            </div>
            <div className="flex items-center justify-center py-[80px] px-4 md:px-0">
                <div className="prose lg:prose-xl mb-10">
                  

                  
                </div>
            </div>
       </div>
    )
}