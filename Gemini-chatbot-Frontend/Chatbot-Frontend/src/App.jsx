import { useState } from 'react';
import './App.css';
import ChatInput from './components/ChatInput';
import ChatResponse from './components/ChatResponse';
import { fetchChatResponse } from './services/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setResponse(null);
    setLoading(true);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      console.error("Error in handleQuestionSubmit:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-5">
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} /> {/* Corrected prop */}
      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      <ChatResponse response={response} />
    </div>
  );
}

export default App;
