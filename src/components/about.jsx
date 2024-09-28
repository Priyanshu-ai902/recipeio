import React from "react";
import PartnerCard from "./partner";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
     <nav className="flex flex-col md:flex-row items-center justify-between p-5 bg-transparent border-b-2 border-black relative z-100 bg-slate-300">
                <div className="rounded-full flex gap-2 mb-4 md:mb-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51uyzBl1_6QnPPORZTKqlKU5yGN7-3cS0Og&s" alt="WP Tasty Logo" className="w-10 h-10" />
                    <h1 className="text-3xl mb-2 text-green-900">
                        Recipe
                        <span className="text-green-500">Realm</span>
                    </h1>
                </div>

                <ul className="flex flex-col md:flex-row gap-4 md:gap-10 list-none">
                    <li className="relative group">
                        <Link to="/" className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700">
                            HOME
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to="/recipe" className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700">
                            RECIPE
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to="/contribute" className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700">
                            CONTRIBUTE
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to="/tables" className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700">
                        TABLES-TALK
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
      <div className="text-center font-extrabold p-10">
        <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}

        <h1 className="text-6xl mb-2 text-green-700">
          Recipe
          <span className="text-green-500">Realm</span>
          <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}

        </h1>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-8 p-4 w-full">
        <div className="w-full lg:w-1/2">
          <img
            src="https://static4.depositphotos.com/1000336/311/i/450/depositphotos_3114474-stock-photo-steak-dinner.jpg"
            alt="Delicious food"
            className="w-full h-auto mb-4 lg:mb-0 object-cover rounded-lg shadow-md"
          />
        </div>

        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-lg lg:text-2xl xl:text-4xl w-full lg:w-1/2 px-4 lg:pr-10 text-center font-semibold"
        >
          <span className="font-extrabold">
            Welcome to Our Recipe Haven
            <br />
            At{" "}
          </span>
          <h1 className="inline font-extrabold text-green-700">
            Recipe
            <span className="text-green-500">Realm</span>
          </h1>
          <br />
          we believe that cooking is more than just a necessity—it's an art form
          that brings people together. Our platform is designed to inspire
          culinary creativity, simplify meal planning, and introduce you to a
          world of flavors, whether you're a seasoned chef or a home cook.
          <br />
          From traditional recipes passed down through generations to modern,
          innovative dishes, we strive to offer something for every palate.
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:space-x-8 p-4 w-full">
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Delicious food"
            className="w-full h-auto mb-4 lg:mb-0 object-cover rounded-lg shadow-md"
          />
        </div>

        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-lg lg:text-2xl xl:text-4xl w-full lg:w-1/2 px-4 lg:pr-10 text-center font-semibold"
        >
          <span className="font-extrabold">Curated Just for You</span> <br />
          Our recipes are carefully selected and tested to ensure they meet the
          highest standards of taste and nutrition. Whether you're exploring new
          cuisines or seeking quick, nutritious meals, we provide an intuitive
          platform to help you find exactly what you're looking for. With
          detailed step-by-step instructions, nutritional information, and tips
          from culinary experts, we aim to make your cooking experience as
          seamless and enjoyable as possible.
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-8 p-4 w-full">
        <div className="w-full lg:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/711/576/small/two-juicy-grilled-chicken-breasts-on-a-white-ceramic-tray-for-serving-with-vegetables-front-view-cement-grey-background-delicious-food-photo.jpg"
            alt="Delicious food"
            className="w-full h-auto mb-4 lg:mb-0 object-cover rounded-lg shadow-md"
          />
        </div>

        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-lg lg:text-2xl xl:text-4xl w-full lg:w-1/2 px-4 lg:pr-10 text-center font-semibold"
        >
          <span className="font-extrabold">Join Our Community</span>
          <br />
          Cooking is a journey best enjoyed with others. Join our community of
          food lovers, share your own culinary creations, and discover new
          inspiration every day. We’re more than just a recipe site; we’re a
          place where creativity thrives, and flavors unite. Thank you for being
          part of our growing family—we’re excited to cook, learn, and grow
          together!
        </div>
      </div>
      <div>
        <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}
        <h1 className="m-10 text-center font-extrabold text-5xl">
          Our Partners
        </h1>
        <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}
        <div className="">
          <PartnerCard />
        </div>
      </div>
    </>
  );
};

export default About;