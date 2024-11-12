import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import BookCards from '../components/BookCards'

const BestSeller = () => {

    const [books, setBooks]= useState([])
    useEffect(() => {
        fetch("http://localhost:5000/all_books").then(res=> res.json()).then(data=>setBooks(data.slice(13,30)))
        /*fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/all_books`).then(res=> res.json()).then(data=>setBooks(data.slice(13,30)))*/
    }, [])
  return (
    <div>
      <BookCards books={books} headline ="Best Seller Books"/>
    </div>
    
  )
}

export default BestSeller
