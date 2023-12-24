import './_aboutMe.module.scss';
import Content from "../../data/content";
import aboutPic from '../../public/imgs/about.jpeg';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'next/image';

function AboutMe() {
  const am = Content[0];

  return (
    <Container className='about-container'>
      <Row className='about-me'>
        <h3 className='about-title'>About Me</h3>
        <Col xs={12} sm={12} md={5} lg={5}>
          <h4 className='about-desc'>{am.description}</h4>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <Image src={aboutPic}
            className='img-fluid'
            alt='Candace drawing' />
        </Col>
      </Row>
    </Container>
  )
};

export default AboutMe;