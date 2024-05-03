import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [service, setServices] = useState([])
  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
    return (
        <div>
            <div className="text-center mt-4">
                <h3 className="text-3xl text-orange-500"> Services</h3>
                <h2 className="text-5xl">Our Sevices Area</h2>
                <p className="mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-1    lg:grid-cols-3 gap-4 m-4 ">
         {
            service.map(ser=><ServiceCard key={ser.service_id} ser={ser}></ServiceCard>)
         }

            </div>
        </div>
    );
};

export default Services;