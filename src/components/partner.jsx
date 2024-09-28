import React from "react";

const partners = [
  {
    id: 1,
    name: "John Doe",
    title: "Co-Founder & Businessman",
    image: "https://thumbs.dreamstime.com/b/professional-business-woman-smiling-outdoor-close-up-portrait-55472495.jpg", // Replace with actual image URLs
    description: "John has been a leader in the industry for over 10 years, spearheading multiple successful ventures."
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CEO & Entrepreneur",
    image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    description: "Jane is the CEO of several innovative companies, driving growth and innovation in the tech sector."
  },
  {
    id: 3,
    name: "Michael Williams",
    title: "Investor & Philanthropist",
    image: "https://www.shutterstock.com/image-photo/handsome-smiling-confident-businessman-portrait-600nw-217671772.jpg",
    description: "Michael focuses on empowering startups and giving back to the community through philanthropy."
  },
  {
    id: 4,
    name: "John Doe",
    title: "Co-Founder & Businessman",
    image: "https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=", // Replace with actual image URLs
    description: "John has been a leader in the industry for over 10 years, spearheading multiple successful ventures."
  },
  {
    id: 5,
    name: "Jane Smith",
    title: "CEO & Entrepreneur",
    image: "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    description: "Jane is the CEO of several innovative companies, driving growth and innovation in the tech sector."
  },
  {
    id: 6,
    name: "Michael Williams",
    title: "Investor & Philanthropist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWav-KWCI89vw6IR7HMt8kFom_qEngP0Ahg&s",
    description: "Michael focuses on empowering startups and giving back to the community through philanthropy."
  },
];

const PartnerCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            className="w-full h-64 object-cover"
            src={partner.image}
            alt={partner.name}
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">{partner.name}</h2>
            <p className="text-gray-600 font-semibold mb-2">{partner.title}</p>
            <p className="text-gray-500">{partner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;