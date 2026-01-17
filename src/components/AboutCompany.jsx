import Image from "next/image";
import { IoVideocamOutline } from "react-icons/io5";

const AboutCompany = () => {
  return (
    <div className="bg-white md:py-10 py-5">
      <div className="container mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
        
        {/* Left Content */}
        <div>
          <h4 className="font-bold text-2xl text-[#27A0DB]">
            ABOUT COMPANY
          </h4>

          <h3 className="font-bold text-4xl lg:text-5xl max-w-[450px] pt-2 leading-tight lg:leading-[60px]">
            You Can not Use Up Creativity.
          </h3>

          <p className="font-normal text-base pt-5 max-w-[500px]">
            We are driven by strong values and a clear vision, our multinational
            company is built on integrity, innovation, and trust. What began
            with local roots has grown into a global presence, connecting
            people, markets, and opportunities across borders. We believe that
            success comes not only from expansion, but from
            responsibility—respecting cultures, empowering communities, and
            delivering consistent excellence worldwide.
          </p>

          <p className="font-normal text-base pt-5 max-w-[500px]">
            We continue to move forward with confidence, shaping a future where
            global reach is guided by shared values and lasting trust.
          </p>

          {/* Feature Items */}
          <div>
            <div className="mt-5 flex gap-5 items-start">
              <Image
                src="/images/experts.png"
                alt="experiance icon"
                height={40}
                width={60}
                className="object-contain"
              />
              <div className="mt-1">
                <h3 className="text-2xl font-medium">
                  Experience
                </h3>
                <p className="font-normal text-base text-gray-600">
                  Our great team of more than 1400 software experts.
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-5 items-start">
              <Image
                src="/images/support.png"
                alt="experiance icon"
                height={40}
                width={60}
                className="object-contain"
              />
              <div className="mt-1">
                <h3 className="text-2xl font-medium">
                  Quick Support
                </h3>
                <p className="font-normal text-base text-gray-600">
                  We’ll help you test bold new ideas while sharing your.
                </p>
              </div>
            </div>

            <div>
              <button className="py-3 px-8 bg-[#0EA5E9] text-white mt-8 flex items-center gap-3">
                <IoVideocamOutline />
                Intro video
              </button>
            </div>
            
          </div>
        </div>

        {/* Right Image */}
        <div className="pt-0 lg:pt-8 flex justify-center">
          <Image
            src="/images/group pik.png"
            alt="group pik"
            height={600}
            width={600}
            className="w-full max-w-[350px] sm:max-w-[450px] md:w-[600px] h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutCompany;
