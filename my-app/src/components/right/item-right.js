import React from 'react';
import ItemContent from './item-content';

class ItemRight extends React.Component {
  render() {
    const { title, icon, infoList } = this.props;
    return (
      <div className="section-wrapper z-depth-1">                            
        <div className="section-icon col s12 m12 l2">
          <i className={ icon }></i>
        </div>
        <div className="custom-content col s12 m12 l10 wow fadeIn " data-wow-delay="0.1s">
          <h2>{ title }</h2>
          {
            infoList.map((item, index) => {
              return (
                <ItemContent key={index.toString() } title={ item.title } subTitle={ item.subTitle } fadeTime={ item.fadeTime } contentDetailList={ item.contentDetailList } />
              )
            })
          }
        </div>                            
      </div>
    )
  }

}

export default ItemRight;