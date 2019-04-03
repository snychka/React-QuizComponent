import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {incorrectAnswer: false};
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      this.setState({incorrectAnswer: false});
    } else {
      this.setState({incorrectAnswer: true});
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>
            {/* instruction text goes here */}
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {/* quiz question button logic goes here */}
            {/*<li>{this.props.quiz_question.answer_options[0]}</li>*/}
            {this.props.quiz_question.answer_options.map( (a,i) => 
              <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={i} button_text={a}/>
            )}

          </ul>
        </section>
        {this.state.incorrectAnswer ? 
          <p className='error'>Sorry, that's not right</p> : null
        }
      </main>
    );
  }

}

export default QuizQuestion;
