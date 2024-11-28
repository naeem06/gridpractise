export default function Home() {
  return (
    <div>
      
      <div className="grid grid-cols-1 grid-rows-5 h-screen gap-2 md:grid-cols-5 md:grid-rows-4">
        <div className="bg-gray-500 text-center place-content-center md:col-span-5 text-[25px]">
          Header
        </div>
        <div className="bg-red-500 hidden md:flex justify-center items-center md:row-span-2 text-[20px]">
          Sidebar
        </div>
        <div className="bg-orange-400 text-center place-content-center md:col-span-2 text-[20px]">
          Content 1
        </div>
        <div className="bg-orange-400 text-center place-content-center md:col-span-2 text-[20px]">
          Content 2
        </div>
        <div className="bg-orange-400 text-center place-content-center md:col-span-4 text-[20px]">
          Content 3
        </div>
        <div className="bg-green-500 text-center place-content-center md:col-span-5 text-[20px]">
          Footer
        </div>
      </div>
      <div className="text-center text-[25px] h-[100px] underline place-content-center">
        Example 2
      </div>
      <div className="grid grid-cols-2 h-screen gap-2 md:grid-cols-9 md:grid-rows-6 font-[600] ">
        <div className="bg-red-600 text-white text-[20px] text-center place-content-center md:col-span-2 md:row-span-3 ">
          Content 1
        </div>
        <div className="bg-green-600 text-white text-[20px] text-center  place-content-center md:col-span-3 md:row-span-2">
          Content 2
        </div>
        <div className="bg-yellow-600 text-white text-[20px] text-center place-content-center md:col-span-4 md:row-span-2">
          Content 3
        </div>
        <div className="bg-purple-600 text-white text-[20px] text-center place-content-center md:row-span-2 md:col-span-2 ">
          Content 4
        </div>
        <div className="bg-blue-600 text-white text-[20px] text-center place-content-center md:row-span-2 md:col-span-3">
          Content 5
        </div>
        <div className="bg-red-600 text-white text-[20px] text-center place-content-center md:row-span-4 md:col-span-2 ">
          Content 6
        </div>
        <div className="bg-yellow-600 text-white text-[20px] text-center place-content-center md:col-span-2 md:row-span-3">
          Content 7
        </div>
        <div className="bg-blue-600 text-white text-[20px] text-center place-content-center md:col-span-3 md:row-span-2">
          Content 8
        </div>
        <div className="hidden bg-purple-600 md:flex text-white justify-center items-center md:row-span-2 md:col-span-2 font-[600] text-[20px]">
          Content 9
        </div>
      </div>
      <div className="text-center text-[25px] h-[100px] underline place-content-center">
        Example 3
      </div>
      <div className="h-screen grid grid-cols-6 grid-rows-11 bg-green-300 gap-2 md:grid-cols-8">
         <div className="row-span-4 col-span-6 text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 md:col-span-4">Image 1</div>
         <div className="text-center place-content-center col-span-2  bg-gradient-to-l from-teal-400 to-blue-600 md:row-span-2 ">Content 2</div>
         <div className="text-center place-content-center col-span-2 bg-gradient-to-l from-teal-400 to-blue-600 md:row-span-2">Content 3</div>
         <div className="text-center place-content-center col-span-2 bg-gradient-to-l from-teal-400 to-blue-600 md:col-span-1 md:row-span-4">Content 4</div>
         <div className="text-center place-content-center col-span-3 row-span-2 bg-gradient-to-l from-teal-400 to-blue-600">Content 5</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-3 row-span-2">Content 6</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 row-span-2 ">Content 7</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-5 md:col-span-3 md:row-span-3">Content 8</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-5">Content 9</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-3 row-span-2 hidden md:flex justify-center items-center">Content 10</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-3 hidden md:flex justify-center items-center row-span-2">Content 11</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-2  hidden md:flex justify-center items-center row-span-1">Content 12</div>
         <div className="text-center place-content-center bg-gradient-to-l from-teal-400 to-blue-600 col-span-2 hidden md:flex justify-center items-center">Content 13</div>
         <div className="text-center place-content-center bg-gradient-to-r from-teal-400 to-blue-600 col-span-6 row-span-2 md:col-span-8">Footer</div>
      </div>

    </div>
  );
}
