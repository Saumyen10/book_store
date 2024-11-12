import React, {useState, useEffect} from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBook = () => {
  
  const [allBooks, setAllBooks] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/all_books")
  /*fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/all_books`)*/
    .then(res => res.json())
    .then(data => setAllBooks(data));
}, []);

// delete a book
const handdleDelete = (id) => {
  console.log(id);
  fetch(`http://localhost:5000/books/${id}`, { 
  /*fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/${id}`, {*/
    method: "DELETE",
  })
  .then(res => res.json())
  .then(data => {
    alert("Book is deleted successfully");
    // setAllBooks(data);
  });
};

  return (

    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Manage Your Books</h2>
              {/* Table for book data */}
      <Table className='lg w-1/8'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit Or Manage</Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.Title}
              </Table.Cell>
              <Table.Cell>{book.Author}</Table.Cell>
              <Table.Cell>{book.Genre}</Table.Cell>
              <Table.Cell>Rs. 299.00</Table.Cell>
              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit/${book._id}`}>
                  Edit
                </Link>
                <button onClick={() => handdleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-700'>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default ManageBook