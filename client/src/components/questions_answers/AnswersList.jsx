import React, { useState } from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';


const AnswersList = ({ answers }) => {
    var answersArr = Object.entries(answers).map(item => item[1]);
    var sorted = answersArr.sort((a, b) => b['helpfulness'] - a['helpfulness']);
    const [answersCount, setAnswersCount] = useState(2);
    const [twoAnswers, setTwoAnswers] = useState(sorted.slice(0, 2));

    //refactor
    const handleClick = () => {
        setAnswersCount(answersCount += 2);
        setTwoAnswers(sorted.slice(0, answersCount))
    }

    return (
       
        <ul> {
            twoAnswers.map(item => (
                <AnswersListEntry answer={item} />
            ))
        }
        <button onClick={handleClick}>Load More Answers</button>
        </ul>
    )

}

export default AnswersList;