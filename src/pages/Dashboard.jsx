import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { device_info } from '../assets/assets';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle click and navigate to the Plant screen
  const handleItemClick = (item) => {
    // Check if item is "ECO023_ID" and navigate to /plant
    // if (item === 'ECO023_ID') {
      navigate(`/plant/${item}`);
    // }
    // You can add more conditions for other items if needed
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-4 sm:px-6 md:px-8 lg:px-[3%] min-h-screen bg-[#150f7c'>
      {device_info.map((item, index) => (
        <div
          key={index}
          className='text-[#150f7c] bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-100/95 cursor-pointer '
          onClick={() => handleItemClick(item)} // Add click handler
        >
          <p className=' text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center'>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
