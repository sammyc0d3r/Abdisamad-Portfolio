import './FollowMe.css';
import Button1 from './Button1';

export default function FollowMe() {
  return (
    <div className='FollowMe-Container'>
      <Button1 text={"Hire Me Now"}/> 
      <div className='Social-links'>
      <p>Follow Me On</p>
        <img src="github.png" alt="GitHub Logo" />
        <img src="twitter.png" alt="Twitter Logo" />
        <img src="facebook.png" alt="Facebook Logo" />
        <img src="instagram.png" alt="Instagram Logo" />
      </div>
    </div>
  )
}
