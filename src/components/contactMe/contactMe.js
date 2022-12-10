import './_contactMe.scss';
import Content from "../../data/content";
import { Container } from 'react-bootstrap';

function ContactMe() {
    const cm = Content[1];
    
    const onIconClick = () => {
        window.open(cm.link);
    }

    return (
        <Container className='contact-me'>
            <h3 className='contact-title'>Contact Me</h3>
            <h5 className='contact-desc'>
                {cm.description} 
                <span className='contact-link' onClick={onIconClick}>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                </span>
            </h5>
        </Container>
    )
};

export default ContactMe;