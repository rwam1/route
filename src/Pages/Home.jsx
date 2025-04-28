import React, { useEffect } from "react";


const Home = () => {
   useEffect(()=>{
     localStorage.setItem('name','nikhil')
   },[])
  return (
    <div>
      Home
    
    </div>
  );
};

export default Home;
