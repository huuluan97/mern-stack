import React from 'react';

class ItemContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, subTitle, fadeTime, contentDetailList } = this.props;
    return (
      <div className="custom-content-wrapper wow fadeIn " data-wow-delay={fadeTime} >
        <h3>{ title }</h3>
        <span>{ subTitle }</span>
        {
          contentDetailList.map((item, index) => {
            let styleText = item.isWork ? {
              marginBottom: 0,
              color: '#0188FE',
              fontWeight: 700
            } : {
              marginBottom: 0
            }
            return (
              <div key={index.toString()}>
                <p style={styleText} key={index.toString()}>{ item.title }</p>
                { item.lstWorkExperience ? this.renderLstWorkExp(item.lstWorkExperience) : null}
              </div>
            )
          })
        }
      </div>
    )
  }

  renderLstWorkExp = (item) => {
    return (
      <div>
        <p style={{ marginBottom: 0 }}>
        - Position: {item.position}
        </p>
        <p style={{ marginBottom: 0 }}>
        - Project	 Description: {item.projectDescription}
        </p>
        <p style={{ marginBottom: 0 }}>
        - Team	Size: {item.teamSize}
        </p>
        <p style={{ marginBottom: 0 }}>
        - Responsibilities: {item.responsibilities}
        </p>
      </div>
    )
  }

}





export default ItemContent;