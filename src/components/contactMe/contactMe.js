import './_contactMe.scss';
import Content from "../../data/content";
import { Container } from 'react-bootstrap';

function ContactMe() {
    const cm = Content[1];

    return (
        <Container className='contact-me'>
            <h3 className='contact-title'>Contact Me</h3>
             <p>
                <span>{cm.description}</span>
                <a href={cm.link}>{cm.linkName}</a>
            </p>
        </Container>
    )
};

export default ContactMe;