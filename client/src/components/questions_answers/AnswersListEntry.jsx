import React, { useState } from 'react';

const AnswersListEntry = ({ answer }) => {
    const [answerHelpfullness, setanswerHelpfullness] = useState(answer.helpfulness);
    const [isUpvoted, setUpvoted] = useState(false);
    const [isReported, setReported] = useState(false);

    const handleClick = () => {
        setanswerHelpfullness(answerHelpfullness + 1);
        setUpvoted(true);
    }

    const HandleReported = () => {
        setReported(true);
    }

return (
    <div>
       <p>A: {answer.body}</p> 
       <div>
           <span>by {answer.answerer_name}, {answer.date}</span>
           <span> | </span>
           <span> Helpful? {isUpvoted ? <span>Yes({answerHelpfullness})</span> : <button onClick={handleClick}>Yes({answerHelpfullness})</button>}</span>
           <span> | </span>
           <span>{isReported ? <span>Reported</span> : <button onClick={HandleReported}>Report</button>}</span>
       </div>
    </div>
)
}

export default AnswersListEntry;