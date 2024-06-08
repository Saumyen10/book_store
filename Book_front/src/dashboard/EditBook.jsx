import React, {useState} from 'react'
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBook = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const {Title, Author, Genre, Description, Publisher, Rating, Page_Count, imageURL, PDF_URL} = useLoaderData();

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
    "Finance",
    "Motivation",
    "Children",
    "Art",
    "Technology"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(Genre);

  const handleSelectedBookValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBookObj = {
        Title: form.Title.value,
        Author: form.Author.value,
        Genre: selectedBookCategory, // Use the selected genre state here
        Description: form.Description.value,
        Publisher: form.Publisher.value,
        Page_Count: form.Page_Count.value,
        Rating: form.Rating.value,
        imageURL: form.imageURL.value,
        PDF_URL: form.PDF_URL.value
    };

    console.log(updatedBookObj);

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is updated successfully!");
      form.reset();
      navigate('/admin/dashboard/manage')
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
              <Label value="Genre" htmlFor="Genre" />
            </div>

            <Select id='Genre' className='w-full rounded' value={selectedBookCategory} onChange={handleSelectedBookValue}>
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
              step="0.01" // Allows for floating point numbers
                  min="1" max="5"
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

export default EditBook;
