import React, { useState, useEffect } from 'react';

const foodItems = [
  { id: 1, name: 'Pizza', image: 'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=' },
  { id: 2, name: 'Burger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilFQIZkn1KZCG_jZgSfUIr82isWO3vk8ZIg&s' },
  { id: 3, name: 'Sushi', image: 'https://c8.alamy.com/comp/2G8GWBB/fast-food-pizza-burger-fries-etc-2G8GWBB.jpg' },
  { id: 4, name: 'Salad', image: 'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg' }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000; // Speed in milliseconds (3 seconds)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, slideInterval);

    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-sm h-72">
        {/* Image */}
        <img
          src={foodItems[currentIndex].image}
          alt={foodItems[currentIndex].name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Food Name */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {foodItems[currentIndex].name}
        </h3>
      </div>
    </div>
  );
};

export default Slider;
