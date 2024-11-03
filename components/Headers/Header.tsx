// components/StickyHeader.tsx
"use client"
import React, { useEffect, useState } from 'react';
import ExampleNavbar from './ExampleNavbar';


const StickyHeader  = () => {

  return (
    <header className=" bg-transparent  px-4 lg:px-8 border-neutral-700 z-50 fixed w-full   ">
      <div className="max-w-screen-2xl flex   ">

        <nav className="flex justify-between w-full gap-2">
          <div className="max-w-sm mx-3 ">
            <ExampleNavbar />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default StickyHeader;
