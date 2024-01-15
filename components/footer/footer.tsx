import { useEffect, useState } from 'react';
import Styles from './_footer.module.scss';

function Footer() {
    const [currentYear, setYear] = useState<number>();

    useEffect(() => {
        const d = new Date();
        setYear(d.getFullYear());
    }, [])

    return (
        <footer className={Styles.footer}>
            Copyright &#169; {currentYear} Candace Jackson
            &#38;
            <a target="_blank" href='https://jlwhite.dev' rel="noreferrer"> Jeslyn White</a>
        </footer>
    )
}

export default Footer;