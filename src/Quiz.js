import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {quiz_position: 1};
  }

  handleResetClick() {
    this.setState({quiz_position: 1});
  }

  showNextQuestion() {
    this.setState({quiz_position: this.state.quiz_position + 1});
  }

  render() {
    const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;
    // ugly
    // small improvement:  https://reactjs.org/docs/conditional-rendering.html
    if (isQuizEnd) {
      return (

        <div>

        <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />

        </div>
      );
    } else {
      return (

        // tricky, 1.9, to know not to use this.quizData
        <div>

        {/* 2.7
         https://reactjs.org/tutorial/tutorial.html#passing-data-through-props */}
        {/*<QuizQuestion 
          showNextQuestionHandler={this.showNextQuestion.bind(this)}
          quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>*/}

          <div className='QuizQuestion'> {quizData.quiz_questions[0].instruction_text} </div>

        </div>
      );
    }
  }

}

export default Quiz;
