import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-[500px]'>
      <div class="text-center flex flex-col items-center">
        <h1 class="mb-4 text-6xl font-semibold text-violet-300">404 NotFound</h1>
        <p class="mb-4 text-lg text-gray-600">شرمنده ی اخلاق ورزشیت این صفحه وجود نداره داداش</p>
        <div class="animate-bounce">
          <svg
            class="mx-auto h-16 w-16 text-violet-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-gray-600">
          برگشت به {" "}
          <Link to="/" class="text-blue">
            صفحه ی اصلی
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export  {NotFound}