import React from 'react';

// Component
import SkillPercent from './skill-percent';

// Function
import { createUUID } from '../../helpers/constants';

//Avatar
import avatarProfile from '../../images/profile-img.jpeg';

class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Luan Nguyen Huu',
      position: 'Full Stack Developer',
      summary: `
        My name is Nguyen Huu Luan. I'm a developer with 1 year of experience,
        developed backend with .Net and front-end with Angular 2+, 8 months developement
        app mobile with enviroment React Native, with good knowledge of Database Design,
        UX.
        I am a extroverted personality, i'm considered a team-player because I like to help
        other and tend to work well within groups.
        My favorite books are : Dac Nhan Tam, Code Dao Ki Su, Nha Gia Kim
        `,
      phoneNumber: '0987282701',
      mail: 'huuluan0606@gmail.com',
      address: '339/19 Le Van Sy street, District 3, Ho Chi Minh City',
      skills: [
        {
          name: 'C#',
          percent: 70
        },
        {
          name: 'Javascript',
          percent: 75
        },
        {
          name: 'Swift',
          percent: 55
        },
        {
          name: 'SQL',
          percent: 75
        },
        {
          name: 'HTML/CSS',
          percent: 55
        }
      ],
      social: [
        {
          title: 'Github',
          link: 'https://github.com/huuluan97'
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/luan-nguyen-4a695717b/'
        }
      ]
    }
  }

  render() {

    const { name, position, summary, phoneNumber, mail, skills, address } = this.state;

    return(
      <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
        <div className="row">                      
          <div className="heading">                            
            <div className="feature-img">
              <a href="index-2.html"><img src={ avatarProfile } className="responsive-img" alt="" /></a> 
            </div>
            <div className=" nav-icon">
              {/* <nav>
                <div className="nav-wrapper">
                  <ul id="nav-mobile" className="side-nav">                                  
                    <li><a >Resume</a></li>                                        
                    <li><a href="project.html">Projects</a></li>
                    <li><a href="cover-latter.html">Cover Latter</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                  <a href="#" data-activates="nav-mobile" className="button-collapse  "><i className="mdi-navigation-menu"></i></a>
                </div>
              </nav> */}
            </div>                            
            <div className="title col s12 m12 l9 right  wow fadeIn" data-wow-delay="0.1s">   
                <h2>{ name }</h2> 
                <span>{ position }</span>  
            </div>                         
          </div>
          <div className="col l12 m12 s12 sort-info sidebar-item">
              <div className="row">                               
                  <div className="col m12 s12 l3 icon">
                      <i className="fa fa-user"></i>
                  </div>                                
                  <div className="col m12 s12 l9 info wow fadeIn a1" data-wow-delay="0.1s" > 
                      <div className="section-item-details">
                          <p>{ summary }</p>
                      </div>             
                  </div>
              </div>         
          </div>
          <div className="col l12 m12 s12  mobile sidebar-item">
            <div className="row">                                
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-phone"></i>
              </div>                                
              <div className="col m12 s12 l9 info wow fadeIn a2" data-wow-delay="0.2s" >
                <div className="section-item-details">
                  <div className="personal">
                    <h4><a href="tel:0987282701">{ phoneNumber }</a></h4>           
                    <span>Phone</span> 
                  </div>
                </div>
              </div>
            </div>             
          </div>
          <div className="col l12 m12 s12  email sidebar-item ">
            <div className="row">                                
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-envelope"></i>
              </div>                                
              <div className="col m12 s12 l9 info wow fadeIn a3" data-wow-delay="0.3s">
                <div className="section-item-details">
                  <div className="personal">                                    
                    <h4><a href={ mail }>{ mail }</a></h4> 
                    <span>Email</span> 
                  </div>
                </div>
              </div> 
            </div>          
          </div>
          <div className="col l12 m12 s12  email sidebar-item ">
            <div className="row">                                
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-share-square-o"></i>
              </div>                                
              <div className="col m12 s12 l9 info wow fadeIn a3" data-wow-delay="0.3s">
                <div className="section-item-details">
                {
                  this.state.social.map((item, index) => {
                    return (
                      <div key={index.toString()} className="personal">                                    
                        <h4><a href={item.link}>{ item.link }</a></h4> 
                        <span>{ item.title }</span> 
                      </div>
                    )
                  })
                }
                </div>
              </div> 
            </div>          
          </div>
          <div className="col l12 m12 s12  address sidebar-item ">
              <div className="row">                                
                  <div className="col l3 m12  s12 icon">
                      <i className="fa fa-home"></i>
                  </div>                                
                  <div className="col m12 s12 l9 info wow fadeIn a4" data-wow-delay="0.4s">
                      <div className="section-item-details">
                          <div className="address-details"> 
                            <h4>{ address }</h4>
                            <span>Address</span> 
                          </div>                         
                      </div>
                  </div>
              </div>            
          </div>
          <div className="col l12 m12 s12  skills sidebar-item" >
            <div className="row">
              <div className="col m12 l3 s12 icon">
                <i className="fa fa-calendar-o"></i>
              </div>
              <div className="col m12 l9 s12 skill-line a5 wow fadeIn" data-wow-delay="0.5s">
                <h3>Professional Skills </h3>
                {
                  skills.map((item, index) => {
                    return (
                      <SkillPercent key={createUUID().toString()} name={ item.name } percent={ item.percent } />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>  
      </aside>
    )
  }

}

export default LeftMenu;
