import { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import MyNavbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Styles from '../styles/app.module.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const titleFont = Playfair_Display({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-title'
});

const bodyFont = Open_Sans({
   weight: ['400'],
   subsets: ['latin'],
   variable: '--font-body'
});

const title = "HundeykeyCreeates";
const description = "A graphic designers personal website";

// any shared layouts between all pages
const App = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <SSRProvider>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Head>
            <div className={`${Styles.app} ${titleFont.variable} ${bodyFont.variable}`}>
                <MyNavbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </SSRProvider>
    )
}

export default App;