import React from 'react'
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link href="/">Landingpage</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Documentation</Link>
            </li>
            <li>
              <Link href="/">Referral Program</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link href="/">Documentation</Link>
            </li>
            <li>
              <Link href="/">Design</Link>
            </li>
            <li>
              <Link href="/">Themes</Link>
            </li>
            <li>
              <Link href="/">Illustrations</Link>
            </li>
            <li>
              <Link href="/">UI Kit</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link href="/">Documentation</Link>
            </li>
            <li>
              <Link href="/">License</Link>
            </li>
            <li>
              <Link href="/">Changelog</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <Image
            src='/vercel.svg'
            width={100}
            height={24}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <Link href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaFacebook className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsTelegram className="w-6 h-auto" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold text-dark-light">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer