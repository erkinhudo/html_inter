import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./assets/style.css";
import quest from "./quizDocs/quest.js";
import questions from "./components/Questions";




class Html_inter extends Component {
    state = {
        questB : []
    };

 

  

    render() {
        return (
            <div className = "container">
             <div className="title" >HTML Interview Question</div>
             {this.state.questB.map(({question,answers,questionId}) => (
             <questions
                 question={question}
                 options={answers} 
                 key={questionId}
              /> )
             )} 
            </div>
        )
    }
}

ReactDOM.render(<Html_inter />,document.getElementById("root"));