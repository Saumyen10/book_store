import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "flowbite-react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const Blog = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    /*fetch('http://localhost:5000/reviews')*/
    fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
       
      })
      .catch((err) => {
        setError(err);
        
      });
  }, []);


  return (
    <div className="my-12 px-4 lg:px-24 bg-yellow-200">
      <p className="text-center font-bold mt-16 text-3xl">
        What Readers Have to Say About the Book?
      </p>
      <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => {
          // Parse the date string
          const date = new Date(review.Dates);
          // Format the date
          const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return (
            <Card key={review._id} sx={{ maxWidth: 345, marginBottom: '20px' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[800] }} aria-label="review">
                    {review.User[0]}
                  </Avatar>
                }
                title={review.User}
                subheader={formattedDate}
              />
              <CardContent>
                <Typography variant="body1" gutterBottom component="div">
                  <b className="text-2xl">{review.BookTitle}</b>
                </Typography>
                <Typography variant="body1" gutterBottom component="div">
                  {`Rated ${review.Rating} out of 5 `}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                  {review.DescribeReview}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center">
      <Button >
        <Link to="/insertreview" className='font-bold font-sans text-2xl underline text-gray-200'>
          Want to give feedback?
        </Link>
      </Button>
    </div>
    </div>
  );
};

export default Blog;
