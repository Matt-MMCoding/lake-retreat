import { forwardRef } from 'react';
import type { IBoxProps } from './types';

const Box = forwardRef<HTMLDivElement, IBoxProps>(
  ({ children, ...boxProps }, ref) => {
    return (
      <div
        className="w-full max-w-[1200px] mx-auto flex justify-center"
        ref={ref}
        {...boxProps}
      >
        {children}
      </div>
    );
  }
);

export default Box;
Box.displayName = 'Box';
