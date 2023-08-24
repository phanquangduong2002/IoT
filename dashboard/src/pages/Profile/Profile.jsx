import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import Header from "../../components/Header/Header";
import Avatar from "../../assets/images/avt.jpg";

const Profile = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const location = useLocation().pathname;

  return (
    <div className="col-span-10 my-6 pr-9">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
        <Header location={location} />

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-red-500 text-2xl lg:text-3xl pt-6 pb-2 flex justify-center lg:justify-start">
                Hello, I'm
              </h3>
              <h1 className="py-1 lg:py-4 flex justify-center lg:justify-start">
                <span className="text-2xl font-medium lg:text-5xl">
                  Phan Quang Duong
                </span>
              </h1>
              <h3 className="py-3 text-2xl flex justify-center lg:justify-start">
                <span className="mr-2">A</span>
                <span className="text-green-500">Web Developer</span>
              </h3>
              <h3 className="py-2 text-textColor text-center lg:text-left">
                I'm web developer in Viet Nam, and I'm very passionate and
                dedicated to my work.
              </h3>
              <div className="py-5 flex items-center justify-center lg:justify-start gap-7 lg:gap-10">
                <button className="rounded-full border-[2px] border-red-500 bg-red-500 text-white px-4 py-2 cursor-pointer text-lg hover:bg-transparent hover:text-black transition-all duration-[200ms] ease-in-out">
                  <a href="https://quangduong-dev.vercel.app/" target="_blank">
                    View Portfolio
                  </a>
                </button>
                <div className="flex gap-4 text-xl">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/phan.q.duong.811"
                    target="_blank"
                  >
                    <BsFacebook />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/phanquangduong2002"
                    target="_blank"
                  >
                    <BsGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/quangduongg_"
                    target="_blank"
                  >
                    <BsInstagram />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/quangduong202"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex items-center justify-center">
              <div className=" h-[260px] lg:h-[320px] relative before:absolute before:content before:top-2 before:bottom-2 before:left-2 before:right-2 before:border-[1px] before:border-white before:rounded-sm">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
