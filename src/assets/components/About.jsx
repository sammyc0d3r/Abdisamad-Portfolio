import './About.css';
import Button1 from './Button1';
import Heroimage from './Heroimage';
import Qualifications from './Qualifications';
import FollowMe from './FollowMe';

export default function About() {
    return (
        <div className='About-Container' id='About'>
            <div className='Imagediv'>
            <Heroimage/>
            </div>

            <div className='Headersdiv2'>
                <p>ABOUT ME</p>     
                <h1 className='about-header'>LOOKING FOR CREATIVE <br/>DESIGNER? I CAN HELP YOU!</h1>
                <p>I have been designing sites and apps for 12 years and i know for sure the main trends <br />
                and directions of modern design, i have been a visionary and reliable software <br /> engineering partner for world-class brands.</p>
                <Qualifications List1={"High Quality Service"} List2={"Best Price in Marketplace"}/>  
                <Qualifications List1={"High Quality Service"} List2={"Best Price in Marketplace"}/> 
                <div className='Contact-Links'>
                <FollowMe/>
                </div>
                
            </div>

            
        </div>
    );
}