import React from 'react';

class About extends React.Component {
  render()
  {
    return (
      <div className="about-footer">
        <p>© Daniel Ackroyd-Isales 2020</p>
        <span>
        <a href="https://www.linkedin.com/in/daniel-ackroyd-isales/" target="_blank">LinkedIn</a>
        <a href="https://github.com/dackroydisales/" target="_blank">Github</a>
        <a href="https://github.com/dackroydisales/nutube" target="_blank">NuTube Repo</a>
        </span>
      </div>
    )
  }
}

export default About;