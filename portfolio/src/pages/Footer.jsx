import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest">ZHIMOVE</h2>
          <p className="text-gray-400 text-sm mt-2">Junk Removal & Moving</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">(917) 445-2681</p>
          <p className="text-gray-400 text-sm">Serving all of Brooklyn & NYC</p>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} ZHIMOVE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}