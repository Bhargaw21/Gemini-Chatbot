import React from 'react'

function ChatInput({onSubmit}) {
  
    const handleSubmit = (e) => {
        e.preventDefault();
       if(question.trim()){
        onSubmit(question);
        setQuestion('');
       }
    }
    const [question, setQuestion] = React.useState('')


  return (
   <div className='container my-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='question'>Ask a Question</label>
            <input 
               type="text"
                className='form-control'
                id='question'
                placeholder='Enter your question here'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
        </div>

        <button type='submit' className='btn btn-primary mt-2 rounded'>Submit</button>

      </form>

   </div>
  )
}

export default ChatInput