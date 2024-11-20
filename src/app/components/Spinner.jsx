import React from 'react';

const DotSpinner = () => {
  return (
    <div className="relative flex items-center justify-start h-[2.8rem] w-[2.8rem]">
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full">
        <div className="dot" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-45">
        <div className="dot delay-[-0.875s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-90">
        <div className="dot delay-[-0.75s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-135">
        <div className="dot delay-[-0.625s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-180">
        <div className="dot delay-[-0.5s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-225">
        <div className="dot delay-[-0.375s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-270">
        <div className="dot delay-[-0.25s]" />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-315">
        <div className="dot delay-[-0.125s]" />
      </div>
    </div>
  );
};

export default DotSpinner;
