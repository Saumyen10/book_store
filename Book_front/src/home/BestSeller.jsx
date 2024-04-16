import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import BookCards from '../components/BookCards'

const BestSeller = () => {

    const [books, setBooks]= useState([])
    useEffect(() => {
        fetch("http://localhost:5000/all_books").then(res=> res.json()).then(data=>setBooks(data.slice(0,2)))
    }, [])
  return (
    <div>
      <BookCards books={books} headline ="Best Seller Books"/>
    </div>
    
  )
}

export default BestSeller
