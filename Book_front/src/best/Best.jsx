import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BookCards from '../components/BookCards';

const Best = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all_books")
    /*fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/all_books`)*/
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        <BookCards books={books} headline="All Books Are Available" />
      </div>
    </div>
  );
};

export default Best;
