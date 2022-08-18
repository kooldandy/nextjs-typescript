import React, { FC } from 'react'
import NextImage from "next/image";
import { IImage } from '@interfaces/index';

const Image: FC<IImage> = (props: IImage) => {
    const {src, alt, height, width, style, layout="fixed", priority= false, placeholder="empty", caption} = props;
  return (
    <figure>
        <NextImage
              layout={layout}
              src={src}
              alt={alt}
              priority={priority}
              placeholder={placeholder}
              height={height}
              width={width}
              style={style}
            />
        {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default Image