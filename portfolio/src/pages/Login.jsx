import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) alert(error.message);
    else navigate('/dashboard'); // Take him to the messages
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Owner Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" />
        <button className="w-full bg-black text-white py-3 rounded-xl font-bold">Login</button>
      </form>
    </div>
  );
}