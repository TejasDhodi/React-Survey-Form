import React, { useEffect } from 'react';

const ThankYouPage = ({ redirectToMainPage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirectToMainPage();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [redirectToMainPage]);

  return (
    <div>
      <h2>Thank you for your submission!</h2>
      <p>You are beign redirected to main page...</p>
    </div>
  );
};

export default ThankYouPage;