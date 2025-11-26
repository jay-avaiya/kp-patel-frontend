import { Globe, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import MainButton from "../../components/ui/MainButton";
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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-fit flex items-center justify-center mt-32">
      <div className="w-[1624px] h-[1611px] bg-[#011844] rounded-[83px] gap-20 flex justify-center items-center">
        {/* left side */}
        <div className="w-[436px] flex flex-col items-center">
          <h3 className="font-montserrat font-bold text-white text-5xl">
            Get In Touch
          </h3>

          {/* boxes */}
          <div className="w-full h-[1328px] flex flex-col items-center justify-center gap-y-7.5">
            {/* Box 1 */}
            <div className="bg-white w-[351px] h-[272px] rounded-2xl pl-[30px]">
              <div className="h-[139px] w-[235px] my-[67px] space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <Globe className="text-[#F94223] w-9 h-9" />
                  <h4 className="font-inter font-semibold text-3xl text-[#FF5500]">
                    Website
                  </h4>
                </div>
                <p className="font-inter text-3xl">WWW. Kantabe Manilal</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white w-[351px] h-[272px] rounded-2xl pl-[30px]">
              <div className="h-[139px] w-[235px] my-[67px] space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <PhoneOutgoing className="text-[#A2C506] w-9 h-9" />
                  <h4 className="font-inter font-semibold text-3xl text-[#A2C506]">
                    Phone No.
                  </h4>
                </div>
                <p className="font-inter text-3xl">+91 9462943415</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white w-[351px] h-[272px] rounded-2xl pl-[30px]">
              <div className="h-[139px] w-[235px] my-[67px] space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <Mail className="text-[#19C2FB] w-9 h-9" />
                  <h4 className="font-inter font-semibold text-3xl text-[#19C2FB]">
                    Email
                  </h4>
                </div>
                <p className="font-inter text-[26px] text-center">
                  boskein47@gmail.com
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white w-[351px] h-[272px] rounded-2xl pl-[30px]">
              <div className="h-[139px] w-[235px] my-[67px] space-y-3">
                <div className="flex items-center gap-4 p-2">
                  <MapPin className="text-[#5065FF] w-9 h-9" />
                  <h4 className="font-inter font-semibold text-3xl text-[#5065FF]">
                    Location
                  </h4>
                </div>
                <p className="font-inter text-[16px]">
                  8, Sector-6, Shopping Centre, Pratap Nagar, Jaipur - 302001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <form
          className="bg-white w-[827px] h-[1259px] rounded-[50px] flex flex-col items-center justify-center p-12 gap-y-[50px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-montserrat font-bold text-5xl text-[#FF5500]">
            Send Us a Message
          </h3>

          <div className="flex flex-col w-full gap-[50px]">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Name"
                className="text-black placeholder-[#707070CC] outline-none h-19 rounded-full px-12 text-2xl font-inter shadow-b shadow-xl"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 px-12">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Your Email"
                className="text-black placeholder-[#707070CC] outline-none h-19 rounded-full px-12 text-2xl font-inter shadow-b shadow-xl"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 px-12">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Number"
                className="text-black placeholder-[#707070CC] outline-none h-19 rounded-full px-12 text-2xl font-inter shadow-b shadow-xl"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-red-500 px-12">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Subject"
                className="text-black placeholder-[#707070CC] outline-none h-19 rounded-full px-12 text-2xl font-inter shadow-b shadow-xl"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500 px-12">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <textarea
                rows={7}
                placeholder="Enter Message"
                className="resize-none text-black placeholder-[#707070CC] outline-none rounded-[50px] px-12 text-2xl font-inter shadow-b shadow-xl"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500 px-12">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          {isSubmitSuccessful && (
            <span className="text-green-600 text-xl font-semibold">
              Message sent successfully!
            </span>
          )}

          <MainButton
            title={isSubmitting ? "Sending..." : "Send Message"}
            style="w-full"
            type={"submit"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
