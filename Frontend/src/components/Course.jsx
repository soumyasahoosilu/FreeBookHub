import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import axios from "axios"
import {Link} from "react-router-dom"

const Course = () => {

  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)

      }
      catch(error){
        console.log(error);

      }
    };
    getBook();

  },[])



  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Explore a diverse collection of book-related courses designed to
            enhance your reading skills, deepen your understanding of different
            genres, and inspire your love for literature. Whether you're a
            seasoned reader or just starting out, our courses are crafted to
            help you discover new perspectives, unlock creative thinking, and
            enjoy the world of books in a whole new way. Dive in and enjoy a
            journey of knowledge and imagination!
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
            Back
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

