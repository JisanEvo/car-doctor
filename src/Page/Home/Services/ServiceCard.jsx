import { FaArrowAltCircleRight } from "react-icons/fa";


const ServiceCard = ({ser}) => {
    const {title,img,price}=ser
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={ser.img}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
{
    title
}
                </h2>

                <div className="card-actions justify-evenly">
                <button className="text-2xl text-orange-600">
                     $:{price}
                    </button>
                    <button className="btn "><FaArrowAltCircleRight />
</button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;