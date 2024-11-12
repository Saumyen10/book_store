import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'flowbite-react';

const SingleBook = () => {
  const { _id, Title, Author, imageURL, Description, PDF_URL, Page_Count, Publisher } = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-lg">
      <div className="w-full max-w-2xl">

        <img src={imageURL} alt={Title} className="w-full h-auto rounded-lg shadow-md mb-8" />
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
            {Title}</h2>
            <h5 className="text-2xl text-center mb-4 text-gray-700">
            {Author}</h5>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {Description}
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {Page_Count} Pages , <strong> {Publisher} </strong>
        </p>

        <div className="flex justify-between">
            <div>
              <Button href={PDF_URL} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow">
                Read Online
              </Button>
            </div>

            <div>
              <Button href="/cart" className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow">
                Add to Cart
              </Button>
            </div>
          </div>



        
      
      </div>
    </div>
  );
};

export default SingleBook;
