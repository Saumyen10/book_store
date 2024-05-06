import React, {useState} from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBook = () => {
 
  const { id } = useParams();
  const [Title, Author, selectBook, Description, Publisher, Rating, Page_Count, imageURL, PDF_URL] = useLoaderData();

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
    console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  };

  const handleUpdate = (e) => {
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

    const updateBookObj = {
        Title, Author, selectBook, Description, Publisher, Page_Count, Rating, imageURL, PDF_URL
      }

      console.log(updateBookObj);
    
    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is updated Successfully!!!");
    });
  };

  return (
      <div className="px-4 my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Update the book data
      </h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-6"
      >
        {/* Form fields */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Book Title" htmlFor='Title'/>
            </div>
            <TextInput
              id="Title"
              type="text"
              placeholder="Book Name"
              required
              shadow
              defaultValue={Title}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Author Name" />
            </div>
            <TextInput
              id="Author"
              type="text"
              placeholder="Author Name"
              required
              shadow
              defaultValue={Author}
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Genre" htmlFor="selectBook" />
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
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label value="Description" />
            </div>
            <Textarea
              id="Description"
              type="text"
              placeholder="Description"
              required
              rows={6}
              defaultValue={Description}
            />
          </div>
        </div>

        {/*4th row: Publisher, No. of Pages, Rating */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Publisher" />
            </div>
            <TextInput
              id="Publisher"
              type="text"
              placeholder="Publisher"
              required
              shadow
              defaultValue={Publisher}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="No. of Pages" />
            </div>
            <TextInput
              id="Page_Count"
              type="number"
              placeholder="No. of Pages..."
              required
              shadow
              defaultValue={Page_Count}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Rating" />
            </div>
            <TextInput
              id="Rating"
              type="number"
              placeholder="Rate the Book..."
              required
              shadow
              defaultValue={Rating}
            />
          </div>
        </div>

        {/*5th row: Image and PDF Links */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              placeholder="Image Link..."
              required
              shadow
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label value="Book PDF URL" />
            </div>
            <TextInput
              id="PDF_URL"
              type="text"
              placeholder="PDF Link..."
              required
              shadow
              defaultValue={PDF_URL}
            />
          </div>
        </div>

        {/* Button for submitting form */}
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  )
}

export default EditBook