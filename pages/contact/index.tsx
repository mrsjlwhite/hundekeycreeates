import './_contact.module.scss';
import { Content } from "../../data/content";

export default function Contact() {
    const cm = Content.contact;

    const onIconClick = (link) => {
        window.open(link);
    }

    return (
        <div className='container contact-me'>
            <h3 className='contact-title'>Contact Me</h3>
            <h5 className='contact-desc'>
                {cm.description}
                {cm.instagrams.map(ig => {
                    return (
                        <div key={ig.handle}
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
        </div>
    )
};