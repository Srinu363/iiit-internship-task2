import './App.css';
import Video from'./video.png'
import Pad from "./pad.png"
import Circle from "./circle.png"
import Telescope from "./telescope.png"
const main=()=>(
  <div>
<div className="navbar">
<div className="logo-container">
    <img src="odyssey.png" alt="logo" />
    </div>
        <div className="desktop-links-container">
          <p>Stay Connected</p>
          <p>Education</p>
          <p>Community</p>
          <p>About Us</p>
          <button className="signin-button">Sign In</button>
      </div>
                <div className="mobile-links-container">
                    <img src="widgets.png" alt="widget" />
                </div>
            </div>
    <div className="top-body">
        <div className="top-container">
            <h1 className="unveiling-heading">Unveiling the Wonders of the Universe</h1>
        </div>
        <div className="overlap-container">
            <img className="lost-in-space" src="girl.png" alt="lost-in-space" />
            <img className="space-walk-graphs" src="space-walk-graphs.png" alt="space-walk-graphs" />
            <img src="heartbeat.png" className="heartbeat" alt="heartbeat" />
            <img src="timebar.png" alt="timebar" className="timebar" />
        </div>
        <div className="bottom-container">
            <p>At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
            <div className="buttons-container">
            <button className="signin-button get-started">Get Started</button>
            <button className="watch-the-video-button">
                Watch the Video
                <img src={Video} alt="video-icon" className="video-icon" />
            </button>
            </div>
        </div>
    </div>
    <div className="icons-container">
        <img src="nasa.png" alt="logo" />
        <img src="astro.png" alt="logo" />
        <img src="Boeing-Logo.png" alt="logo" />
        <img src="spacex.png" alt="logo" />
    </div>
    <div className="community-container">
        <div className="community-top-container">
            <h1>Join our vibrant community of space enthusiasts where you can</h1>
        </div>
        <div className="community-bottom-container">
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src="physics.png" alt="community-icon" />
                </div>
                <h1 className="community-name">Astronomy 101</h1>
                <p className="community-description">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={Pad} alt="community-icon" />
                </div>
                <h1 className="community-name">Latest Discoveries</h1>
                <p className="community-description">Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={Telescope} alt="community-icon" />
                </div>
                <h1 className="community-name">Space Exploration</h1>
                <p className="community-description">Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.</p>
            </div>
            <div className="community-card">
                <div className="community-icon-container">
                <img className="community-icon" src={Circle} alt="community-icon" />
                </div>
                <h1 className="community-name">Space Technology</h1>
                <p className="community-description">Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
            </div>
        </div>
    </div>
    <div className="resources-container">
        <div className="resources-top-container resources-background-container">
            <h1 className="resources-content">We are committed to making space science accessible to all. Explore our educational resources, including</h1>
        </div>
        <div className="resources-cards-container">
            <div className="resources-card">
                <h1 className="resources-count">01.</h1>
                <h1 className="resource-name">Online free courses and tutorials</h1>
                <p className="resource-description">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
            </div>
            <div className="resources-card">
                <h1 className="resources-count">02.</h1>
                <h1 className="resource-name">Resources for teachers and educators</h1>
                <p className="resource-description">Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
            </div>
            <div className="resources-card">
                <h1 className="resources-count">03.</h1>
                <h1 className="resource-name">Book recommendations and reviews</h1>
                <p className="resource-description">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
            </div>
        </div>

    </div>
    <div className="join-community-container">
        <h1>Join our community</h1>
        <p>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
        <div className="newsletter-container">
            <input type="text" placeholder="Enter your email" className="input" />
            <button className="subscribe-button">Subscribe</button>
        </div>
    </div>
    <div className="footer">
        <div className="footer-content-container">
        <div className="logo-container">
            <img src="Odyssey.png" alt="logo" className="logo" />
        </div>
        <div className="links-container">
            <p>Stay Connected</p>
            <p>Education</p>
            <p>Community</p>
            <p>About Us</p>
        </div>
        <div className="policy-container">
            <p>privacy Ploicy</p>
            <p>Terms & Agreements</p>
        </div>

        </div>
        <div className="mail">
            <a href="geddadasri872@gmail.com">[contact@odyssey.com].</a>
        </div>
    </div>
    </div>
) 

export default main