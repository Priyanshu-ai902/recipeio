import React from 'react';

const Slider = () => {

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

    return (
        <section className="py-12 px-5 md:px-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
      <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}

                Most Preferable Dishes
      <hr className="border-t-2 border-black w-3/4 mx-auto my-4" />{" "}

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
    );
};

export default Slider;
