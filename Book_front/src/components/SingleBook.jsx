import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, Title, imageURL, Description } = useLoaderData();
  
  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-lg">
      <div className="w-full max-w-2xl">
      
        <img src={imageURL} alt={Title} className="w-full h-auto rounded-lg shadow-md mb-8" />
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          {Title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          {Description}
        </p>
        
      </div>
    </div>
  );
};

export default SingleBook;
