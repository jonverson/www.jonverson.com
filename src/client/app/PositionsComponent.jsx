import React from 'react';

import SkillsComponent from './SkillsComponent.jsx';

class PositionsComponent extends React.Component {

  render() {
    
    return (
      <div>
        <div className="site-resume">
          <div className="site-container">
            <h2>Resume</h2>
            <div className="employment-left">
              <div className="employment">
                <div className="arrow-down-wrapper">
                  <div className="arrow-down">
                    <div className="arrow-down-item"><div dangerouslySetInnerHTML={{__html: '&#155;'}} /></div>
                  </div>
                </div>
                <h3>Employment</h3>
              </div>
              {this.props.content.map((position, i) => 
                <div className="employment-item" key={i}>
                  <div className="arrow-down-wrapper">
                    <div className="arrow-down">
                      <div className="arrow-down-item"><div dangerouslySetInnerHTML={{__html: '&#155;'}} /></div>
                    </div>
                  </div>
                  <div className="employment-company">
                    <div className="company">
                      <h4>{position.company}</h4>
                      <span className="employment-duration">{position.timeFrame}</span>
                    </div>
                    <div className="position">{position.title}</div>
                    <ul>
                      {position.duties.map((task, i) => 
                        <li key={i}>{task.item}</li>
                        )
                      }
                    </ul>
                  </div>
                </div>
                )}
            </div>
            
            <SkillsComponent content={this.props.exp} />

          </div>
        </div>
      </div>
    );
  }
}

export default PositionsComponent;