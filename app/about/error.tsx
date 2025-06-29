"use client";


import { Ban } from "lucide-react";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
      <h1 className="font-bold text-3xl md:text-5xl text-center text-red-600 dark:text-red-400">
        Xatolik yuz berdi
      </h1>
      <Ban className="w-16 h-16 text-red-600 dark:text-red-400" />
      <p className="text-center text-gray-600 dark:text-gray-300 text-base md:text-lg">
        Iltimos, sahifani qayta yuklang yoki keyinroq urinib koring.
      </p>
    </div>
  );
};

export default Error;
