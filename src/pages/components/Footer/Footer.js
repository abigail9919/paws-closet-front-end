import './Footer.css';

import IUsig from '../../../images/iu-sig-formal.png';

function Footer() {
    return (
        <footer class="rvt-footer-base">
            <div class="rvt-container-lg">
                <div class="rvt-footer-base__inner">
                <div class="rvt-footer-base__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon fill="currentColor" points="15.3 3.19 15.3 5 16.55 5 16.55 15.07 13.9 15.07 13.9 1.81 15.31 1.81 15.31 0 8.72 0 8.72 1.81 10.12 1.81 10.12 15.07 7.45 15.07 7.45 5 8.7 5 8.7 3.19 2.5 3.19 2.5 5 3.9 5 3.9 16.66 6.18 18.98 10.12 18.98 10.12 21.67 8.72 21.67 8.72 24 15.3 24 15.3 21.67 13.9 21.67 13.9 18.98 17.82 18.98 20.09 16.66 20.09 5 21.5 5 21.5 3.19 15.3 3.19" background_color="#231f20"/>
                    </svg>
                </div>
                <ul class="rvt-footer-base__list">
                    <li class="rvt-footer-base__item">
                    <a class="rvt-footer-base__link" href="https://accessibility.iu.edu/assistance/">Accessibility</a>
                    </li>
                    <li class="rvt-footer-base__item">
                    <a class="rvt-footer-base__link" href="#">Privacy Notice</a>
                    </li>
                    <li class="rvt-footer-base__item">
                    <a class="rvt-footer-base__link" href="https://www.iu.edu/copyright/index.html">Copyright</a> © 2023 The Trustees of <a class="rvt-footer-base__link" href="https://www.iu.edu">Indiana University</a>
                    </li>
                </ul>
    <header class="rvt-header-wrapper">
        <a class="rvt-header-wrapper__skip-link" href="#main-content">Skip to main content</a>
        <div class="rvt-header-global">
            <div class="rvt-container-xl">
                <div class="rvt-header-global__inner">
                    <div class="rvt-header-global__logo-slot">
                        <a class="rvt-lockup" href="/">
                            <div class="rvt-lockup__tab">
                                <svg xmlns="http://www.w3.org/2000/svg" class="rvt-lockup__trident" viewBox="0 0 28 34">
                                    <path d="M-3.34344e-05 4.70897H8.83308V7.174H7.1897V21.1426H10.6134V2.72321H8.83308V0.121224H18.214V2.65476H16.2283V21.1426H19.7889V7.174H18.214V4.64047H27.0471V7.174H25.0614V23.6761L21.7746 26.8944H16.2967V30.455H18.214V33.8787H8.76463V30.592H10.6819V26.8259H5.20403L1.91726 23.6077V7.174H-3.34344e-05V4.70897Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div class="rvt-lockup__body">
                                <span class="rvt-lockup__title">Rivet Design System</span>
                                <span class="rvt-lockup__subtitle">Indiana University</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </footer>
    );
};

export default Footer;