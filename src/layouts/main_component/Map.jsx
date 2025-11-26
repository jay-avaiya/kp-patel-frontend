import Search from "../../components/ui/Search";

const Map = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center text-center py-[35px] mt-48 mb-8">
      <div>
        <h1 className="text-[#FF5500] font-semibold text-5xl font-montserrat mb-[17px]">
          Find Us on Map
        </h1>
        <p className="text-[32px] leading-tight">
          Our nurturing environment encourages every student to think <br />
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      <div className="mt-[52px] relative w-full max-w-[1890px] px-4">
        <div className="relative w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.981708039473!2d75.8318182689513!3d25.137880010037424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84e988b23da1%3A0x61f08473d7f759f3!2sTeachers%20Colony%2C%20Mahaveer%20Nagar%2C%20Kota%2C%20Rajasthan%20324009!5e0!3m2!1sen!2sin!4v1763888427616!5m2!1sen!2sin"
            className="w-full h-[550px] rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute top-5 right-5 z-10">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
