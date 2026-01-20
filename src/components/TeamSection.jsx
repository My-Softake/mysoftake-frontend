import Image from "next/image";
import React from "react";

const TeamSection = ({ title, members, subtitle }) => {
  return (
    <section>
      <h2 className="text-4xl text-center font-bold">{title}</h2>
      <p className="font-normal text-base w-[500px] text-center mx-auto pt-2 pb-10">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 max-sm:mx-7"
          >
            <div className="relative h-64 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg dark:text-black font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
