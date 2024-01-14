import Styles from './_contact.module.scss';
import { Content } from "../../data/content";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const cm = Content.contact;

    const onIconClick = (link) => {
        window.open(link);
    }

    return (
        <Container className={Styles.contactContainer}>
            <h3 className={Styles.contactTitle}>
                Contact Me
            </h3>
            <h5 className={Styles.contactDesc}>
                {cm.description}
                {cm.instagrams.map(ig => {
                    return (
                        <div key={ig.handle}
                            className={Styles.contactLink}
                            onClick={() => onIconClick(ig.link)}>
                            <FontAwesomeIcon icon={faInstagram} size={'2xl'} />
                            <p>
                                &nbsp;
                                {ig.handle}
                            </p>
                        </div>
                    )
                })}
            </h5>
        </Container>
    )
};