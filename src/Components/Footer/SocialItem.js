import { Link } from 'react-router-dom'

function SocialItem({ link, img, width, height, alt }) {
  return (
    <>
      <Link to={link} className='footer-social-item'>
        <img src={img} width={width} height={height} alt={alt} />
        <span className='sr-only'>Whats App</span>
      </Link>
    </>
  )
}

export default SocialItem