import React, { useState, useEffect } from "react";
import recipesData from "./recipesData";
import { Link } from "react-router-dom";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Recipe = () => {
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [makingFilter, setMakingFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [nutritionFilter, setNutritionFilter] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [seasonalFilter, setSeasonalFilter] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [titleOpacity, setTitleOpacity] = useState(0.4);

  const filteredRecipes = recipesData.filter((recipe) => {
    return (
      (cuisineFilter === "" || recipe.cuisine === cuisineFilter) &&
      (makingFilter === "" || recipe.making === makingFilter) &&
      (timeFilter === "" || recipe.time <= Number(timeFilter)) &&
      (nutritionFilter === "" || recipe.nutrition === nutritionFilter) &&
      (mealTypeFilter === "" || recipe.mealType === mealTypeFilter) &&
      (seasonalFilter === "" || recipe.seasonal === seasonalFilter)
    );
  });

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newOpacity = Math.min(1, 0.4 + scrollTop / 500);
      setTitleOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
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
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url('https://t3.ftcdn.net/jpg/09/08/95/82/360_F_908958277_LUQ0F2JzTxsQRZuvfmhIcAkQ8p2YZHhU.jpg')] bg-cover bg-center"></div>

        <div className="relative z-10 h-full overflow-auto">
          <div className="sticky top-0  z-10 transition-all duration-300">
            <h1
              className="text-6xl font-bold mb-8 text-center text-white"
              style={{ backgroundColor: `rgba(0, 0, 0, ${titleOpacity})` }}
            >
              Filter Your Recipes
            </h1>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              <div>
                <label
                  htmlFor="cuisine"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Cuisine:
                </label>
                <select
                  id="cuisine"
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                  className="p-3 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black font-bold transition duration-200"
                >
                  <option className="font-semibold" value="">
                    All
                  </option>
                  <option className="font-semibold" value="Italian">
                    Italian
                  </option>
                  <option className="font-semibold" value="Indian">
                    Indian
                  </option>
                  <option className="font-semibold" value="Japanese">
                    Japanese
                  </option>
                  <option className="font-semibold" value="Mexican">
                    Mexican
                  </option>
                  <option className="font-semibold" value="American">
                    American
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="making"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Making Method:
                </label>
                <select
                  id="making"
                  value={makingFilter}
                  onChange={(e) => setMakingFilter(e.target.value)}
                  className="p-3 border border-black font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                >
                  <option className="font-semibold" value="">
                    All
                  </option>
                  <option className="font-semibold" value="Baking">
                    Baking
                  </option>
                  <option className="font-semibold" value="Grilling">
                    Grilling
                  </option>
                  <option className="font-semibold" value="Frying">
                    Frying
                  </option>
                  <option className="font-semibold" value="Steaming">
                    Steaming
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Max Cooking Time (minutes):
                </label>
                <input
                  type="number"
                  id="time"
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="p-3 font-bold border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                  placeholder="e.g. 30"
                />
              </div>

              <div>
                <label
                  htmlFor="nutrition"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Nutrition:
                </label>
                <select
                  id="nutrition"
                  value={nutritionFilter}
                  onChange={(e) => setNutritionFilter(e.target.value)}
                  className="p-3 border font-bold border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                >
                  <option className="font-semibold" value="">
                    All
                  </option>
                  <option className="font-semibold" value="Low-Calorie">
                    Low-Calorie
                  </option>
                  <option className="font-semibold" value="High-Protein">
                    High-Protein
                  </option>
                  <option className="font-semibold" value="Vegan">
                    Vegan
                  </option>
                  <option className="font-semibold" value="Gluten-Free">
                    Gluten-Free
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mealType"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Meal Type:
                </label>
                <select
                  id="mealType"
                  value={mealTypeFilter}
                  onChange={(e) => setMealTypeFilter(e.target.value)}
                  className="p-3 font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                >
                  <option className="font-semibold" value="">
                    All
                  </option>
                  <option className="font-semibold" value="Breakfast">
                    Breakfast
                  </option>
                  <option className="font-semibold" value="Lunch">
                    Lunch
                  </option>
                  <option className="font-semibold" value="Dinner">
                    Dinner
                  </option>
                  <option className="font-semibold" value="Snack">
                    Snack
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="seasonal"
                  className="block mb-2 font-bold text-xl text-white"
                >
                  Seasonal:
                </label>
                <select
                  id="seasonal"
                  value={seasonalFilter}
                  onChange={(e) => setSeasonalFilter(e.target.value)}
                  className="p-3 font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                >
                  <option className="font-semibold" value="">
                    All
                  </option>
                  <option className="font-semibold" value="Spring">
                    Spring
                  </option>
                  <option className="font-semibold" value="Summer">
                    Summer
                  </option>
                  <option className="font-semibold" value="Fall">
                    Fall
                  </option>
                  <option className="font-semibold" value="Winter">
                    Winter
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(recipe)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-2xl font-extrabold mb-2 text-black">{recipe.name}</h3>
                  <div className="flex gap-6">
                    <p className="text-lg font-semibold text-gray-700">{recipe.cuisine}</p>
                    <p className="text-lg font-semibold text-gray-500">Time: {recipe.time} minutes</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedRecipe && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{selectedRecipe.name}</h2>

            {/* Cuisine and Time */}
            <div className="flex justify-between text-lg font-medium mb-4">
              <p className="text-gray-600">
                <strong>Cuisine:</strong> {selectedRecipe.cuisine}
              </p>
              <p className="text-gray-600">
                <strong>Time:</strong> {selectedRecipe.time} minutes
              </p>
            </div>

            {/* Method, Difficulty, Nutrition, Meal Type, and Seasonal */}
            <div className="flex flex-col mb-4">
              <p className="text-gray-700">
                <strong>Method:</strong> {selectedRecipe.making}
              </p>
              <p className="text-gray-700">
                <strong>Difficulty:</strong> {selectedRecipe.difficulty}
              </p>
              <p className="text-gray-700">
                <strong>Nutrition:</strong> {selectedRecipe.nutrition}
              </p>
              <p className="text-gray-700">
                <strong>Meal Type:</strong> {selectedRecipe.mealType}
              </p>
              <p className="text-gray-700">
                <strong>Seasonal:</strong> {selectedRecipe.seasonal}
              </p>
            </div>

            {/* Default Description */}
            <p className="text-gray-500 italic mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              Cras venenatis euismod malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>

            {/* Like & Dislike Buttons */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  <FaThumbsUp />
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  <FaThumbsDown />
                </button>
              </div>

              {/* Watch YouTube Link and Close Button */}
              <div className="flex space-x-4">
                <a
                  href={selectedRecipe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Tutorial
                </a>

                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};

export default Recipe;
