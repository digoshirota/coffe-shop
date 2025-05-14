'use client';

import { useState } from 'react';

export default function BookTable() {
  const [form, setForm] = useState({
    person: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h3 className="text-xl font-bold">BOOK A TABLE</h3>
          <p className="text-sm text-gray-400">Book A Open Table For Your Happy Time Spent</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <select
            name="person"
            onChange={handleChange}
            className="bg-transparent border border-gray-500 px-4 py-2 rounded text-white"
          >
            <option value="">Person</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="4">4 People</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="bg-transparent border border-gray-500 px-4 py-2 rounded text-white"
          />

          <select
            name="time"
            onChange={handleChange}
            className="bg-transparent border border-gray-500 px-4 py-2 rounded text-white"
          >
            <option value="">Time</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">1:00 PM</option>
            <option value="18:00">6:00 PM</option>
          </select>

          <button
            type="submit"
            className="bg-[#e94f1d] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
