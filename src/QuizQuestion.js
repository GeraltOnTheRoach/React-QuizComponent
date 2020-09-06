import React, {Component} from 'react';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                  <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                  <ul>
                    <li>{this.props.quiz_question.answer_options[0]}</li>
                  </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
/*

9
Displaying prop data in a paragraph tag in the QuizQuestion component

Finally, in the first section's paragraph tag, display the  from this.props.

Now when you run npm start and visit localhost:3000 in a web browser, you should see the text of the first question and the text of one of the answer options.
*/