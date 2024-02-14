import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/books`, book);
      navigate("/")
    } catch (err) {
      console.log(err.message);
    }
    console.log(book);
  };

  return (
    <section className="bg-gray-200 h-screen">
      <div className="flex flex-col items-center justify-center h-full mx-4 ">
        <div className="mb-5">
          <h1 className="text-xl md:text-3xl font-bold">Add Book</h1>
        </div>
        <div className="bg-white w-full h-auto px-5 rounded-lg md:w-1/2 lg:w-[450px]">
          <form onSubmit={handleClick}>
            <div className="flex flex-col mt-5">
              <label className="font-semibold my-2 text-sm md:text-md">
                Title
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-md h-[40px] pl-2 text-sm md:text-md"
                placeholder="Title"
                onChange={handleChange}
                name="title"
              />
            </div>

            <div className="flex flex-col my-5">
              <label className="font-semibold my-2 text-sm md:text-md">
                Description
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-md h-[40px] pl-2 text-sm md:text-md"
                placeholder="Description"
                onChange={handleChange}
                name="desc"
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="font-semibold my-2 text-sm md:text-md">
                Price
              </label>
              <input
                type="number"
                className="border border-gray-400 rounded-md h-[40px] pl-2 text-sm md:text-md"
                placeholder="Price"
                onChange={handleChange}
                name="price"
              />
            </div>
            <div className="flex flex-col my-5">
              <label className="font-semibold my-2 text-sm md:text-md">
                Cover
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-md h-[40px] pl-2 text-sm md:text-md"
                placeholder="Description"
                onChange={handleChange}
                name="cover"
              />
            </div>
            <button
              className={`my-8 py-3 w-full font-bold tracking-wider text-white bg-blue-500 rounded-md text-bold text-sm md:text-md`}
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
