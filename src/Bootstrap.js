import React from 'react';
import { Container, Card, Progress, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
    return (
        <Container>
            <Row>
                <Col sm="4">
                    <br />
                    <Card body>
                        <div>Jane Doe</div>
                        <div>Designer</div>
                        <div>London, UK</div>
                        <div>Designer</div>
                        <div>ex@mail.com</div>
                        <div>1224435534</div>

                        * Skills
                        <div className="text-center">Adobe Photoshop</div>
                        <Progress value="90">90%</Progress>
                        <div className="text-center">Photography</div>
                        <Progress value="80">80%</Progress>
                        <div className="text-center">Adobe Illustrator</div>
                        <Progress value="75">75%</Progress>
                        <div className="text-center">Media</div>
                        <Progress value="50">50%</Progress>
                        <hr />
                        * Languages
                        <div className="text-center">English</div>
                        <Progress value="90"></Progress>
                        <div className="text-center">Spanish</div>
                        <Progress value="50"></Progress>
                        <div className="text-center">German</div>
                        <Progress value="50"></Progress>
                    </Card>
                </Col>
                <Col sm="8">
                    <br />
                    <Card body>
                        <div>Work Experience</div>
                        <div>Graphic Designer / designsomething.com</div>
                        <div>Jun 2010 - Mar 2012</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <hr />
                        <div>Graphic Designer / designsomething.com</div>
                        <div>Jun 2010 - Mar 2012</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <hr />
                        <div>Graphic Designer / designsomething.com</div>
                        <div>Jun 2010 - Mar 2012</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </Card>
                </Col>
            </Row>
            <Card body>
                <div>Education</div>
                <div>School of Coding</div>
                <div>2010 - 2013</div>
                <div>Bachelor Degree</div>
                <hr />
                <div>School of Coding</div>
                <div>2010 - 2013</div>
                <div>Bachelor Degree</div>
                <hr />
                <div>School of Coding</div>
                <div>2010 - 2013</div>
                <div>Bachelor Degree</div>
            </Card>
        </Container>
    );
};

export default Example;
