import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tables = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingRecipes = [
    {
      title: "Sasta maggi",
      description: "This recipe is going viral on social media.",
      image: "https://www.thereciperebel.com/wp-content/uploads/2023/12/spaghetti-carbonara-TRR-12-of-28.jpg",
    },
    {
      title: "Viral Recipe 2",
      description: "This recipe is trending on Instagram.",
      image: "https://media.theeverygirl.com/wp-content/uploads/2022/08/the-everygirl-social-viral-tiktok-recipes-2.jpg",
    },
    {
      title: "shiro",
      description: "Everyone is talking about this recipe.",
      image: "https://www.eatingwell.com/thmb/WQJJameVA8qPRJ-ai6v2w7MKHME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7787187-c1ba3239e9e1421982fcc2092a87b772.jpg",
    },
  ];

  const recentRecipes = [
    {
      title: "Spicy Tacos",
      image: "https://carveyourcraving.com/wp-content/uploads/2020/09/Easy-vegetarian-tacos.jpg",
    },
    {
      title: "Dynamic Pizza",
      image: "https://www.cookingclassy.com/wp-content/uploads/2017/08/margherita-pizza-9.jpg",
    },
    {
      title: "Giga Cake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e3jvfcBxEpS8FT02v8nUz3snlOrP-zOPVXkuf6WniC4SKs7fzIahmuw84uLI39qGAIQ&usqp=CAU",
    },
    {
      title: "fit salad",
      image: "https://cookieandkate.com/images/2021/05/caesar-salad-in-bowl.jpg",
    },
    {
      title: "Churma rice",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkGCErt3GApm5_IP64RpDm_rSWx_fiBDTBhYTNk8gr6N1LggFuiv0Y65dy61mR_s4eBA&usqp=CAU",
    },
    {
      title: "Sasta maggi",
      image: "https://www.thereciperebel.com/wp-content/uploads/2023/12/spaghetti-carbonara-TRR-12-of-28.jpg",
    },
    {
      title: "pudding",
      image: "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg",
    },
    {
      title: "shiro",
      image: "https://www.eatingwell.com/thmb/WQJJameVA8qPRJ-ai6v2w7MKHME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7787187-c1ba3239e9e1421982fcc2092a87b772.jpg",
    },
    {
      title: "Roti ki sabji",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttweu6R_PBz9wIkgLhYnKx-xJ3FGiYONdXZGA7J4NSEhPc53wGZCG-ox5N7ZD_l7tPvY&usqp=CAU",
    },
    {
      title: "Dal bati",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz11rLdyY8sJdZJJNSJcPiK5KfH-GVCpx69R1b5Cj5Z0ut6CqEY0aMx0wOaUdGGarN5pU&usqp=CAU",
    },
  ];

  const blogs = [
    {
      title: "Blog Post 1",
      excerpt: "This is a summary of the blog post 1.",
      image: "https://www.eatingwell.com/thmb/8igrklp0Wlt9nkeNGawc9vBC9Uc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-eggplant-parmesan-2000-ce486c66cbfe43c6bdcb23f3b799191b.jpg",
    },
    {
      title: "Blog Post 2",
      excerpt: "This is a summary of the blog post 2.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoWgNAiiuFcPsdH3gmsihAI0TbWERQ4WriFEPhdX443bjwhDfk7l8sizc2sjf5YnTq-c&usqp=CAU",
    },
    {
      title: "Blog Post 3",
      excerpt: "This is a summary of the blog post 3.",
      image: "https://images.squarespace-cdn.com/content/v1/58d1f7308419c23d328cdb22/c45f540a-8889-441a-8b4c-c6a359534b62/Ratatouille",
    },
    {
      title: "Blog Post 4",
      excerpt: "This is a summary of the blog post 4.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VcijftbKSaCeFHDjEtmd83nJu6jxGcRZT_Uk3P6ekpyYI-iWpI-H17x9OP40ktZQwLo&usqp=CAU",
    },
    {
      title: "Blog Post 5",
      excerpt: "This is a summary of the blog post 5.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e3jvfcBxEpS8FT02v8nUz3snlOrP-zOPVXkuf6WniC4SKs7fzIahmuw84uLI39qGAIQ&usqp=CAU",
    },
    {
      title: "Blog Post 6",
      excerpt: "This is a summary of the blog post 6.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bgJN_Ny1LPy1GwviD3IrD5Hg-eCEVp0TzOWt7HttnkPh5Cq2PE_ixxscyol2wHtkgIg&usqp=CAU",
    },
    {
      title: "Blog Post 7",
      excerpt: "This is a summary of the blog post 7.",
      image: "https://veenaazmanov.com/wp-content/uploads/2020/05/Homemade-Croissants-Recipe60.jpg",
    },
    {
      title: "Blog Post 8",
      excerpt: "This is a summary of the blog post 8.",
      image: "https://www.thereciperebel.com/wp-content/uploads/2023/12/spaghetti-carbonara-TRR-12-of-28.jpg",
    },
    {
      title: "Blog Post 9",
      excerpt: "This is a summary of the blog post 9.",
      image: "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg",
    },
    {
      title: "Blog Post 10",
      excerpt: "This is a summary of the blog post 10.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIhMleL0iXU6r0Vn-zoV-gN_nYpJR_22ly2Y3WPdDNDigzBMzX_jRcWiUbHUBXIWMdjg&usqp=CAU",
    },
  ];

  // Auto-slide for trending recipes
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === trendingRecipes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, [currentIndex, trendingRecipes.length]);

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

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
      <section className="py-12 px-5 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">
          Trending Recipes
        </h2>
        <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          {/* Slider Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {trendingRecipes.map((recipe, index) => (
              <div
                key={index}
                className="min-w-full h-full flex-shrink-0 flex justify-center items-center bg-white shadow-lg rounded-lg relative"
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex flex-col justify-center items-center text-center text-white p-5">
                  <h3 className="text-4xl md:text-5xl font-extrabold">{recipe.title}</h3>
                  <p className="mt-4 text-lg md:text-2xl">{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {trendingRecipes.map((_, index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-full ${index === currentIndex ? 'bg-green-800' : 'bg-gray-400'
                  } cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Recipes Section with Auto-scroll */}
      <section className="py-12 px-5 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Recently Added Recipes
        </h2>
        <div className="overflow-hidden">
          <div
            id="scrollWrapper"
            className="flex space-x-5 animate-scroll w-full"
            style={{ whiteSpace: 'nowrap' }}
          >
            {recentRecipes.concat(recentRecipes).map((recipe, index) => (
              <div
                key={index}
                className="w-40 flex-shrink-0 bg-white rounded-lg shadow-lg p-3"
              >
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <h3 className="text-lg font-semibold mt-2 text-gray-800 text-center">{recipe.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Blog or Reviews Section with Pagination */}
      <section className="py-12 px-5 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
          Blogs and Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-lg ${index + 1 === currentPage ? 'bg-purple-800 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tables;
