import { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/global.scss';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/brands';
import Head from 'next/head';
import { Playfair_Display } from 'next/font/google';
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'

// Fixes fontawesome xl icons in nextjs
// config.autoAddCss = false;

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-title'
});

const title = "HundeykeyCreeates";
const description = "A graphic designers personal website";

// any shared layouts between all pages
const App = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={title} />
                {/* <meta property="twitter:card" content="summary" /> */}
                {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Head>
            <div className={`${playfair.variable}`}>
                {/* <HeaderNavbar></HeaderNavbar> */}
                <Component {...pageProps} />
                {/* <FooterNavbar></FooterNavbar> */}
            </div>
        </>
    )
}

export default App;