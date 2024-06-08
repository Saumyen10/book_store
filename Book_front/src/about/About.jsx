import React from 'react'
import {Link} from 'react-router-dom'
import FavBookImg from '../assets/about.jpg';


const About = () => {
  return (
    <div>
       <div className="px-4 lg:px-24 bg-sky-200 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="left md:w-1/2 space-y-8 h-full">
          <h1 className="text-5xl font-bold text-black">
            About <span className="text-blue-800 text-5xl">Us</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>BookVerse</strong>, your number one source for all kinds of books. We're dedicated to giving you the very best book recommendations, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed my-4">
            Founded in 2024 by <strong>Saumyen Prateek Deka</strong> & <strong>Kunjan Kalita</strong>, BookVerse was established to provide its users with the best quality books at an affordable cost. When we first started out, our passion for providing the best book recommendations drove us to conduct extensive research. This dedication allowed BookVerse to offer you the world's most advanced book carousel feature.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed my-4">
            We hope you enjoy our book recommendations as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed my-4">
            Sincerely,
            <br />
            <strong>Saumyen & Kunjan</strong>
          </p>
          <div className="text-center my-8">
            <Link to="/" className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-black duration-200 rounded">
              Back to Home
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="right md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg">
            <img src={FavBookImg} alt="About Us Image" className="rounded-lg shadow-lg w-full h-auto"/>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default About;