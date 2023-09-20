import React from 'react';
import JudgeLogin from './Judge'; // Import your JudgeLogin component
import UserLogin from './UserLogin'; // Import your UserLogin component
import Header from './Header';  
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  
  const handleUser = () => navigate('/login');
  
  const handleJudge = () => navigate('/judge');
 
  const src2="https://media.istockphoto.com/id/1187142347/vector/law-and-justice-concept-gavel-of-the-judge-and-scales-of-justice-vector-silhouette-libra-and.jpg?s=612x612&w=0&k=20&c=c8tsmiahNZ4vc_HLUk0uE7IpSeYL1GDLeupzec61aac=";
  const src = "https://images.moneycontrol.com/static-mcnews/2022/08/law-justice-rep-770x433.jpg?impolicy=website&width=770&height=431";
  
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden   '>
      <Header/>
      <div
      className="h-screen w-full bg-cover bg-no-repeat flex   "
      style={{
        // backgroundImage: `url('${src}')`,
        
        // Replace with your image path
      }}
    >
        <div className=' w-1/2 flex justify-center items-center'>
            <div className='h-84 w-3/4 mb-24 flex  '>
            <div className='user w-1/2 bg-blue-100 mr-4 outline'>
                <img className='h-5/6 w-full' src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"></img>
                <button className='h-1/6 bg-blue-800 w-full text-white' onClick={handleUser} >User</button>
            </div>

            <div className='judge w-1/2 outline '>
                <img img className='h-5/6 w-full' src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"></img>
                <button className='h-1/6 bg-blue-800 w-full text-white' onClick={handleJudge}>Judge</button>
              </div>
              
            </div>
        </div>
        <div className=' w-1/2 bg-cover  bg-no-repeat  ' 
        style={{
            backgroundImage: `url('${src2}')`,
            
            // Replace with your image path
          }}
        ></div>
      {/* Your content goes here */}
    </div>
    </div>
    
  );
};

export default Home;