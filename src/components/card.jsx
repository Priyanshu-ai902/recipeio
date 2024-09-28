import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import React, { useState } from "react";

// Array to store multiple recipes
const recipesData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwybxXB4B_eHPxHnfPs7R8h1zcmWaUVtsDAxgOqU1nHwlIgkX7wx4fDlcvKM8tHMrf86M&usqp=CAU",
    category: "Dinner",
    title: "Delicious Delights: Explore Our Favorite Recipes",
  },
  {
    image: "https://www.aheadofthyme.com/wp-content/uploads/2021/09/fettuccine-alfredo.jpg",
    category: "Lunch",
    title: "Fresh Pasta and Vegetables",
  },
  {
    image: "https://www.eatingwell.com/thmb/WQJJameVA8qPRJ-ai6v2w7MKHME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7787187-c1ba3239e9e1421982fcc2092a87b772.jpg",
    category: "Salad",
    title: "Healthy Salad with Fresh Ingredients",
  },
  {
    image: "https://www.aheadofthyme.com/wp-content/uploads/2021/09/fettuccine-alfredo.jpg",
    category: "Dinner",
    title: "Delicious Delights: Explore Our Favorite Recipes",
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/classic-potato-salad-index-6425b6f9bd7d2.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    category: "Lunch",
    title: "Fresh Pasta and Vegetables",
  },
  {
    image: "https://www.recipetineats.com/uploads/2018/06/Shepherds-Pie_1.jpg",
    category: "Salad",
    title: "Healthy Salad with Fresh Ingredients",
  },
  {
    image: "https://www.paleorunningmomma.com/wp-content/uploads/2020/12/beef-stroganoff-9.jpg",
    category: "Dinner",
    title: "Delicious Delights: Explore Our Favorite Recipes",
  },
  {
    image: "https://properfoodie.com/wp-content/uploads/2020/07/featured-sushi-2b-feature-sushi-2b-1.jpg",
    category: "Lunch",
    title: "Fresh Pasta and Vegetables",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqAov3VcuQ4KQqkhXIFUOPFX3Mj2NHUtqgPdMJ5lMUQUNXZ68AceqyasJu2uRdRGoUzg&usqp=CAU",
    category: "Salad",
    title: "Healthy Salad with Fresh Ingredients",
  },
];

const RecipeCard = ({ image, category, title }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [starRating, setStarRating] = useState(Array(5).fill(false));

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleStarClick = (index) => {
    const newStarRating = starRating.map((_, idx) => idx <= index);
    setStarRating(newStarRating);
  };

  return (
    <div className="w-80 p-5 rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover" // Set width and height to give rectangular shape
        src={image}
        alt={title}
      />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{category}</p>
      </div>

      <div className="flex justify-between items-center px-2 py-4">
        <button onClick={handleLike} className="transition-colors duration-200">
          {isLiked ? <FaHeart size="25px" color="red" /> : <FaHeart size="25px" />}
        </button>
        <span className="flex ml-4">
          {starRating.map((filled, index) => (
            <button key={index} onClick={() => handleStarClick(index)}>
              <FaStar size="25px" color={filled ? "yellow" : "black"} />
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

const RecipeList = () => {
  return (
    <>
      <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}

      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Most Preferable Dishes

      </h2>
      <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}
      <div className="flex justify-center items-center w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipesData.map((recipe, index) => (
            <RecipeCard key={index} image={recipe.image} category={recipe.category} title={recipe.title} />
          ))}
        </div>
      </div>

    </>
  );
};

export default RecipeList;
