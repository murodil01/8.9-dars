import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="font-bold text-3xl md:text-5xl text-center text-gray-800 dark:text-white">
        Wait a minute...
      </h1>
      <Loader className="animate-spin w-12 h-12 text-blue-500" />
    </div>
  );
};

export default Loading;
