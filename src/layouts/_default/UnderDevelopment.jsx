import React from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" px-6  h-screen flex bg-primary dark:bg-secondary   items-center justify-center">
        <div className="text-center  flex justify-center items-center flex-col">
          <h1 className="text-9xl dark:text-primary text-secondary  font-bold  ">
            503
          </h1>
          <p className="text-2xl font-light text-secondary  dark:text-primary/70  mt-4">
            Page is Under Development
          </p>
          <p className=" dark:text-primary/60 text-secondary/50  mt-4 mb-8">
            The page you are looking for is under development and will be ready
            soon.
          </p>

          <Button onClick={() => navigate("/")}>Go Back To Homepage</Button>
        </div>
      </div>
    </>
  );
};

export default UnderDevelopment;
