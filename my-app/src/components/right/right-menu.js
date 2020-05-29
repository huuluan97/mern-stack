import React from 'react';
import ItemRight from './item-right';

const API_INFO = 'http://www.mocky.io/v2/5eba290b2f00005e523c3560'

class RightMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [
        {
          "id": 1,
          "title": "TECHNICAL SKILLS",
          "icon": "fa fa-check",
          "infoList": [
            {
              "title": "Programming Languages",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• C#, .Net, Javascript, TypeScript, Swift",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• HTML, CSS",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.1s"
            },
            {
              "title": "Frameworks/    Platforms",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• AngularJS, Angular2+, ReactJS",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• React Native",
                  "subContentDetailList": []
                },
                {
                  "id": 3,
                  "title": "• ASP.Net MVC, Web API, .Net Core",
                  "subContentDetailList": []
                },
                {
                  "id": 4,
                  "title": "• Entity Framework",
                  "subContentDetailList": []
                },
                {
                  "id": 5,
                  "title": "• jQuery, Bootstrap",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.2s"
            },
            {
              "title": "Database Management Systems",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• SQL",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• PostgreSQL",
                  "subContentDetailList": []
                },
                {
                  "id": 3,
                  "title": "• Oracle",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.3s"
            },
            {
              "title": "Soft Skills",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• Time management",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• Teamwork",
                  "subContentDetailList": []
                },
                {
                  "id": 3,
                  "title": "• Business communication",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.4s"
            },
            {
              "title": "Others",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• Good understanding of OOP methodologies, SOLID principles, design patterns",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• Knowledge model MVP, MVVM, MVC archietecture Swift",
                  "subContentDetailList": []
                },
                {
                  "id": 3,
                  "title": "• Experience with Agile and Scrum development process",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.4s"
            }
          ]
        },
        {
          "id": 2,
          "title": "EDUCATION",
          "icon": "fa fa-graduation-cap",
          "infoList": [
            {
              "title": "Industrial University Of Ho Chi Minh City",
              "subTitle": "Computer Science",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• The 3rd prize of Student with Information Security( 8/2017 ).",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• Young Scientist Conference 2019 Industrial University Of Ho Chi Minh City.",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.1s"
            }
          ]
        }, 
        {
          "id": 3,
          "title": "WORK EXPERIENCE",
          "icon": "fa fa-code-fork",
          "infoList": [
            {
              "title": "UNIT Corp - Mobile developer ( 3/2019 - 6/2020 )",
              "subTitle": "Achievement: Prize in Company - PROMISING INDIVIDUAL AWARD 2019.",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• Project: TCA Xin Chao",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Mobile developer',
                    projectName: '• Project: TCA Xin Chao',
                    teamSize: 6,
                    projectDescription: 'A application for insurance broker between referrer and member in system.',
                    responsibilities: 'Building structure source project using React Native framework and developer project, key member mobile in project. Communicating with customers and teammates to clarify requirement, communicate back-end developer for define structure API and using API for application. Application deployment and release on CHPlay and AppStore.' 
                  }
                },
                {
                  "id": 2,
                  "title": "• Project: Paperless",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Mobile developer',
                    projectName: '• Project:  Paperless',
                    teamSize: 12,
                    projectDescription: 'Smart solution for paperless companies',
                    responsibilities: 'Learning Swift language for iOS platform. Using Swift for developed and fix application defect base on requirements, design UI on Sketch. Application release on TestFlight.' 
                  }
                },
                {
                  "id": 3,
                  "title": "• Project: SMU",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Mobile developer',
                    projectName: '• Project: SMU',
                    teamSize: 12,
                    projectDescription: 'Smart solution for paperless schools',
                    responsibilities: 'Rebuilding structure source code Swift for programming iOS. Building new features and mantainmance different bugs, design UI base on Sketch from designer. Application release on Testflight.' 
                  }
                }
              ]
            },
            {
              "title": "Dolphin Solutions - Full stack developer ( 9/2018 - 2/2019 )",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• Project: Overlapping sales management",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Full stack developer',
                    projectName: '• Project: Management Overlapping Sales',
                    teamSize: 8,
                    projectDescription: 'A system management product in warehouse.',
                    responsibilities: 'Design database and web management, building front-end web base framework KnockoutJS, maintenance web API (platform ASP.Net Core). Development mobile app React Native, Redux.' 
                  }
                },
                {
                  "id": 2,
                  "title": "• Project: Employee management",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Full stack developer',
                    projectName: '• Project: Employee management',
                    teamSize: 6,
                    projectDescription: 'Smart solution for paperless companies',
                    responsibilities: 'Learning Swift language for iOS platform. Using Swift for developed and fix application defect base on requirements, design UI on Sketch. Application release on TestFlight.' 
                  }
                },
                {
                  "id": 3,
                  "title": "• Project: Booking application for patient",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Full stack developer',
                    projectName: '• Project: Booking application for patient',
                    teamSize: 8,
                    projectDescription: 'Booking application for patient',
                    responsibilities: 'Design UI/UX, development web API (platform ASP.Net Core). Development mobile app React Native, Redux and front-end web with Angular 6.' 
                  }
                }
              ]
            },
            {
              "title": "THE GIOI DI DONG - Full stack developer ( 6/2018 - 8/2018 )",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• Project: CRM",
                  isWork: true,
                  lstWorkExperience: {
                    id: 1,
                    position: 'Full stack developer',
                    projectName: '• Project: CRM',
                    teamSize: 7,
                    projectDescription: 'Development web CRM of MWG ( management common VuiVui, DienMayXanh, BachHoaXanh, TheGioiDiDong).',
                    responsibilities: 'Add function for web CRM (both back end and front-end) and write, edit Stored Procedure Database Oracle for web.' 
                  }
                },
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "PASTIMES AND ACTIVITIES",
          "icon": "fa fa-rss",
          "infoList": [
            {
              "title": "",
              "subTitle": "",
              "contentDetailList": [
                {
                  "id": 1,
                  "title": "• In my free time, I also work on some pet projects or with my team drinking beer or my friends play video games.",
                  "subContentDetailList": []
                },
                {
                  "id": 2,
                  "title": "• I	am keen	on reading books and IT	blogs, Medium for Tech and research design UI/UX on Behance or Pinterest",
                  "subContentDetailList": []
                }
              ],
              "fadeTime": "0.1s"
            },
            
          ]
        }, 
      ],
      isLoaded: false
    }
  }

  render() {
    const { content } = this.state;
    return(
      <section className="col s12 m12 l8 section">
        <div className="row">
          {
            content.map((item, index) => {
              return (
                <ItemRight key={index.toString()} title={ item.title } icon={ item.icon } infoList={item.infoList}  />
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default RightMenu;