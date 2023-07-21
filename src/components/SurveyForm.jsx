import React, { useState } from 'react'
import Form from './Form';
import ThankYouPage from './ThankYou';
const SurveyForm = () => {
    const [welcome, setwelcome] = useState(true)
    const [thankYou, setThankYou] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const totalQuestions = 5;

    const [values, setValues] = useState({
        satisfaction: "",
        fairness: "",
        purchase: "",
        recomendation: "",
        service: ""
    })

    const getValue = (e) => {
        const { name, value } = e.target;
        setValues((pre) => ({ ...pre, [name]: value }))
    }

    const start = () => {
        setwelcome(false)
        setCurrentQuestion(0)
    }

    const redirectToMainPage = () => {
        setThankYou(false); // to get ouut from thank you
        setwelcome(true) // to get back to main page
        setValues({
            satisfaction: "",
            fairness: "",
            purchase: "",
            recommendation: "",
            service: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentQuestion === totalQuestions - 1) {
            const time = new Date().getTime();
            const data = JSON.parse(localStorage.getItem("surveyAnswer")) || [];
            data.push({ time, ...values });
            localStorage.setItem("surveyAnswer", JSON.stringify(data));
            localStorage.setItem("status", "completed");
            setThankYou(true)
            setCurrentQuestion(0);
            setValues({
                satisfaction: "",
                fairness: "",
                purchase: "",
                recommendation: "",
                service: "",
            });
        } else {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
    };

    const nextQue = () => {
        setCurrentQuestion((e) => e + 1)
    }

    const preQue = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((e) => e - 1)
        }
    }

    const questions = [
        "How satisfied are you with our products?",
        "How fair are the prices compared to similar retailers?",
        "How satisfied are you with the value for money of your purchase?",
        "On a scale of 1-10 how would you recommend us to your friends and family?",
        "What could we do to improve our service?"
    ]

    return (
        <>
            <div className="survey_form">

                {welcome ? 
                <div className='welcome'>
                    <h1>Welcome To Our Services</h1>
                    <p>Please Click On Start to proceed for survey</p>
                    <button onClick={start}>Start</button>
                </div>
                :thankYou ? (
                    <ThankYouPage redirectToMainPage={redirectToMainPage} />
                ) : (
                    <>
                        < div id="survey" >
                            <div className="heading">
                                <h1>Survey Form</h1>
                            </div>

                            <div className="page-number">
                                <h2>{currentQuestion + 1} / {totalQuestions}</h2>
                            </div>

                            <Form values={values}
                                getValue={getValue}
                                questions={questions}
                                currentQuestion={currentQuestion}
                                totalQuestions={totalQuestions}
                                nextQue={nextQue}
                                preQue={preQue}
                                handleSubmit={handleSubmit} />
                        </div >
                    </>
                )}

            </div>
        </>
    )
}

export default SurveyForm

