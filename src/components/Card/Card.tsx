import type { FC } from 'react';
import type { ICardProps } from './types';

const Card: FC<ICardProps> = ({ productUrl, imgUrl, imgAlt, title, desc }) => {
  return (
    <div className="w-full bg-white text-black pb-4 rounded-lg flex flex-col gap-2">
      <a
        href={productUrl}
        target="_self"
      >
        <img
          className="rounded-t-lg"
          src={imgUrl}
          alt={imgAlt}
        />
      </a>
      <div className="px-2">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div className="flex leading-none flex-col py-2 place-items-center bg-lime-900 w-1/2 mx-auto rounded-md text-white hover:bg-lime-700 transition-colors ease-in-out duration-300">
        <a
          href={productUrl}
          target="_self"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Card;
