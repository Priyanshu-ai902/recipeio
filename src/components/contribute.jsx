// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Contribute = () => {

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         ingredients: '',
//         steps: '',
//         imageUrl: '',
//         // Add more fields as needed (e.g., cooking time, servings, etc.)
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here (e.g., save to database, update state, etc.)
//         console.log(formData);
//         setFormData({
//             title: '',
//             description: '',
//             ingredients: '',
//             steps: '',
//             imageUrl: '',
//         });
//         setIsModalOpen(false); // Close the modal after submission
//     };

//     return (
//         <div>
//             <nav className="flex items-center justify-between p-5 bg-transparent border-b-2 border-black py-2 relative z-100 
//             bg-slate-300">
//                 <div className="rounded-full flex gap-2">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51uyzBl1_6QnPPORZTKqlKU5yGN7-3cS0Og&s" alt="WP Tasty Logo" className=" w-10 h-10" />
//                     <h1 className="text-3xl mb-2 text-green-900">
//                         Recipe
//                         <span className="text-green-500">Realm</span>
//                     </h1>
//                 </div>


//                 <ul className="flex gap-10 list-none ">
//                     <li className="relative group">
//                         <Link
//                             to="/"
//                             className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700"
//                         >
//                             HOME
//                         </Link>
//                     </li>
//                     <li className="relative group">
//                         <Link
//                             to="/recipe"
//                             className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700"
//                         >
//                             RECIPE
//                         </Link>
//                     </li>
//                     <li className="relative group">
//                         <Link
//                             to="/contribute"
//                             className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700"
//                         >
//                             CONTRIBUTE
//                         </Link>
//                     </li>
//                     <li className="relative group">
//                         <Link
//                             to="/tables"
//                             className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700"
//                         >
//                             Table-Talks
//                         </Link>

//                     </li>
//                     <li>
//                         <Link
//                             to="/about"
//                             className="font-bold text-lg text-black p-2 transition-all duration-300 hover:text-green-700"
//                         >
//                             About
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//             <div className="relative h-screen -z-50 flex items-center justify-center bg-gray-300 bg-opacity-70">
//                 <img
//                     className="w-100 h-100 object-cover opacity-80"
//                     src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x512_center,f_auto,q_auto:best/newscms/2024_28/2067113/keep-it-zesty-chicken-shawarma-2x1-mc-240712.jpg"
//                     alt="Delicious Food"
//                 />

//                 {/* Text Overlay with Background */}
//                 <div className="absolute bg-black bg-opacity-90 p-8 rounded-lg">
//                     <h1 className="text-5xl font-semibold drop-shadow-lg text-center text-white">
//                         Join Us in <span className="font-extrabold text-red-500">Sharing</span> Your{" "}
//                         <span className="font-extrabold text-blue-500">Favorite Recipes,</span>
//                         <br />
//                         <span className="text-green-400">Contribute to Our Kitchen!</span>

//                     </h1>
//                 </div>

//             </div>


//             <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="absolute bottom-10 right-10 bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
//             >
//                 Add Recipe
//             </button>

//             {/* Modal for Adding Recipe */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                         <h2 className="text-xl font-bold mb-4">Add Your Recipe</h2>
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 placeholder="Recipe Title"
//                                 value={formData.title}
//                                 onChange={handleInputChange}
//                                 className="border p-2 mb-4 w-full"
//                                 required
//                             />
//                             <textarea
//                                 name="description"
//                                 placeholder="Recipe Description"
//                                 value={formData.description}
//                                 onChange={handleInputChange}
//                                 className="border p-2 mb-4 w-full"
//                                 required
//                             />
//                             <textarea
//                                 name="ingredients"
//                                 placeholder="Ingredients"
//                                 value={formData.ingredients}
//                                 onChange={handleInputChange}
//                                 className="border p-2 mb-4 w-full"
//                                 required
//                             />
//                             <textarea
//                                 name="steps"
//                                 placeholder="Cooking Steps"
//                                 value={formData.steps}
//                                 onChange={handleInputChange}
//                                 className="border p-2 mb-4 w-full"
//                                 required
//                             />
//                             <input
//                                 type="url"
//                                 name="imageUrl"
//                                 placeholder="Image URL"
//                                 value={formData.imageUrl}
//                                 onChange={handleInputChange}
//                                 className="border p-2 mb-4 w-full"
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                         <button
//                             onClick={() => setIsModalOpen(false)}
//                             className="mt-4 text-gray-500 hover:text-red-500"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             )}


