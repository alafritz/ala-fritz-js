import Image from 'next/image';
import Link from 'next/link';
import MenuItem from '../components/menuitem';
import LinkOut from '../components/linkout';
import specialsContent from '../components/specials';
import sidesContent from '../components/sides';
import caterContent from '../components/cater';
import linksContent from '../components/links';
import { LastFmData } from '../components/lastfm';
import MainLogo from '../public/images/f-logo-large.svg';
import MusicIcon from '../public/images/music-icon.svg';


export default function Home() {
  return (

    <div className="grid-king">

      <div className="area-logo-mark">
        <div className="center-mark">
          <Image className="mark-size" src={MainLogo} alt="A la Fritz logo" />
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
            <p>Designer at <a href="https://www.tremendous.com/">Tremendous</a></p>
          </div>
          <div className="info-column">
            <h5>Location</h5>
            <p>València, Spain</p>
          </div>
          <div className="info-column">
            <h5>Business hours</h5>
            <p>9:00am - 5:00pm CET</p>
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
        <Image className="music-icon" src={MusicIcon} alt="Music icon" />
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



