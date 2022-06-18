import React, {useState} from 'react';

function QuizStart(props) {
    
    return (
        <div>
            <select id="categories">
                <option value="Any category" defaultValue={"Any category"}>Any category</option>
                <option value="21">Sport</option>
                <option value="23">History</option>
                <option value="17">Science & Nature</option>
            </select>
            <select id="difficulty">
                <option value="Any difficulty" defaultValue={"Any difficulty"}>Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button id="quizStart" onClick={props.onClick}>Start</button>
        </div>
    );
}

export default QuizStart;