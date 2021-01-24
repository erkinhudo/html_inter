import React, {useState} from "react";

const Questions = ({question, options}) => {
const [answer,setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
          }}
        >
         Answer
        </button>
      ))}
    </div>
  );
};

export default Questions;
