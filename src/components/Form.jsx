import React, { useState } from 'react'

const Form = ({ values, getValue, questions, currentQuestion, totalQuestions, nextQue, preQue, handleSubmit }) => {
    const [changeBg, setChangeBg] = useState(false)

    return (
        <>
            <ul className="form">
                <li>{questions[currentQuestion]}</li>

                {currentQuestion === 4 ? (
                    <div className="option_container">
                        <textarea name="service" id="service" cols="30" rows="10" value={values.service} onChange={getValue} required ></textarea>
                    </div>
                ) : currentQuestion === 3 ? (
                    <div className="option_container">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
                            <div className="options" key={index}>
                                <label htmlFor={`page4_o${e}`}>{e}</label>
                                <input type="radio" name="recomendation" id={`page4_o${e}`} checked={values.recomendation === e.toString()} value={e} onChange={getValue} required />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="option_container">
                        {[1, 2, 3, 4, 5].map((e, index) => (
                            <div className="options" key={index}>
                                <label htmlFor={`page1_o${e}`}>{e}</label>
                                <input
                                    type="radio"
                                    name={currentQuestion === 0 ? "satisfaction" : (currentQuestion === 1 ? "fairness" : (currentQuestion === 2 ? "purchase" : "recommendation"))}
                                    id={`page1_o${e}`}
                                    checked={values[currentQuestion === 0 ? "satisfaction" : (currentQuestion === 1 ? "fairness" : (currentQuestion === 2 ? "purchase" : "recommendation"))] === e.toString()}
                                    value={e}
                                    onChange={getValue}
                                    required />
                            </div>
                        ))}

                    </div>
                )}

                {currentQuestion > 0 && (
                    <button type="button" onClick={preQue}>
                        Previous
                    </button>
                )}

                <button type="button" onClick={handleSubmit}>
                    {currentQuestion === totalQuestions - 1 ? "Submit" : "Next"}
                </button>

                {currentQuestion < totalQuestions - 1 && (
                    <button type="button" onClick={nextQue}>
                        Skip
                    </button>
                )}

            </ul>
        </>
    )
}

export default Form
