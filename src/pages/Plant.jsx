import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line chart component from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoMdDownload } from "react-icons/io";
import { plant_info } from '../assets/assets';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Plant = () => {
  // States for sensors and flow meter data
  const [sensors, setSensors] = useState([true, false, true, true, false, true, false, true, false, true]); // 10 sensors
  const [flowMeterValue, setFlowMeterValue] = useState(12.34); // Flow meter value (float)
  const [timeData, setTimeData] = useState([]); // Data for the time-based graph
  const [flowValues, setFlowValues] = useState([]); // Values for the graph
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle dropdown visibility
  const [startDate, setStartDate] = useState(null); // Start date for report
  const [endDate, setEndDate] = useState(null); // End date for report

  // Function to render the color based on the sensor state
  const renderSensorColor = (isOn) => {
    return isOn ? 'bg-green-500' : 'bg-red-500';
  };

  // Update graph data every second (simulating a live flow meter value update)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new data coming in
      const newTime = new Date().toLocaleTimeString();
      const newFlowValue = (Math.random() * 20).toFixed(2); // Random value between 0 and 20
      setTimeData((prevData) => [...prevData, newTime].slice(-10)); // Keep only last 10 time points
      setFlowValues((prevValues) => [...prevValues, newFlowValue].slice(-10)); // Keep last 10 flow values
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Chart.js data configuration
  const data = {
    labels: timeData,
    datasets: [
      {
        label: 'Flow Meter Value (L/min)',
        data: flowValues,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Flow Meter Value vs Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Flow Value (L/min)',
        },
      },
    },
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () =>
  {
    setIsDropdownOpen((prev) => !prev);
    scrollTo(0,0)

  }
    

  // Handle report generation
  const generateReport = () => {
    if (startDate && endDate) {
      // Here, you can implement the logic to fetch and generate the report based on the dates
      console.log('Generating report from', startDate, 'to', endDate);
      // For now, simulate a report download
      alert('Report Generated');
    } else {
      alert('Please select both start and end dates');
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen relative flex flex-col justify-between">

      <div className='flex items-center mb-7  '>
        <div onClick={() => toggleDropdown()} className=' cursor-pointer rounded-full flex items-center gap-1 bg-cyan-800 text-white px-4 py-2'>
          <IoMdDownload />
          <p>Report</p>
        </div>
      </div>
      {/* Header Section with Title */}
      <div className="text-4xl font-bold mb-8">
        Plant Monitoring
      </div>

      <div className='flex justify-start gap-10'>

      {/* Sensor and Monitoring Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[50%]">
        {/* Sensor 1: System Online */}
        {
          plant_info.map((info,idx) => {
            return  <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-2">
            <div className="text-xl font-semibold text-center"> <p>{info.pump}</p></div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${renderSensorColor(sensors[idx])}`}
            >
              <p className="text-white font-bold text-lg">{sensors[idx] ? 'ON' : 'OFF'}</p>
            </div>
          </div>
          })
        }
        
        </div>


      {/* Graph Section */}
      <div className="w-[50%] bg-white p-6 rounded-lg shadow-lg ">
        <div className="text-xl font-semibold text-center mb-6">Flow Meter Monitoring</div>
        <Line data={data} options={options} />
      </div>
      </div>

      {/* Report Button and Date Picker moved to Bottom */}
      {/*<div className="flex justify-center mt-8">
        <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <button
            onClick={toggleDropdown}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Generate Report
          </button>

          

          
          

           {isDropdownOpen && (
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm font-semibold">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="border p-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="border p-2 rounded-md"
                  />
                </div>
              </div>
              <button
                onClick={generateReport}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4"
              >
                Download Report
              </button>
            </div>
          )} 
        </div>
      </div>*/}
      {isDropdownOpen && (

<div  className='absolute w-full top-0 left-0 bg-gray-900/80 h-screen'>

<div className="w-[40%] flex flex-col items-start justify-center  bg-white shadow-lg rounded-lg p-8 ml-6 mt-10">
              <div className="flex justify-center space-x-4">
                <div>
                  <label className="block text-sm font-semibold">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="border p-2 rounded-md mt-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className="border p-2 rounded-md mt-3"
                  />
                </div>
              </div>

              <div className='flex justify-center items-center gap-4'>

                <button onClick={() => setIsDropdownOpen(false)} className='text-[#0f2e56] border border- [#0f2e56] px-6 py-2 mt-4 rounded-lg cursor-pointer'>Close</button>

                <button
                  onClick={generateReport}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 "
                >
                  Download Report
                </button>

              </div>
              
            </div>

 </div>
)}
    </div>
  );
};

export default Plant;
