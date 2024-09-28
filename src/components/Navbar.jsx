import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import RecipeCard from "./card";
import { Link } from "react-router-dom";
import FAQ from "./faq";
import Slider from "./move";

const Navbar = () => {
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email) {
            setShowModal(true);
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full ">
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

            <div className="section-1 relative h-screen -z-50">
                <img
                    className="w-full h-full object-cover"
                    src="https://static.vecteezy.com/system/resources/previews/020/115/455/non_2x/food-background-breakfast-with-yogurt-granola-or-muesli-strawberries-banner-image-for-website-photo.jpg"
                    alt="Delicious Food"
                />

                <h1 className="absolute text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold drop-shadow-lg right-5 top-[15%] text-right">
                    From Our <span className="font-extrabold">Kitchen</span> to{" "}
                    <span className="font-extrabold">Yours,</span>
                    <br />
                    <span>Delicious Recipes Await</span>
                </h1>

                <div className="absolute right-0 p-5 md:p-10 w-[90vw] md:w-[50vw] top-[55%] transform -translate-y-1/2">
                    <p className="text-sm md:text-base lg:text-lg text-black font-semibold drop-shadow-lg text-center">
                        At OurSite, we celebrate the art of cooking with a
                        curated collection of delicious recipes for every skill level. Whether
                        you're an experienced chef or just starting out, our step-by-step
                        guides and expert tips will inspire you to create memorable meals and
                        share joyful moments at your table.
                    </p>
                </div>

                <div className="absolute right-0 p-5 md:p-10 w-[90vw] md:w-[50vw] top-[80%] transform -translate-y-1/2">
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-6">What We Offer:</h3>
                    <ul className="list-disc list-inside text-base md:text-lg lg:text-xl">
                        <li className="text-sm md:text-base lg:text-lg">Step-by-step recipes for all skill levels</li>
                        <li className="text-sm md:text-base lg:text-lg">Expert cooking tips and techniques</li>
                        <li className="text-sm md:text-base lg:text-lg">Seasonal and themed recipe collections</li>
                        <li className="text-sm md:text-base lg:text-lg">Community-driven content and feedback</li>
                    </ul>
                </div>
            </div>



            <Slider />

            <RecipeCard />

            <FAQ />

            <footer className="bg-gradient-to-br from-white w-full p-8 text-black flex flex-col md:flex-row justify-between items-start shadow-lg border border-orange-500 mt-5">
                <div className="w-full md:w-1/2 mb-5 md:mb-0">
                    <div className="flex flex-col md:flex-row items-center bg-white p-4 md:p-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51uyzBl1_6QnPPORZTKqlKU5yGN7-3cS0Og&s"
                            alt="logo"
                            className="w-24 h-auto mr-0 md:mr-8 rounded-lg"
                        />
                        <div>
                            <h1 className="text-3xl md:text-5xl text-green-900">Recipe<span className="text-green-500">Realm</span></h1>
                            <h2 className="text-xl md:text-3xl text-black">Ready to cook?</h2>
                            <h2 className="text-md md:text-lg text-black">Sign Up for more</h2>
                        </div>
                    </div>

                    <form className="flex flex-col md:flex-row items-center mb-4 space-y-3 md:space-y-0 md:space-x-3" onSubmit={handleSignIn}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow w-full md:w-2/3 h-12 border border-gray-600 bg-gray-800 text-white rounded placeholder-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="w-full md:w-auto bg-green-500 hover:bg-green-900 text-white h-12 rounded font-bold">
                            Sign In
                        </button>
                    </form>

                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
                                <h2 className="text-2xl font-bold text-gray-800">Thank you for joining us!</h2>
                                <p className="text-gray-600">We have received your email: <strong>{email}</strong></p>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-green-500 hover:bg-green-900 text-white py-2 px-4 rounded font-bold"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mt-4 flex justify-center space-x-4">
                        <span className="font-bold text-xl">Let's be friends!</span>
                        <div className="flex space-x-4">
                            {/* Social Media Icons */}
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="Logo 1" className="w-8 h-8 md:w-16 md:h-16" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlljeD548owT6jZYHVP0C6NWjHFsr59-eRg&s" alt="Logo 2" className="w-8 h-8 md:w-16 md:h-16" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwFn_oeoe63A0S_xrFNBQpM6pgJx7Yu5jLQ&s" alt="Logo 2" className="w-8 h-8 md:w-16 md:h-16" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihbpQVgjaY8lSdZbJIEqkJbwWep8DGkiExQ&s" alt="Logo 2" className="w-8 h-8 md:w-16 md:h-16" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2 mt-5 md:mt-0">
                    <div className="mb-4 md:mb-0">
                        <p className="text-lg font-semibold">RECIPES</p>
                        <p className="text-lg font-semibold">IN THE KITCHEN</p>
                        <p className="text-lg font-semibold">QUICK & EASY</p>
                        <p className="text-lg font-semibold">BUYING GUIDES</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">About Us</p>
                        <p className="text-lg font-semibold">Terms and Services</p>
                        <p className="text-lg font-semibold">Privacy Policy</p>
                        <p className="text-lg font-semibold">Contact Us</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Navbar;
