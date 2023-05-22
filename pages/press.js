import Image from 'next/image';
import Link from 'next/link';
import PressItem from '../components/pressitem';
import PressWorkContent from '../components/press-work';
import PressExtraContent from '../components/press-extra';
import SmallLogo from '../public/images/f-logo-small.svg';


export default function Home() {
    return (

        <div className="grid-press">

            <div className="small-logo-mark">
                <div className="small-center-mark">
                    <Image className="small-mark-size" src={SmallLogo} alt="A la Fritz logo" />
                </div>
            </div>

            <div className="area-back" lang="en">
                <h4><Link href="/">&lt;&lt;&lt;</Link></h4>
            </div>

            <div className="area-pattern-press-top">
                <div className="pattern-4"></div>
            </div>

            <div className="area-pattern-press-middle">
                <div className="pattern-4"></div>
            </div>


            <div className="area-title-press content" lang="en">
                <h1>In the press</h1>
            </div>


            <div className="area-press-work content" lang="en">

                <h3>About my work</h3>
                {PressWorkContent.map((p, i) => (<PressItem content={p} key={i} />))}

            </div>

            <div className="area-press-extra content" lang="en">

                <h3>Awards & Talks</h3>
                {PressExtraContent.map((p, i) => (<PressItem content={p} key={i} />))}

            </div>

        </div>
    );
}



