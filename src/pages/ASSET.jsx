import React from 'react';

const ASSET = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 px-4 sm:px-6 md:px-8 lg:px-[3%] min-h-screen bg-blue-100'>
      {[
        'ECO023_ID',
        'EO019_SG',
        'Water meter 1',
        'Water meter 2',
        'Water meter 3',
        'Water meter 4',
        'Water meter 5',
        'Water meter 6',
        'Water meter 7',
        'Water meter 8',
        'Water meter 9',
        'Water meter 10',
        'Water meter 11',
        'Water meter 12',
        'Water meter 13',
        'Water meter 14',
        'Water meter 15',
      ].map((item, index) => (
        <div key={index} className='bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all hover:shadow-xl'>
          <p className='text-[#150f7c] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center'>
            {item}
          </p>
        </div>
      ))}
    </div>
    
  );
};

export default Dashboard;
