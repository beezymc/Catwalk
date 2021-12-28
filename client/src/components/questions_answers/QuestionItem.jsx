import React, { useState } from 'react';

const QuestionItem = ({ questionInfo }) => {
    const [questionHelpfullness, setquestionHelpfullness] = useState(questionInfo.question_helpfulness);
    const [isUpvoted, setUpvoted] = useState(false);

    const handleClick = () => {
        setquestionHelpfullness(questionHelpfullness + 1);
        setUpvoted(true);
    }

    return (
        <>
            <p>Q: {questionInfo.question_body}</p>
            <div>
                <span>Helpful? {isUpvoted ? <span>Yes({questionHelpfullness})</span> : <button onClick={handleClick}>Yes({questionHelpfullness})</button>}</span>
                <span> |  </span>
                <span><button>Add Answer</button></span>
            </div>
        </>
    )
}

export default QuestionItem;