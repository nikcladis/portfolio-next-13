import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="z-10 h-[100svh] mx-auto w-full max-w-7xl overflow-hidden sticky top-0">
      <div className="mt-6 max-w-full h-[94%] flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 h-full w-full md:w-2/3">
          <div className="w-full bg-gray-500 md:h-fit rounded-xl overflow-hidden">
            <Image
              alt="figma prototype"
              src="/prototype-lg.png"
              width={1920}
              height={300}
            />
          </div>
          <div className="w-full bg-gray-500 h-2/5 rounded-xl overflow-hidden"></div>
        </div>
        <div className="w-full md:w-1/3 bg-gray-300 h-[23%] md:h-full rounded-xl">
          Hello
        </div>
        {/* <div className="w-full md:w-1/4 bg-gray-300 h-[23%] md:h-full rounded-xl"></div> */}
      </div>
    </section>
  );
};

export default SectionOne;
