import React from "react";
import ServiceBlock from "./ServiceBlock";

const ServiceRow = ({ services }) => (
    <div className="  grid grid-cols-2 gap-8 mx-auto max-w-6xl justify-items-center">
        {services.map((service, index) => (
            <ServiceBlock key={index} {...service} />
        ))}
    </div>
);

export default ServiceRow;
