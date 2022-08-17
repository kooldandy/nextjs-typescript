import React, { FC } from 'react'
import NextImage from "next/image";
import { IImage } from '@interfaces/index';

const Image: FC<IImage> = (props: IImage) => {
    const {src, alt} = props;
  return (
    <>
        <NextImage
              src={src}
              alt={alt}
              priority
              placeholder="blur" // Optional blur-up while loading
            />
    </>
  )
}

export default Image