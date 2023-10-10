// The below imports are for the Style Sheet and various Components
import './home.css';
import Header from '../components/Header/header';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import LocationHours from '../components/LocationHours/LocationHours';
import AsideNav from '../components/AsideNav/AsideNav';
import Button from '../components/Button/Button';

// These imports are for images
import jaguar from '../../images/stuffed-jaguar.jpg';


function Home() {
    return (
        <div>
            {<Header />}
            <img className = "jaguar-image" src={jaguar} alt="Stuffed Jaguar"/>

            <article>

            {<AsideNav />}
            {<LocationHours />}

                <div className="word-content">
                <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Food and Clothing Services</a>
                    <br />
                    <div className="paws-title">PAWS' PANTRY</div>
                </div>

                <h1>Welcome to the Pantry</h1>
                <h3>How to shop for free food and personal hygiene products</h3>

                <h4>Here’s what you need to know to make your visit to the pantry a breeze:</h4>
                <ul>
                    <li>Clients experiencing food insecurity can physically shop in the pantry, as you would in a store, for your own items. There is a check-in and check-out process, and a limit system is in place to allow for everyone to get what they need.</li>
                    <li>Appointments are required to be made 24 hours in advance. Each appointment will allow 15 minutes for shopping.</li>
                    <li><i>Every effort will be made to provide appointments for those with food insecurity. If you are unable to make an appointment, please email jagsfood@iu.edu and a one-time emergency pre-packaged food bag will be provided.</i></li>
                    <li>Every client, even if it is not your first time visiting the pantry, will need to fill out an intake form for the 2022-23 school year.</li>
                </ul>
                </div>
            </article>


            <div className="button-wrapper">
                {/* <label for="submit-button">Schedule Now</label><br /> */}
                {<Button title = "Get Started" location="/Search" />}
            </div>

            <div className="questions-wrapper">
                <h3>Questions?</h3>
                <h4>Contact us at {<Button title="jagsfood@iupui.edu" location="#"/>} or stop by the pantry to speak to a Paws’ Pantry team member.</h4>
            </div>

            <div className = "bottom-content">
                <h3>Support Paws' Pantry Today</h3>
                <button>GIVE NOW</button>
            </div>
            {<Socials />}
            {<Footer />}
        </div>
    );
};

export default Home;