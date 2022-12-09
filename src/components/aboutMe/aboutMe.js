import './_aboutMe.scss';
import Content from "../../data/content";
import aboutPic from '../../assets/img/about.jpeg';
import { Container, Col, Row } from 'react-bootstrap';

function AboutMe() {
  const am = Content[0];

  return (
    <Container>
      <Row className='about-me'>
        <h3 className='about-title'>About Me</h3>
        <Col xs={12} sm={12} md={6} lg={6}>
          <p className='about-desc'>{am.description}</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <img src={aboutPic}
            className='img-fluid'
            alt='Candace drawing' />
        </Col>
      </Row>
    </Container>
  )
};

export default AboutMe;