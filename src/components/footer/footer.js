import React, { useEffect, useState } from 'react';
import './_footer.scss';

function Footer() {
    const [currentYear, setYear] = useState();
    
    useEffect(() => {
        const d = new Date(); 
        setYear(d.getFullYear());
    })
        
    return (
        <footer className='footer'>
            Copyright &#169; {currentYear} Candace Jackson.
        </footer>
    )
}

export default Footer;