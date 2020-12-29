import { useState } from 'react';
import '../Assets/css/ContactsTabs.css';
import Map from "./Map";


function ContactsTabs() {
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    }
    let tabContent = null;

    if (activeTab === 1) {
        tabContent = <div className="text-center-justify p-3 font-weight-bold">Wine is one of life’s simple pleasures.
        We believes that the experience of getting a great
        bottle of wine should be as simple as enjoying one.
        Our team creates and curates over a hundred wines,
        and makes the experience of exploring wine easy and
        pleasurable—So you can spend more time enjoying the
             wine in your glass.</div>
    } else if (activeTab === 2) {
        tabContent = <div className="text-center-justify p-3 font-weight-bold">In vino veritas connects you to a world
        of exclusive wines tailored to your tastes and offers
            wine delivery right to your door.</div>
    } else if (activeTab === 3) {
        tabContent = <div className="text-center-justify p-3 font-weight-bold">You can find us here!</div>

    }
    let tabImgContent = null;
    if (activeTab === 1) {
        tabImgContent = <div ><img alt="about" className="image-about" src="\Assets\images\aboutUs.jpg" /></div>
    } else if (activeTab === 2) {
        tabImgContent = <div><img alt="about" className="image-about" src="\Assets\images\JingleJuiceHero.jpg" /></div>
    } else if (activeTab === 3) {
        tabImgContent = <div><Map /></div>
    }


    return (
        <div>
            <ul className="nav nav-tabs">
                <li className={activeTab === 1 ? 'active' : ''} >
                    <a className="font-color" href="# " onClick={() => changeActiveTab(1)}>About In vino veritas</a>
                </li>
                <li className={activeTab === 2 ? 'active' : ''}>
                    <a className="font-color" href="# " onClick={() => changeActiveTab(2)}>How It Works</a>
                </li>
                <li className={activeTab === 3 ? 'active' : ''}>
                    <a className="font-color" href="# " onClick={() => changeActiveTab(3)}>Contacts</a>
                </li>
            </ul>
            <div className="tabs-content">
                <div className="row">
                    <div className="col">
                        {tabImgContent}
                    </div>
                    <div className="col ">
                        {tabContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsTabs;
