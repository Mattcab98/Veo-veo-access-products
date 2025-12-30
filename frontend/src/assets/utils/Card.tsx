import { Link } from 'react-router-dom';
import Button from '../components/loginHome/Button'

type CategoryCardProps = {
    variant: "category";
    img: string;
    category: string;
}

type ProductCardProps = {
    variant: "product";
    img: string;
    category: string;
    nameProdut: string;
    priceProdut: number;
}

type Props = CategoryCardProps | ProductCardProps

const Card = (props: Props) => {
    return (
        <>

            <div className="
                rounded-3xl w-[90%] mx-auto h-[330px] bg-white/90 my-10 cursor-pointer group flex flex-col justify-between">

                <div className="w-full h-auto overflow-hidden flex-2">
                    <img
                        src={props.img}
                        alt={props.variant === 'product' ? `${props.nameProdut} - ${props.category}` : props.category}

                        className="rounded-t-3xl w-full h-full object-cover filter brightness-95 transition-all duration-300 group-hover:brightness-110" />
                </div>

                <div className='flex flex-col justify-evenly items-center flex-1'>
                    {props.variant === 'category' ? (
                        <>
                            <h2 className='text-2xl font-bold text-gray-600'> {props.category} </h2>
                            <Link to={`/category/${props.category}`}>
                                <Button
                                    nameButton={`Ver ${props.category}`}
                                    type={"button"} />
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className='text-pink-400/90 text-xs font-bold'> {props.category} </span>
                            <h2 className='text-xl font-bold text-gray-600'> {props.nameProdut} </h2>
                            <p className='text-xl font-bold text-gray-600 text-pink-500/90'> ${props.priceProdut} </p>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}
export default Card