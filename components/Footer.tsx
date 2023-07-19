"use client";
import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="text-base text-gray-700"
          />
          <p className="text-gray-700">
            Carhub 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              {item.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>                
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
        <p>@2023 CarHub. All rights Reserved</p>
        <div className="footer__copyrights-link ml-10">
          <Link href="/" className="text-gray-500">
            privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;