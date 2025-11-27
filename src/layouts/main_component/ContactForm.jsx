import { Globe, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .matches(/^[a-zA-Z ]*$/, "Name must contain only letters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),

  message: Yup.string()
    .min(20, "Message must be at least 20 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="w-full flex items-center justify-center py-10 px-4">
      <div className=" bg-[#011844] rounded-[40px] flex flex-col lg:flex-row w-full max-w-[1624px] items-center lg:items-start justify-center gap-10 lg:gap-20 py-10 md:py-20 px-4 md:px-16 xl:px-28">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
          <h3
            className="
            font-montserrat font-bold text-white 
            text-3xl md:text-4xl lg:text-5xl
            mb-6
          "
          >
            Get In Touch
          </h3>

          {/* Boxes hidden on small screens */}
          <div className="hidden lg:flex flex-col items-center lg:items-start gap-8 mt-4">
            {/* Box 1 */}
            <div className="bg-white w-[300px] lg:w-[351px] rounded-2xl px-[30px] py-[50px]">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <Globe size={36} className="text-[#F94223]" />
                  <h4 className="font-inter font-semibold text-2xl lg:text-3xl text-[#FF5500]">
                    Website
                  </h4>
                </div>
                <p className="font-inter text-xl lg:text-3xl">
                  WWW. Kantabe Manilal
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white w-[300px] lg:w-[351px] rounded-2xl px-[30px] py-[50px]">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <PhoneOutgoing size={36} className="text-[#A2C506]" />
                  <h4 className="font-inter font-semibold text-2xl lg:text-3xl text-[#A2C506]">
                    Phone
                  </h4>
                </div>
                <p className="font-inter text-xl lg:text-3xl">+91 9462943415</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white w-[300px] lg:w-[351px] rounded-2xl px-[30px] py-[50px]">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <Mail size={36} className="text-[#19C2FB]" />
                  <h4 className="font-inter font-semibold text-2xl lg:text-3xl text-[#19C2FB]">
                    Email
                  </h4>
                </div>
                <p className="font-inter text-lg lg:text-2xl">
                  boskein47@gmail.com
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white w-[300px] lg:w-[351px] rounded-2xl px-[30px] py-[50px]">
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <MapPin size={36} className="text-[#5065FF]" />
                  <h4 className="font-inter font-semibold text-2xl lg:text-3xl text-[#5065FF]">
                    Location
                  </h4>
                </div>
                <p className="font-inter text-sm lg:text-lg">
                  8, Sector-6, Shopping Centre, Pratap Nagar, Jaipur - 302001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            bg-white 
            w-full max-w-[330px]
            md:max-w-[410px]
            lg:max-w-[630px]
            xl:max-w-[827px]
            rounded-[40px]
            flex flex-col items-center 
            p-6 md:p-10 lg:p-12 xl:p-14
            gap-6 md:gap-8 lg:gap-10
          "
        >
          <h3
            className="
            font-montserrat font-bold 
            text-[#FF5500]
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          "
          >
            Send Us a Message
          </h3>

          {/* INPUT FIELDS */}
          <div className="flex flex-col w-full gap-5 md:gap-7 lg:gap-10">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Name"
                className="text-black placeholder-[#707070CC] outline-none h-10 md:h-14 lg:h-16 xl:h-20 rounded-full px-5 md:px-7 lg:px-10 xl:px-12 text-sm md:text-lg lg:text-xl xl:text-2xl font-inter shadow-lg"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-[10px] md:text-sm px-2 md:px-4">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Your Email"
                className="text-black placeholder-[#707070CC] outline-none h-10 md:h-14 lg:h-16 xl:h-20 rounded-full px-5 md:px-7 lg:px-10 xl:px-12 text-sm md:text-lg lg:text-xl xl:text-2xl font-inter shadow-lg"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] md:text-sm px-2 md:px-4">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Number"
                className="text-black placeholder-[#707070CC] outline-none h-10 md:h-14 lg:h-16 xl:h-20 rounded-full px-5 md:px-7 lg:px-10 xl:px-12 text-sm md:text-lg lg:text-xl xl:text-2xl font-inter shadow-lg"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-red-500 text-[10px] md:text-sm px-2 md:px-4">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Subject"
                className="text-black placeholder-[#707070CC] outline-none h-10 md:h-14 lg:h-16 xl:h-20 rounded-full px-5 md:px-7 lg:px-10 xl:px-12 text-sm md:text-lg lg:text-xl xl:text-2xl font-inter shadow-lg"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500 text-[10px] md:text-sm px-2 md:px-4">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <textarea
                placeholder="Enter Message"
                rows={5}
                className="resize-none text-black placeholder-[#707070CC] outline-none rounded-[30px] px-5 md:px-7 lg:px-10 xl:px-12 py-3 md:py-4 text-sm md:text-lg lg:text-xl xl:text-2xl font-inter shadow-lg"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500 text-[10px] md:text-sm px-2 md:px-4">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <span className="text-green-600 text-sm md:text-lg font-semibold">
              Message sent successfully!
            </span>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full bg-[#F24F35] 
              text-white font-montserrat
              rounded-full 
              py-2 md:py-3 lg:py-4 
              text-sm md:text-lg lg:text-xl xl:text-2xl
              font-semibold 
              border border-transparent
              hover:bg-transparent hover:text-[#F24F35] hover:border-[#F24F35]
              transition-all duration-300
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