//         </div>
//     )
// }

// export default Contribute


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contribute = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        steps: '',
        imageUrl: '',
        Cuisine: '',
        Serving: '',
        Duration: '',
        Difficulty: '',
        Occasion: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipes([...recipes, formData]);
        setFormData({
            title: '',
            description: '',
            ingredients: '',
            steps: '',
            imageUrl: '',
            Cuisine: '',
            Serving: '',
            Duration: '',
            Difficulty: '',
            Occasion: '',
        });
        setIsModalOpen(false);
    };

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
            <div className="relative h-screen -z-50 flex items-center justify-center bg-gray-300 bg-opacity-70">
                <img
                    className="w-100 h-100 object-cover opacity-80"
                    src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x512_center,f_auto,q_auto:best/newscms/2024_28/2067113/keep-it-zesty-chicken-shawarma-2x1-mc-240712.jpg"
                    alt="Delicious Food"
                />
                <div className="absolute bg-black bg-opacity-90 p-8 rounded-lg">
                    <h1 className="text-5xl font-semibold drop-shadow-lg text-center text-white">
                        Join Us in <span className="font-extrabold text-red-500">Sharing</span> Your{" "}
                        <span className="font-extrabold text-blue-500">Favorite Recipes,</span>
                        <br />
                        <span className="text-green-400">Contribute to Our Kitchen!</span>
                    </h1>
                </div>
            </div>

            {/* Modal for Adding Recipe */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <h2 className="text-xl font-bold mb-4">Add Your Recipe</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Recipe Title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Recipe Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <textarea
                                name="ingredients"
                                placeholder="Ingredients"
                                value={formData.ingredients}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <textarea
                                name="steps"
                                placeholder="Cooking Steps"
                                value={formData.steps}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="Image URL"
                                value={formData.imageUrl}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            {/* Additional questions */}
                            <input
                                type="text"
                                name="Cuisine"
                                placeholder="What type of cuisine?"
                                value={formData.Cuisine}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="Serving"
                                placeholder="How many servings?"
                                value={formData.Serving}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="Duration"
                                placeholder="Total cooking time?"
                                value={formData.Duration}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="Difficulty"
                                placeholder="What skill level is required?"
                                value={formData.Difficulty}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="Occasion"
                                placeholder="What occasion is this recipe suitable for?"
                                value={formData.Occasion}
                                onChange={handleInputChange}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full"
                            >
                                Submit
                            </button>
                        </form>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 text-gray-500 hover:text-red-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Displaying All Submitted Recipes */}
            <div className="mt-10 p-5 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-4 text-green-700">Submitted Recipes</h2>
                {recipes.length === 0 ? (
                    <p className="text-center text-gray-500">No recipes submitted yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg shadow hover:shadow-xl transition-shadow">
                                {/* Image at the top */}
                                <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4 flex flex-col sm:flex-row justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                                        <p className="mb-1"><strong>Description:</strong> {recipe.description}</p>
                                        <p className="mb-1"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                        <p className="mb-1"><strong>Steps:</strong> {recipe.steps}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="mb-1"><strong>Cuisine:</strong> {recipe.Cuisine}</p>
                                        <p className="mb-1"><strong>Servings:</strong> {recipe.Serving}</p>
                                        <p className="mb-1"><strong>Duration:</strong> {recipe.Duration}</p>
                                        <p className="mb-1"><strong>Difficulty:</strong> {recipe.Difficulty}</p>
                                        <p className="mb-1"><strong>Occasion:</strong> {recipe.Occasion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105"
                >
                    Add Recipe
                </button>
            </div>



        </div>
    );
};

export default Contribute;
