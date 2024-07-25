import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const Empty = () => (
  <section className="bg-white mt-[6.5rem] divide-y divide-gray-200">
    <div className="w-full text-center mx-auto py-12" colSpan="5">
      <img
        className="w-32 h-32 mx-auto"
        src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690261234/di7tvpnzsesyo7vvsrq4.svg"
        alt="image empty states"
      />
      <p className="text-gray-700 font-medium text-lg text-center">Start organizing your files</p>
      {/* <p className="text-gray-500 text-center text-sm">Open Documentation</p> */}
      <Link href="/upload">
        <button
          className="flex items-center m-auto mt-4 gap-3 rounded first-letter:rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 disabled:bg-gray-300"
          aria-label="Add Your First File"
        >
          <Plus />
          Add Your First File
        </button>
      </Link>
    </div>
  </section>
);

function Files() {
  return (
    <div>
      <Empty />
    </div>
  );
}

export default Files;