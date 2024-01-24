const SectionTwo = () => {
  return (
    <section className="z-20 flex h-[100svh] mx-auto w-full max-w-7xl overflow-hidden sticky top-0">
      <div className="mt-6 max-w-full h-[94%] rounded-xl w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 bg-gray-600 h-[48%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-400 h-[23%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-400 h-[23%] md:h-full rounded-xl"></div>
      </div>
    </section>
  );
};

// bg-white dark:bg-[#020817]

export default SectionTwo;
