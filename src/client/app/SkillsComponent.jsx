import React from 'react';

class SkillsComponent extends React.Component {

  render() {
    return (
      <div className="employment-right">
        <h3>Programming Skills</h3>
        {this.props.content.map((skill, i) => 
          <span className={'skill ' + skill.color} key={i}>{skill.title}</span>
          )
        }
      </div>
    );
  }

}

export default SkillsComponent;