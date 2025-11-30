const Curve = ({ title }) => {
  return (
    <div
      className="relative w-full h-[160px] md:h-[240px] lg:h-[300px] xl:h-[380px] 2xl:h-[440px] bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: "url('/curve.png')" }}
    >
      <h3
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/16 text-white font-montserrat 
                    text-lg md:text-[28px] lg:text-[36px] xl:[42px] 2xl:text-[56px] font-semibold"
      >
        {title}
      </h3>
    </div>
  );
};

export default Curve;
