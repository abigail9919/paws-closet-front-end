import '../../../../src/main.scss';

function Header() {
    return (
        <div>
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
                </div>
                </header>
        </div>
    );
};

export default Header;