import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const InsertReview = () => {
  const [review, setReview] = useState(null);
  const navigate = useNavigate();

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const BookTitle = form.BookTitle.value;
    const User = form.User.value;
    const Dates = form.Dates.value;
    const Rating = form.Rating.value;
    const DescribeReview = form.DescribeReview.value;

    const ReviewObj = {
      BookTitle, User, Dates, Rating, DescribeReview
    };

    console.log(ReviewObj);

    /*fetch("http://0/blog", {*/
    fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/blog`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ReviewObj)
    }).then(res => res.json()).then(data => {
      alert("Review Added Successfully!!!");
      form.reset();
      navigate('/blog'); // Redirect to the blog page after submission
    });
  };

  return (
    <div className='px-4 my-12 bg-gray-100 rounded-lg shadow-md'>
      <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Upload a Review</h2>

      <form onSubmit={handleReviewSubmit} className="flex flex-col gap-6 lg:w-3/4 mx-auto">
        <div className='flex flex-col lg:flex-row gap-8'>

           {/* 1st row: BookName, Username */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor='BookTitle' value="Book Title" />
            </div>
            <TextInput id="BookTitle" type="text" placeholder="Book Name" required shadow />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor='User' value="User Name" />
            </div>
            <TextInput id="User" type="text" placeholder="UserName" required shadow />
          </div>
        </div>

        {/* 2nd row: Describe Book Review */}
        <div className='flex flex-col gap-8'>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor='DescribeReview' value="Description" />
            </div>
            <Textarea id="DescribeReview" placeholder="Description" required rows={6} />
          </div>
        </div>

        {/* 3rd row: Date, Rating */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor='Dates' value="Date" />
            </div>
            <TextInput id="Dates" type="date" required shadow />
          </div>
          
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor='Rating' value="Rating" />
            </div>
            <TextInput id="Rating" type="number" step="0.01" min="1" max="5" placeholder="Rate the Book..." required shadow />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link to="#" className="text-cyan-600 hover:underline">
              terms and conditions
            </Link>
          </Label>
        </div>

        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}

export default InsertReview;
