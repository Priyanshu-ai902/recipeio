import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What type of recipes do you offer?",
            answer:
                "We offer a variety of recipes, including vegan, gluten-free, quick meals, and international cuisine.",
        },
        {
            question: "How do I search for recipes?",
            answer:
                "You can search for recipes using the search bar or by filtering them based on meal type and dietary restrictions.",
        },
        {
            question: "Can I submit my own recipes?",
            answer:
                "Yes, you can submit your own recipes through the 'Submit a Recipe' section on our website.",
        },
        {
            question: "Are the recipes suitable for beginners?",
            answer:
                "Yes, our recipes include step-by-step instructions and helpful tips, making them suitable for beginners.",
        },
        {
            question: "How can I save my favorite recipes?",
            answer:
                "You can save your favorite recipes by clicking the heart icon next to each recipe. This will add it to your favorites list for easy access later.",
        },
        {
            question: "Do you provide nutritional information for your recipes?",
            answer:
                "Yes, each recipe includes detailed nutritional information, including calories, protein, carbohydrates, and fat content to help you make informed choices.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto p-6 border rounded-lg border-gray-300 shadow-lg mt-3">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0"> {/* Margin for mobile */}
                <img
                    src="https://peasandcrayons.com/wp-content/uploads/2021/01/vegetarian-taco-salad-recipe-3.jpg"
                    alt="FAQ Image"
                    className="w-full h-auto object-cover rounded-lg" // Ensure the image is responsive
                />
            </div>

            {/* FAQ Section */}
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-center mb-4">FAQS</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b last:border-0 border-gray-200">
                        <div
                            className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 border-2 border-black m-2 p-4 rounded-full"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <span
                                className={`text-lg ${activeIndex === index ? "rotate-180" : ""
                                    } transition-transform duration-200 font-extrabold text-2xl`}
                            >
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="py-2 pl-4 m-2 p-4 bg-black rounded-full transition-all duration-200 ease-in-out">
                                <p className="text-white font-medium">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
