// pages/index.tsx (assuming TypeScript file extension .tsx)
'use client'
import React, { useState } from 'react';

export default function Login() {
  const [user,setuser]=useState({
    name:"",
    password:""
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required 
        onChange={(e) => setuser({ ...user, name: e.target.value })} 
        />
        {/* <input type="email" name="email" placeholder="Email" required /> */}
        <input type="password" name="password" placeholder="Password" required 
         onChange={(e) => setuser({ ...user, password: e.target.value })}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
