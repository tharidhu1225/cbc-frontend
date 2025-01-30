import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    
  };

  return (
    <div className='w-[390px] border border-black'>
        
        <div className='w-36 h-36 bg-blue-600'> </div>
      
    <div className='w-36 h-36 bg-yellow-600 fixed right-[10px] bottom-[10px]'>
  
  </div>
  
  </div>
    
  );
}
