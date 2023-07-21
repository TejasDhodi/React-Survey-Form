import React from 'react'

const Questions = ({handleSubmit, getValue, values}) => {
  return (
    <>
      <ol className="form">
          <li>How satisfied are you with our products?</li>

          <div className="option_container">
            {[1,2,3,4,5].map((e, index) => (
              <div className="options" key={index}>
              <label htmlFor={`page1_o${e}`}>{e}</label>
              <input type="radio" name="satisfaction" id={`page1_o${e}`} checked={values.satisfaction === e.toString()} value={e} onChange={getValue}  />
            </div>
            ))}
            
          </div>


          <li>How fair are the prices compared to similar retailers?</li>

          <div className="option_container">
            {[1,2,3,4,5].map((e, index) => (
              <div className="options" key={index}>
              <label htmlFor={`page2_o${e}`}>{e}</label>
              <input type="radio" name="fairness" id={`page2_o${e}`} checked={values.fairness === e.toString()} value={e} onChange={getValue}  />
            </div>
            ))}
          </div>

          <li>How satisfied are you with the value for money of your purchase?</li>

          <div className="option_container">
            {[1,2,3,4,5].map((e, index) => (
              <div className="options" key={index}>
              <label htmlFor={`page3_o${e}`}>{e}</label>
              <input type="radio" name="purchase" id={`page3_o${e}`} checked={values.purchase === e.toString()} value={e} onChange={getValue}  />
            </div>
            ))}
            
          </div>


          <li>On a scale of 1-10 how would you recommend us to your friends and family?</li>

          <div className="option_container">
            {[1,2,3,4,5,6,7,8,9,10].map((e, index) => (
              <div className="options" key={index}>
              <label htmlFor={`page4_o${e}`}>{e}</label>
              <input type="radio" name="recomendation" id={`page4_o${e}`} checked={values.recomendation === e.toString()} value={e} onChange={getValue}   />
            </div>
            ))}
            
            
          </div>


          <li>What could we do to improve our service?</li>
          <div className="option_container">
            <textarea name="service" id="service" cols="30" rows="10" value={values.service} onChange={getValue}></textarea>
          </div>

          <button type="submit" onClick={handleSubmit}>Submit</button>

        </ol>
    </>
  )
}

export default Questions
