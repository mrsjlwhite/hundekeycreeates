import React, { useEffect, useState } from 'react';
import './_footer.scss';

function Footer() {
    const [currentYear, setYear] = useState();

    useEffect(() => {
        const d = new Date();
        setYear(d.getFullYear());
    }, [])

    return (
        <footer className='footer'>
            Copyright &#169; {currentYear} Candace Jackson
            &#38;
            <a target="_blank" href='https://github.com/mrsjlwhite' rel="noreferrer"> Jeslyn White</a>
        </footer>
    )
}

export default Footer;