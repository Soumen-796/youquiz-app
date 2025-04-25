// src/QuizApp.js
import React, { useState } from 'react';
import YouQuizFilters from './YouQuizFilters';

const QuizApp = () => {
  const [filters, setFilters] = useState({
    country: 'India',
    state: 'Andhra Pradesh',
    language: 'Bengali',
    subject: 'Mathematics',
    classLevel: 'Grade 10',
    exam: 'Optional',
  });

  const [questions, setQuestions] = useState([]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const onGenerate = async (count) => {
    const prompt = `Generate ${count} multiple-choice quiz questions with answers and explanations for:
Country: ${filters.country}
State: ${filters.state}
Language: ${filters.language}
Subject: ${filters.subject}
Class: ${filters.classLevel}
Exam: ${filters.exam}`;

    try {
      const response = await fetch('https://eopfpf1efz3phpc.m.pipedream.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const result = await response.json();
      console.log('Generated questions:', result);

      setQuestions(result); // Replace this if your Pipedream returns differently
      localStorage.setItem('youquizQuestions', JSON.stringify(result));
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      alert('Error generating quiz. Please check your connection.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <YouQuizFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onGenerate={onGenerate}
      />

      <section className="px-4 py-4">
        <h2 className="text-lg font-bold mb-2">Questions</h2>
        {questions.length === 0 && <p className="text-sm text-gray-500">No questions yet.</p>}

        <ul className="space-y-4">
          {questions.map((q, idx) => (
            <li key={idx} className="border p-3 rounded">
              <p className="font-semibold">{idx + 1}. {q.question}</p>
              <ul className="list-disc list-inside text-sm mt-1">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-green-600">
                ✅ Answer: {q.answer}
              </p>
              <p className="text-sm text-blue-600">
                💡 {q.explanation}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default QuizApp;
