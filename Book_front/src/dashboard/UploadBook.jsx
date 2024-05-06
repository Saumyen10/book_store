import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
//importing react items
import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";


const UploadBook = () => {

  const BookCategories = [
    "Fiction",
    "History",
    "Science",
    "Romance",
    "Mystery",
    "Horror",
    "Fantasy",
    "Thriller",
    "Comics",
    "Travel",
    "Religion",
    "Classics",
    "Biography",
    "Business",
    "Music",
    "Children",
    "Art",
    "Technology"
  ]
  const [selectBookCategory, setSelectBookCategory] = useState(BookCategories);

  const handleSelectedBookValue = (event) => {
    setSelectBookCategory(event.target.value);
  }

  //accept only wehn data is filled
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    //write all book data 
    const Title = form.Title.value;
    const Author = form.Author.value;
    const selectBook = form.selectBook.value;
    const Description = form.Description.value;
    const Publisher = form.Publisher.value;
    const Page_Count = form.Page_Count.value;
    const Rating = form.Rating.value;
    const imageURL = form.imageURL.value;
    const PDF_URL = form.PDF_URL.value;

      const bookObj = {
        Title, Author, selectBook, Description, Publisher, Page_Count, Rating, imageURL, PDF_URL
      }

      console.log(bookObj);
      
      //send Data to Database
      fetch("http://localhost:5000/upload_book", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj) 
      }).then(res=> res.json()).then(data => {
        //console.log(data);
        alert("Book Uploaded Successfully!!!")
        form.reset();  //form is reset after successfully uploading Book
      }) 
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Upload a Book</h2>
    
      <form onSubmit={handleBookSubmit} className="flex lg: w-[1180px] flex-col flex-wrap gap-6">
      {/* 1st row */}
        <div className='flex gap-8'>

            <div className='lg: w-1/2'>
            <div className="mb-2 block">
              <Label value="Book Title" htmlFor='Title' />
            </div>
            <TextInput id="Title" type="text" placeholder="Book Name" required shadow />
          </div>

          <div className='lg: w-1/2'>
            <div className="mb-2 block">
              <Label value="Author Name" />
            </div>
            <TextInput id="Author" type="text" placeholder="Author Name" required shadow />
          </div>
     </div>
        {/* 2nd row */}
      <div className='flex gap-8'>
        <div className='lg: w-1/2'>
            <div className="mb-2 block">
              <Label value="Genre" htmlFor='selectBook'/>
            </div>
            
              <Select id='selectBook' className='w-full rounded' value={selectBookCategory} onChange={handleSelectedBookValue}>
                    {/* define the choices */}
                  {
                    BookCategories.map((option) => <option key={option} value={option}> {option}</option>)
                  }
              </Select>        
          </div>

        </div>

          {/*3rd row : Description*/}
        <div className='flex gap-8'>
            <div className='w-full'>
              <div className="mb-2 block">
                <Label value="Description" />
              </div>
              <Textarea id="Description" type="text" placeholder="Description" required rows={6} />
            </div>
         
        </div>

        {/*4th row: Publisher, No. of Pages, Rating */}
        <div className='flex gap-8'>
        <div className='lg: w-1/2'>
              <div className="mb-2 block">
                <Label value="Publisher" />
              </div>
              <TextInput id="Publisher" type="text" placeholder="Publisher" required shadow />
            </div>
            <div className='lg: w-1/2'>
              <div className="mb-2 block">
                <Label value="No. of Pages" />
              </div>
              <TextInput id="Page_Count" type="number" placeholder="No. of Pages..." required shadow />
            </div>
            <div className='lg: w-1/2'>
              <div className="mb-2 block">
                <Label value="Rating" />
              </div>
              <TextInput id="Rating" type="number" placeholder="Rate the Book..." required shadow />
            </div>
        </div>

          {/*5th row: Image and PDF Links */}
                  <div className='flex gap-8'>
            <div className='lg: w-1/2'>
              <div className="mb-2 block">
                <Label value="Book Image URL" />
              </div>
              <TextInput id="imageURL" type="text" placeholder="Image Link..." required shadow />
            </div>
            <div className='lg: w-1/2'>
              <div className="mb-2 block">
                <Label value="Book PDF URL" />
              </div>
              <TextInput id="PDF_URL" type="text" placeholder="PDF Link..." required shadow />
            </div>
        </div>

      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Upload</Button>
    </form>
    
    
    </div>
  )
}

export default UploadBook