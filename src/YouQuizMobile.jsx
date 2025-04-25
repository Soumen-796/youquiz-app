import React, { useState } from 'react';
import YouQuizFilters from './YouQuizFilters'; // Ensure this exists
import './App.css'; // Or './styles.css'

const YouQuizMobile = () => {
  const [filters, setFilters] = useState({
    country: 'India',
    state: 'Andhra Pradesh',
    board: 'CBSE',
    language: 'English',
    subject: 'Mathematics',
    classLevel: 'Grade 10',
    exam: 'Optional',
  });

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = (count) => {
    setLoading(true);

    setTimeout(() => {
      const dummyQuestions = Array.from({ length: count }, (_, i) => ({
        question: `Dummy Question ${i + 1}: What is ${i + 2} + ${i + 3}?`,
        options: ['1', '2', '3', `${i + 5}`],
        answer: `${i + 5}`,
        explanation: `Because ${i + 2} + ${i + 3} = ${i + 5}`,
      }));

      setQuestions(dummyQuestions);
      localStorage.setItem('quizQuestions', JSON.stringify(dummyQuestions));
      setLoading(false);
    }, 1000);
  };

  const saveQuizDataToFile = () => {
    const data = questions;
    const filename = 'youquiz_data.json';
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container p-4">
      <h1 className="text-2xl font-bold text-center mb-4">🎯 YouQuiz App</h1>

      <YouQuizFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onGenerate={handleGenerate}
      />

      {loading && <p className="text-center mt-4">Loading dummy questions...</p>}

      {!loading && questions.length > 0 && (
        <section className="mt-6 px-4 py-4 bg-white shadow-md rounded max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-2">✅ First Question</h2>
          <p className="text-base mb-2">{questions[0].question}</p>
          <ul className="list-disc list-inside">
            {questions[0].options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-green-600">
            <strong>Answer:</strong> {questions[0].answer}
          </p>
          <p className="text-xs text-gray-500">{questions[0].explanation}</p>

          <button
            onClick={saveQuizDataToFile}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ⬇️ Save Quiz Data
          </button>
        </section>
      )}
    </div>
  );
};

export default YouQuizMobile;
