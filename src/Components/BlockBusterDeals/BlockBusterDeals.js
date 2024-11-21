import { Link } from "react-router-dom";
import Dealsicn from '../../images/Dealsicn.png'
import Dealsbg from '../../images/dealsbg.png'
const BlockBusterDeals = () => {
    return <section className="py-10">
        <div className="container">
        <div className="container overflow-hidden rounded-3xl relative">
            <img src={Dealsbg} width='1296' height='848' alt="Dealsbg" className="absolute inset-0 size-full object-cover object-top mix-blend-soft-light" />
            <div className="flex flex-col gap-6 items-center relative py-12">
                <img src={Dealsicn} width='60' height='78' alt="Deals" />
                <div className="flex flex-col gap-4">
                    <h2 className="text-center text-[#171717] text-4xl font-bold">
                        Block  Buster Deals
                    </h2>
                    <p className="text-center text-[#404040]">
                        Become a special customer now
                    </p>
                </div>
                <Link to='/' className="py-3 px-6 rounded-lg border border-[#262626] text-[#171717]">
                    Sbuscribe Now
                </Link>

            </div>
            </div>
        </div>

    </section>;
};

export default BlockBusterDeals;
