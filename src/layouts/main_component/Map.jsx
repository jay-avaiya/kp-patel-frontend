import Search from "../../components/ui/Search";

const Map = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center text-center gap-14 mt-16 mb-8">
      <div className="flex flex-col gap-10 px-12">
        <h1 className="text-[#FF5500] font-semibold text-3xl md:text-4xl xl:text-5xl font-montserrat ">
          Find Us on Map
        </h1>
        <p className=" text-[20px] md:text-[26px] xl:text-[32px] leading-tight">
          Our school is committed to providing quality education and a nurturing
          atmosphere <br /> for every learner. Stay updated with important
          links, student resources, and contact <br /> information.
        </p>
      </div>

      <div className="w-full px-6 md:px-12">
        <div className="relative overflow-hidden border-2 border-[#FF5500] rounded-[13px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.981708039473!2d75.8318182689513!3d25.137880010037424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84e988b23da1%3A0x61f08473d7f759f3!2sTeachers%20Colony%2C%20Mahaveer%20Nagar%2C%20Kota%2C%20Rajasthan%20324009!5e0!3m2!1sen!2sin!4v1763888427616!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-[550px] rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="hidden md:block absolute top-5 right-5 z-10">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
