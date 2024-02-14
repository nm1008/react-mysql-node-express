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
              className="flex flex-col items-center md:items-start mb-5 md:grid md:grid-cols-3 "
            >
              {book.cover && <img src={book.cover} alt={book.cover} />}
              <h1>{book.title}</h1>
              <p>{book.desc}</p>
              <span>{book.price}</span>
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <button className="p-2 bg-blue-500 border-2 rounded-lg ">
            <Link to="/addPage">Add New Book</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
