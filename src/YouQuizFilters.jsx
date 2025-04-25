import React from 'react';

const YouQuizFilters = ({ filters, onFilterChange, onGenerate }) => {
  return (
    <div className="filter-section px-4 py-4 max-w-md mx-auto bg-gray-100 rounded-lg mt-4 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Select Quiz Filters</h2>

      {/* Country */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          name="country"
          value={filters.country}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* State */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          value={filters.state}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Board */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Board</label>
        <input
          type="text"
          name="board"
          value={filters.board}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Language */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Language</label>
        <input
          type="text"
          name="language"
          value={filters.language}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Subject */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={filters.subject}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Class */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Class</label>
        <input
          type="text"
          name="classLevel"
          value={filters.classLevel}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Exam */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Specific Exam</label>
        <input
          type="text"
          name="exam"
          value={filters.exam}
          onChange={onFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => onGenerate(5)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Generate 5 Dummy Questions
        </button>
      </div>
    </div>
  );
};

export default YouQuizFilters;
