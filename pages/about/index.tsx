import Styles from './_about.module.scss';
import aboutPic from '../../public/imgs/about.jpeg';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import AboutDescription from '../../data/aboutPage';

function About() {
  return (
    <Container>
      <Row>
        <div className={Styles.aboutContainer}>
          <Image
            src={aboutPic}
            className={Styles.aboutPic}
            alt='Candace drawing' />

          <h1 className={Styles.aboutTitle}>
            everything you create has a meaning.
          </h1>

          <h4 className={Styles.aboutDesc}>
            {AboutDescription}
          </h4>
        </div>
      </Row>
    </Container>
  )
};

export default About;