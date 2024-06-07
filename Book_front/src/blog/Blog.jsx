import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';

const Blog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-12 px-4 lg:px-24 bg-yellow-200">
      <p className="text-center font-bold mt-16 text-3xl">
        What Readers have to say about the books
      </p>
      <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books.map((review) => (
          <Card key={review._id} className="max-w-sm w-full h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {review.BookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {review.Review}
            </p>
            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
