import './_contactMe.module.scss';
import Content from "../../data/content";
import { Container } from 'react-bootstrap';

function ContactMe() {
    const cm = Content[1];

    const onIconClick = (link) => {
        window.open(link);
    }

    return (
        <Container className='contact-me'>
            <h3 className='contact-title'>Contact Me</h3>
            <h5 className='contact-desc'>
                {cm.description}
                {cm.instagrams.map(ig => {
                    return (
                        <div  key={ig.handle}
                            className='contact-link'
                            onClick={() => onIconClick(ig.link)}>
                            <i className="fa-brands fa-instagram fa-2xl"></i>
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

export default ContactMe;