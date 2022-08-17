import React, { FC } from 'react'
import NextImage from "next/image";
import { IImage } from '@interfaces/index';

const Image: FC<IImage> = (props: IImage) => {
    const {src, alt, height, width, style, priority= false, placeholder="empty"} = props;
  return (
    <>
        <NextImage
            layout='fixed'
              src={src}
              alt={alt}
              priority={priority}
              placeholder={placeholder}
              height={height}
              width={width}
              style={style}
            />
    </>
  )
}

export default Image