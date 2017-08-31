import React from 'react';

class HeroComponent extends React.Component {

  render() {
    return (
      <div className="site-hero">
        <div className="site-container">
          <div className="title">
            <h1>{this.props.content.name}</h1>
            <h2>{this.props.content.title}</h2>
            <p>{this.props.content.email}</p>
          </div>
          <p className="description"><span>{this.props.content.statement}</span></p>
        </div>
      </div>
    );
  }

}

export default HeroComponent;