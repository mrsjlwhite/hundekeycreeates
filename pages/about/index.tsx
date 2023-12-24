import Styles from './_about.module.scss';
import { Content } from "../../data/content";
import aboutPic from '../../public/imgs/about.jpeg';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';

function About() {
  const am = Content.about;

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
            {am.description}
          </h4>
        </div>
      </Row>
    </Container>
  )
};

export default About;