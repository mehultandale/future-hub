

/* Single answer button */
function AnswerOption(props) {
    function answerReceived() {
        console.log('aR', props);
    }
    return (
        <button onClick={answerReceived} >{ props.label }</button>
    );
}

/* Test (Quiz) page */
function Test() {
    return (
        <div>
            <p>Question 1</p>
            <AnswerOption label="Compiled" />
            <AnswerOption label="Interpreted" />
            <h5>You've learned 1 new thing today, good going!</h5>
        </div>
    );
}


export default Test;