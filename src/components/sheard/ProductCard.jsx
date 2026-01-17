"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
 

const ProductCard = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-xl shadow-sm group flex flex-col h-full overflow-hidden border border-gray-100">
          <div className="relative h-70 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="font-bold text-xl text-slate-800 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">{project.description}</p>
            <Link href={`/project/${project.id}`}>
              <Button className="!text-black w-full py-3 cursor-pointer hover:!bg-[#0EA5E9] hover:!text-white duration-300 transition-all rounded-xl font-bold uppercase text-sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;