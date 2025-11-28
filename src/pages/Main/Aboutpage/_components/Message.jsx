const Message = () => {
  return (
    <div className="w-full h-fit bg-[#011844] flex flex-col xl:flex-row items-center xl:items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24 gap-12 xl:gap-36 py-16 xl:py-24 mt-30 mx-auto">
      {/* Left side */}
      <div className="relative w-full md:w-[55%] lg:w-[45%] xl:w-[40%] h-[420px] md:h-[520px] lg:h-[600px] xl:h-[690px] border-[8px] md:border-[10px] border-white rounded-[20px] overflow-hidden">
        <h3 className="absolute bg-white rounded-full text-[#011844] text-sm md:text-base lg:text-lg font-medium font-montserrat text-center px-3 py-2 shadow-md shadow-black/25 left-2 top-4">
          Vice Head & Principal
        </h3>

        <img
          src="/trust.png"
          alt="principal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="relative w-full md:w-[90%] lg:w-[80%] xl:w-[60%] text-white flex flex-col gap-8 xl:gap-10">
        {/* Comma Icon */}
        <div className="absolute w-[20px] h-[20px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] -left-5 -top-3 md:-left-14 lg:-left-14 lg:-top-10 md:-top-10">
          <img src="/comma.png" alt="comma" className="w-full h-full" />
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold">
          Principal Message
        </h3>

        {/* Paragraph */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium w-full md:w-[90%] lg:w-[80%] leading-snug">
          Kantaben Manilal Patel Primary School was established with the belief
          that education is the most powerful tool to shape young minds and
          communities.
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-white w-[80%]"></div>

        {/* Points */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-row gap-4 md:gap-6 lg:gap-7 w-full md:w-[95%]"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-full flex justify-center items-center">
              <img
                src="/book.png"
                alt="book"
                className="w-8 h-8 md:w-10 md:h-10 object-cover"
              />
            </div>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-snug">
              Kantaben Manilal Patel Primary School was established with the
              belief.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
