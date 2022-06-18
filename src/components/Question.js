

function Question(props) {
    const allAnswers = [];
    function makeAnswersArray (props) {
        props.data.incorrect_answers.map(answer => allAnswers.push(answer));
        allAnswers.push(props.data.correct_answer);
    }

    function getRandomAnswer () {
        const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
        const index = allAnswers.indexOf(randomAnswer);
        if (index > -1) {
            allAnswers.splice(index, 1);
        }
        return randomAnswer;
    }

    function getAnswerButtons() {
        let tempAnswer;
        let tempAnswers = [];
        for(var i = 0; i < 4; i++) {
            tempAnswer = getRandomAnswer();
            tempAnswers.push(<button onClick={props.onClick} value={tempAnswer} key={i}>{tempAnswer}</button>);
        }
        return tempAnswers;
    }

    return(
        <div> {makeAnswersArray(props)}
            <div>{props.data.question}</div>
            {getAnswerButtons()}
        </div>
    )
}

export default Question;