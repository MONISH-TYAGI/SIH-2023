import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ isOpen, onClose,availCases ,setAvail,id}) => {
  console.log("id"+id)
  const [date, setDate] = useState(new Date());
  const deleteCase=(id)=>{
    console.log('hello'+id)
    console.log(JSON.stringify(availCases))
    const newAvail=availCases.filter((item)=>item.id!==id)
    setAvail([...newAvail])
    onClose()
    
  }
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 flex items-center justify-center z-10`}
    >
      <div className="bg-white w-96 h-96 border border-gray-300 p-4 rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Close
          </button>
        </div>
        <Calendar onChange={setDate} value={date} />
        <div className='w-full flex justify-center'>
        <button
            onClick={()=>deleteCase(id)}
            className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Done
          </button>
          </div>
      </div>
    </div>
  );
};

export default CalendarComponent;