import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import catimg from '../../images/categories/cat-1.png'
import notfound from '../../images/categories/Not-Found.jpg'

function Categories() {
    const categories = [
        { id: 1, name: 'Personal', img: catimg },
        { id: 2, name: 'Aqeeqa', img: "" },
        { id: 3, name: 'Udhyaa', img: "" },
        { id: 4, name: 'Birds & Ostriches', img: "" },
        { id: 5, name: 'Fawalah', img: "" },
        { id: 6, name: 'Productive Families', img: "" },
        { id: 7, name: 'Slaughter Houses', img: catimg },
        { id: 8, name: 'Gifts', img: "" },
        { id: 9, name: 'Chicken', img: "" },
        { id: 10, name: 'Donations', img: catimg },
    ]
    return (<section className='py-10'>
        <div className="container flex flex-col gap-8">
            <h2 className='text-3xl font-bold'>
                Categories
            </h2>
            <div className="relative bg-[#CFDBD3] p-8 rounded-3xl flex flex-col gap-6">
                <Swiper className='w-full'
                    loop={true}
                    spaceBetween={24}
                    navigation={{ nextEl: '.cat-next-btn', prevEl: '.cat-prev-btn' }}
                    breakpoints={{
                        100: { slidesPerView: 3,},
                        768: { slidesPerView: 5,},
                        1024: { slidesPerView: 7,}
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ el: '.cat-swiper-pagination', clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {categories.map(category => <SwiperSlide key={category.id} className='cursor-grab'>
                        <Link to='' className="flex flex-col gap-5">
                            <div className="rounded-full aspect-square overflow-hidden bg-white flex items-center justify-center">
                                <img src={category.img || notfound} width='100' height='100' alt={category.name} className='object-contain' />
                            </div>
                            <h3 className="text-center">
                                {category.name}
                            </h3>
                        </Link>
                    </SwiperSlide>)}


                </Swiper>
                <div className="cat-swiper-pagination"></div>
                <div className="flex justify-between items-center absolute top-1/2 start-0 -translate-y-1/2 w-full z-10 px-3">
                    <button className='cat-prev-btn cat-nav-btn'>
                        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.875 21.1719L11.8125 20.2812C12 20.0469 12 19.6719 11.8125 19.4844L3.32812 11L11.8125 2.46875C12 2.28125 12 1.90625 11.8125 1.67188L10.875 0.78125C10.6406 0.546875 10.3125 0.546875 10.0781 0.78125L0.234375 10.5781C0.046875 10.8125 0.046875 11.1406 0.234375 11.375L10.0781 21.1719C10.3125 21.4062 10.6406 21.4062 10.875 21.1719Z" fill="#262626" />
                        </svg>
                    </button>
                    <button className='cat-next-btn size-12 cat-nav-btn'>
                        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.125 0.828125L0.1875 1.71875C0 1.95312 0 2.32812 0.1875 2.51562L8.67188 11L0.1875 19.5312C0 19.7188 0 20.0938 0.1875 20.3281L1.125 21.2188C1.35938 21.4531 1.6875 21.4531 1.92188 21.2188L11.7656 11.4219C11.9531 11.1875 11.9531 10.8594 11.7656 10.625L1.92188 0.828125C1.6875 0.59375 1.35938 0.59375 1.125 0.828125Z" fill="#262626" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>


    </section>
    )
}

export default Categories