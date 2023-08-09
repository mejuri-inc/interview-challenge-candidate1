'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { GridTileImage } from 'components/grid/tile';
import ArrowLeftIcon from 'components/icons/arrow-left';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const buttonClassName =
    'px-9 cursor-pointer ease-in-and-out duration-200 transition-bg bg-[#7928ca] hover:bg-violetDark';

  return (
    <div className="h-full">
      <div className="relative h-full max-h-[600px] overflow-hidden">
        {images[currentImage] && (
          <GridTileImage
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={600}
            height={600}
            isInteractive={false}
            priority={true}
            background="black"
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-10 right-10 flex h-12 flex-row border border-white text-white shadow-xl dark:border-black dark:text-black">
            <button
              aria-label="Previous product image"
              className={clsx(buttonClassName, 'border-r border-white bg-black dark:border-black')}
            >
              <ArrowLeftIcon className="h-6" />
            </button>
            <button aria-label="Next product image" className={clsx(buttonClassName, 'bg-black')}>
              <ArrowLeftIcon className="h-6 rotate-180 " />
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="h-full w-1/4"
                onClick={() => setCurrentImage(index)}
              >
                <GridTileImage
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="purple-dark"
                  active={isActive}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
