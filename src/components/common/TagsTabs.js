import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { CuratedPosts, EmployeeEngagement, RewardsRecogntion, PerformanceManagement, EmployeeSurvey, Management, RemoteWork, Recruitment, CompanyCulture, WorkplaceCommunication, EmployeeBenefits } from '../common'

const TagsTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container tabs-wrapper">
        <div className="row tabNav">
            <div className="col-12 tabNav-inner pclr">
                <h2 className="text-center">Explore our Topics</h2>
                <p>Enhance your knowledge by exploring from our wide range of topics.</p>
                <div id="js_image_selection" className="horizontal-scrollable-tabs">
                    <div className="scroller arrow-left">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
                    </div>
                    <div className="scroller arrow-right">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </div>
                    <div className="horizontal-tabs">
                        <Nav tabs className="nav-tabs-horizontal">
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag1a"></div>
                                        <div className="tag-images tag1b"></div>
                                    </div>
                                    <div className="tabName">Curated for You</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag2a"></div>
                                        <div className="tag-images tag2b"></div>
                                    </div>
                                    <div className="tabName">Employee Engagement</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag3a"></div>
                                        <div className="tag-images tag3b"></div>
                                    </div>
                                    <div className="tabName">Rewards & Recognition</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag4a"></div>
                                        <div className="tag-images tag4b"></div>
                                    </div>
                                    <div className="tabName">Employee Benefits</div>
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag5a"></div>
                                        <div className="tag-images tag5b"></div>
                                    </div>
                                    <div className="tabName">Employee Survey</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag6a"></div>
                                        <div className="tag-images tag6b"></div>
                                    </div>
                                    <div className="tabName">Management</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '7' })} onClick={() => { toggle('7'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag7a"></div>
                                        <div className="tag-images tag7b"></div>
                                    </div>
                                    <div className="tabName">Remote Work</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '8' })} onClick={() => { toggle('8'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag8a"></div>
                                        <div className="tag-images tag8b"></div>
                                    </div>
                                    <div className="tabName">Hiring & Recruitment</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '9' })} onClick={() => { toggle('9'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag9a"></div>
                                        <div className="tag-images tag9b"></div>
                                    </div>
                                    <div className="tabName">Company Culture</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '10' })} onClick={() => { toggle('10'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag10a"></div>
                                        <div className="tag-images tag10b"></div>
                                    </div>
                                    <div className="tabName">Workplace Communication</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '11' })} onClick={() => { toggle('11'); }} >
                                    <div className="tabImg">
                                        <div className="tag-images tag11a"></div>
                                        <div className="tag-images tag11b"></div>
                                    </div>
                                    <div className="tabName">Performance management</div>
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="container pclr">
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <CuratedPosts />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <EmployeeEngagement />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <RewardsRecogntion />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <EmployeeBenefits />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <EmployeeSurvey />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="6">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <Management />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="7">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <RemoteWork />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="8">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <Recruitment />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="9">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <CompanyCulture />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="10">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <WorkplaceCommunication />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="11">
                    <Row className="loop">
                        <Col sm="12 pclr">
                            <PerformanceManagement />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
                    
    </div>
  );
}

export default TagsTabs;