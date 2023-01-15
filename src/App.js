import React, {useState} from 'react'
import Data from './component/Data'
import SingleQuestions from './component/Questions';
function App() {
  const [questions, setQuestions] = useState(Data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((Question) => {
            return (
              <SingleQuestions key={Question.id} {...Question}></SingleQuestions>
            );
          })}
        </section>
      </div>
    </main>
  );
};
export default App;