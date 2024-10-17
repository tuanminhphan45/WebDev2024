import React from "react";

const ServiceBlock = ({
    title,
    imageSrc,
    iconSrc,
    bgColor,
    markColor,
    textColor,
    linkColor,
}) => (
    <section className={`p-10 w-full rounded-lg shadow-lg ${bgColor}`}>
        <div className="flex flex-col">
            <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
                {title.split(" ").map((word, index) => (
                    <mark key={index} className={`p-1 ${markColor} rounded-lg`}>
                        {word}
                    </mark>
                ))}
            </h3>
            <img
                src="/assets/image/Icon.png"
                alt="Icon"
                className="w-10 mb-8"
            />
            <a
                href="#"
                className={`text-lg font-semibold ${linkColor} hover:underline`}
            >
                Learn more
            </a>
        </div>
        <img src={imageSrc} alt={title} className="mt-4" />
    </section>
);

export default ServiceBlock;
