import React from 'react';

const AboutPage = (props) => {
  console.log('about page');
  return (
    <div>
      about<a onClick={() => props.history.push('/')}>go home</a>
    </div>
  );
};

export default AboutPage;
