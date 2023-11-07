import * as React from 'react';
import '../../rivet-styles/rivet.min.css';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';


{/* <Alert variant="info">A very important message for you!</Alert> */ }

function Home() {
    return (
        <div className='rvt-bg-orange-000'>
            {<Header />}

            <div className='rvt-container-xl'>
                <div className='rvt-container-sm'>
                    <h1 className='rvt-ts-xxl'>
                        Welcome to Higher Attire
                    </h1>

                    <p className='rvt-ts-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, diam nulla sed posuere. Adipiscing pulvinar integer nulla amet mattis odio
                        gravida turpis. Duis pulvinar integer pellentesque cursus.
                    </p>


                    <div className="rvt-hero__actions">
                        <a className="rvt-cta rvt-cta--button" href="#0">Login</a>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {<Footer />}
        </div>
    );
};

export default Home;