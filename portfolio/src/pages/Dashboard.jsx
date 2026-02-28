import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      setSubmissions(data);
    };
    fetchSubmissions();
  }, []);

  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#b28a5d]">Customer Submissions:</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {submissions.map(sub => (
          <div key={sub.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className='space-y-4'>
              <p className="font-bold text-lg">Name: {sub.full_name}</p>
              <p className="text-gray-500 text-m">Email: {sub.email}</p>
              <p className="text-gray-500 text-m">Phone Number: {sub.phone_num}</p>
              <p className="mt-2 text-gray-700">Service: {sub.service}</p>
              <p className="mt-2 text-gray-700">Message: {sub.message}</p>
              <p className="mt-2 text-red-500 text-sm">{sub.status}</p>
            </div>
            <div className="text-right text-sm text-black-400">
              {new Date(sub.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}