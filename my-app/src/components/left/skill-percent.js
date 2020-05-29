import React from 'react';

class SkillPercent extends React.Component {
  render() {
    const { name, percent } = this.props;
    return (
      <div>
        <span>{ name ? name : '' }</span>                                    
        <div className="progress">
          <div className="determinate"> { percent ? percent : 0 }% </div>
        </div>
      </div>
    )
  }

}

export default SkillPercent;