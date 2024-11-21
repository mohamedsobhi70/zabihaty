import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'

function PageNotFound() {

  return (
    <div className='container flex flex-col gap-12 items-center'>
      <img src={notfound} width='592' height='395' alt='404 Not Found' />
      <div className='flex flex-col gap-6 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-5xl text-[#1F2937] font-bold text-center '>
          404 Error
        </h2>
        <p className='leading-6 text-[#4B5563] text-center'>
          Sorry! We could not find you the page you are looking for. Please check URL in address bar and try again.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-4 items-center'>
          <Link to='/' className='primary-btn py-4 px-8'>
            Go to Homepage
          </Link>
          <Link to='/contactsupport' className='secondary-btn py-4 px-8'>
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
