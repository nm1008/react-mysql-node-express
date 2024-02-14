import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/books`);

        setBooks(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try{
        axios.delete(`http://localhost:3000/books/${id}`)
        window.location.reload()
    } catch(err) {
        console.log(err.message)
    }
  }

  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold mb-5">
        React - MySQL - Node JS - Express
      </h1>
      <div className="p-5">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="flex flex-col items-center md:flex-row mb-5 "
            >
              {book.cover && <img src={book.cover} alt={book.cover} />}
              <h1>{book.title}</h1>
              <p>{book.desc}</p>
              <span>{book.price}</span>
              <div className="flex">
                <button className="p-2 bg-yellow-500 border-2 rounded-lg  text-white">
                    <Link to={`/editPage/${book.id}`}>  Update</Link>
                
                </button>
                <button className="p-2 bg-red-500 border-2 rounded-lg text-white " onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <button className="p-2 bg-blue-500 border-2 rounded-lg text-white">
            <Link to="/addPage">Add New Book</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
