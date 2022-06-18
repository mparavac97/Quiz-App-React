import React, {useEffect, useState} from 'react';
import QuizStart from './QuizStart';
import Question from './Question';

function Quiz() {
    const [fetchString, setFetchString] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    function getFetchStringParameters() {
        var difficultyParameter = document.getElementById("difficulty").value;
        var categoryParameter = document.getElementById("categories").options[document.getElementById("categories").selectedIndex].value;
        setFetchString('https://opentdb.com/api.php?amount=5&type=multiple');
        
        if (difficultyParameter !== "Any difficulty")
            setFetchString(prevState => (prevState.concat("&difficulty=" + difficultyParameter)));

        if (categoryParameter !== "Any category")
            setFetchString(prevState => (prevState.concat( "&category=" + categoryParameter))); 
    }
    
    const getQuestions = async() => {
        const tempQuestions = await fetch(fetchString);
        const tempQuestionsJson = await tempQuestions.json();

        setQuestions(tempQuestionsJson); 
    }

    useEffect(() => {
        if (fetchString !== null)
            getQuestions();
    }, [fetchString]
    );

    function handleAnswerOnClick(event) {
        if (questions.results[currentQuestion].correct_answer === event.target.value){
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.results.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return(
        <div>
        {questions === null ? (
            <QuizStart onClick={() => {getFetchStringParameters();}} />
            ) : (
                showScore ? (
                    <div> You scored {score} out of {questions.results.length}. </div>
                ) : (
                    <div> Question {currentQuestion + 1}/{questions.results.length}     Score: {score}/5
                    <Question data={questions.results[currentQuestion]} onClick={handleAnswerOnClick}/>
                </div>
                )
                
            )
            
        }   
        </div>
    )
}

export default Quiz;