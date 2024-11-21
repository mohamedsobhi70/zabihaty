import logo from '../../images/icons/logo.svg'
import mobmenu from '../../images/icons/mobilemenu.svg'
import closemenu from '../../images/icons/close.svg'
import search from '../../images/icons/search.svg'
import home from '../../images/icons/home.svg'
import account from '../../images/icons/account.svg'
import cart from '../../images/icons/cart.svg'
import notification from '../../images/icons/notification.svg'
import menu from '../../images/icons/menu.svg'
import { Link } from 'react-router-dom'
function Header() {
    const handleMobMenu = () => {
        document.querySelector(".mobile-menu-container").classList.toggle("show")
    }
    return (
        <header className='zab-header'>
            <div className="container flex items-center justify-between py-4">
                <span className="text-[#404040] text-xs">
                    208 - Sheikh Zayed Bin Sultan St - Z....
                </span>
                <div className="flex items-center gap-4">
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link to="/">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8923 4.02249C17.9044 4.19269 17.9044 4.36288 17.9044 4.53465C17.9044 9.76837 13.7939 15.8045 6.27747 15.8045V15.8013C4.0571 15.8045 1.88286 15.188 0.0136719 14.0256C0.336531 14.0633 0.661009 14.0821 0.986296 14.0829C2.82635 14.0845 4.61381 13.486 6.06142 12.3841C4.3128 12.3519 2.77942 11.2468 2.24375 9.63347C2.85629 9.74798 3.48744 9.72445 4.08866 9.56524C2.18225 9.1919 0.810705 7.56837 0.810705 5.68288C0.810705 5.66563 0.810705 5.64916 0.810705 5.63269C1.37874 5.93935 2.01475 6.10955 2.66533 6.12837C0.869775 4.96524 0.316302 2.64994 1.40059 0.839746C3.47531 3.31426 6.5364 4.81857 9.82244 4.97779C9.49311 3.6021 9.94301 2.16053 11.0046 1.19347C12.6505 -0.306136 15.239 -0.229273 16.7862 1.36524C17.7013 1.19033 18.5785 0.864844 19.3812 0.403668C19.0761 1.32053 18.4377 2.09935 17.5848 2.59426C18.3948 2.50171 19.1862 2.29151 19.9314 1.97073C19.3828 2.76759 18.6918 3.46171 17.8923 4.02249Z" fill="#525252" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8923 4.02249C17.9044 4.19269 17.9044 4.36288 17.9044 4.53465C17.9044 9.76837 13.7939 15.8045 6.27747 15.8045V15.8013C4.0571 15.8045 1.88286 15.188 0.0136719 14.0256C0.336531 14.0633 0.661009 14.0821 0.986296 14.0829C2.82635 14.0845 4.61381 13.486 6.06142 12.3841C4.3128 12.3519 2.77942 11.2468 2.24375 9.63347C2.85629 9.74798 3.48744 9.72445 4.08866 9.56524C2.18225 9.1919 0.810705 7.56837 0.810705 5.68288C0.810705 5.66563 0.810705 5.64916 0.810705 5.63269C1.37874 5.93935 2.01475 6.10955 2.66533 6.12837C0.869775 4.96524 0.316302 2.64994 1.40059 0.839746C3.47531 3.31426 6.5364 4.81857 9.82244 4.97779C9.49311 3.6021 9.94301 2.16053 11.0046 1.19347C12.6505 -0.306136 15.239 -0.229273 16.7862 1.36524C17.7013 1.19033 18.5785 0.864844 19.3812 0.403668C19.0761 1.32053 18.4377 2.09935 17.5848 2.59426C18.3948 2.50171 19.1862 2.29151 19.9314 1.97073C19.3828 2.76759 18.6918 3.46171 17.8923 4.02249Z" fill="#525252" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8923 4.02249C17.9044 4.19269 17.9044 4.36288 17.9044 4.53465C17.9044 9.76837 13.7939 15.8045 6.27747 15.8045V15.8013C4.0571 15.8045 1.88286 15.188 0.0136719 14.0256C0.336531 14.0633 0.661009 14.0821 0.986296 14.0829C2.82635 14.0845 4.61381 13.486 6.06142 12.3841C4.3128 12.3519 2.77942 11.2468 2.24375 9.63347C2.85629 9.74798 3.48744 9.72445 4.08866 9.56524C2.18225 9.1919 0.810705 7.56837 0.810705 5.68288C0.810705 5.66563 0.810705 5.64916 0.810705 5.63269C1.37874 5.93935 2.01475 6.10955 2.66533 6.12837C0.869775 4.96524 0.316302 2.64994 1.40059 0.839746C3.47531 3.31426 6.5364 4.81857 9.82244 4.97779C9.49311 3.6021 9.94301 2.16053 11.0046 1.19347C12.6505 -0.306136 15.239 -0.229273 16.7862 1.36524C17.7013 1.19033 18.5785 0.864844 19.3812 0.403668C19.0761 1.32053 18.4377 2.09935 17.5848 2.59426C18.3948 2.50171 19.1862 2.29151 19.9314 1.97073C19.3828 2.76759 18.6918 3.46171 17.8923 4.02249Z" fill="#525252" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <span className="text-[#4F4F4F] text-xs">
                        English
                    </span>
                </div>
            </div>
            <div className="bg-white py-5 ">
                <div className='container flex justify-between items-center gap-10 '>
                    <Link to='/'>
                        <img src={logo} width='69' height='69' alt='Logo' />
                    </Link>

                    <button onClick={handleMobMenu} className='lg:hidden'>
                        <img src={mobmenu} width='32' height='32' alt='Mobile Menu' />
                        <span className='sr-only'>mobile menu</span>
                    </button>

                    <div className='mobile-menu-container'>
                        <div className='p-6 flex justify-end lg:hidden'>
                            <button onClick={handleMobMenu} className='lg:hidden'>
                                <img src={closemenu} width='40' height='40' alt='Close Mobile Menu' />
                                <span className='sr-only'>Close mobile menu</span>
                            </button>
                        </div>
                        <div className='p-8 lg:p-0 lg:grow'>
                            <div className='flex items-center gap-2 border border-[#D4D4D4] rounded-lg overflow-hidden py-2.5 px-3.5'>
                                <button>
                                    <img src={search} width='24' height='25' alt='Search' />
                                </button>
                                <input type='search' className='grow focus:outline-none' />
                            </div>
                        </div>

                        <nav>
                            <ul className='flex flex-col lg:flex-row lg:items-center lg:gap-6 '>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>
                                        Home
                                        <img src={home} width='24' height='25' alt='Home' />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/account'>
                                        Account
                                        <img src={account} width='24' height='25' alt='Account' />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/cart'>
                                        Cart
                                        <img src={cart} width='24' height='25' alt='Cart' />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/notification'>
                                        Notification
                                        <img src={notification} width='24' height='25' alt='Notification' />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/menu'>
                                        Menu
                                        <img src={menu} width='24' height='25' alt='Menu' />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header