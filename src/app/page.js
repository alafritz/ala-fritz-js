import React from 'react';
import './App.scss';
import './Patterns.scss';
import './Typography.scss';
import './Colors.scss';
import mainLogo from './assets/images/f-logo.svg';
import musicIcon from './assets/images/music-icon.svg';
import MenuItem from './MenuItem';
import LinkOut from './LinkOut';
import specialsContent from './/content/specials';
import sidesContent from './/content/sides';
import caterContent from './/content/cater';
import linksContent from './/content/links';
import { LastFmData } from './/LastFM/index';

function App() {
  return (
    <div className="grid-king">

      <div className="area-logo-mark">
        <div className="center-mark">
          <img className="mark-size" src={mainLogo} alt="A la Fritz logo" />
        </div>
      </div>

      <div className="area-yellow">
        <div className="pattern-4"></div>
      </div>

      <div className="area-green">
        <div className="pattern-1">
        </div>
      </div>

      <div className="area-title content" lang="en">
        <h1>Fresh ya</h1>
        <h1 className="f-left">Shamba</h1>
        <p className="space-above">Welcome to Fritz&apos;s corner of the internet. Enjoy!</p>
      </div>

      <div className="area-strip" lang="en">
        <div className="info-row">
          <div className="info-column">
            <h5>Current Catering Deal</h5>
            <p>Staff Designer at <a href="https://lattice.com/">Lattice</a></p>
          </div>
          <div className="info-column">
            <h5>Location</h5>
            <p>Oakland, CA, USA</p>
          </div>
          <div className="info-column">
            <h5>Business hours</h5>
            <p>9:00am - 5:00pm</p>
          </div>
        </div>
      </div>

      <div className="area-specials content" lang="en">

        <h2>Today&apos;s Specials</h2>
        {specialsContent.map((p, i) => (<MenuItem content={p} key={i} />))}

      </div>

      <div className="area-blue">
        <div className="pattern-2"></div>
      </div>

      <div className="area-recs content" lang="en">

        <h3>Recommended sides</h3>
        {sidesContent.map((p, i) => (<MenuItem content={p} key={i} />))}

      </div>

      <div className="area-name">
        <div className="logo-type">
          À La Fritz
        </div>
      </div>

      <div className="area-pink">
        <div className="pattern-3"></div>
      </div>

      <div className="area-music content">
        <img className="music-icon" src={musicIcon} alt="Music icon" />
        <LastFmData
          userName={'alafritz'}
          apiKey={'98bd922cccc5b197a8dc40dd3a00e411'}
        />
      </div>

      <div className="area-links">
        <div className="link-grid">
          {linksContent.map((p, i) => (<LinkOut content={p} key={i} />))}
        </div>
      </div>

      <div className="area-cater content" lang="en">

        <h3>Previous catering</h3>
        {caterContent.map((p, i) => (<MenuItem content={p} key={i} />))}

      </div>

    </div>
  );
}

export default App;
