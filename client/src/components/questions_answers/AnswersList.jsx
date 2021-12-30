import React, { useState, useEffect } from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';


const AnswersList = ({ answers }) => {
  var answersArr = Object.entries(answers).map(item => item[1]);
  var sorted = answersArr.sort((a, b) => b['helpfulness'] - a['helpfulness']);
  const [twoAnswers, setTwoAnswers] = useState(sorted.slice(0, 2));
  var count = 2;

 //refactor

  const handleClick = () => {
    count += 1;
    setTwoAnswers(sorted.slice(0, count))
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