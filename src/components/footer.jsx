import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#3e8da8] pb-10 pt-20 dark:bg-dark p-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <h1 className="text-xl font-bold">The Empire tech</h1>
                </a>
                <p className="mb-7 text-base text-body-color dark:text-gray-800">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-gray-600">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {/* SVG path for phone icon */}
                    </svg>
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources" className="p-0">
            <Link href={"/web"}>
              <NavLink  label="Website Development" />
              </Link>
              <Link href={"/app"}>
              <NavLink label="Application Development" />
              </Link>
              <Link href={"/seo"}>
              <NavLink  label="SEO" />
              </Link>
              <Link href={"/wordpress"}>
              <NavLink  label="Wordpress Site" />
              </Link>
            </LinkGroup>

            <LinkGroup header="Company">
            <Link href={"/about"}>
              <NavLink label="About Us" />
              </Link>
              <Link href={"/contact"}>
              <NavLink  label="Contact & Support" />
              </Link>
              <Link href={"/about"}>
              <NavLink  label="Success History" />
              </Link>
              <Link href={"/about"}>
              <NavLink label="Setting & Privacy" />
              </Link>
            </LinkGroup>
            <LinkGroup header="Quick Links">
            <Link href={"/app"}>
              <NavLink link="/#" label="Pricing" />
              </Link>
              <Link href={"/"}>
              <NavLink link="/#" label="Our Services" />
              </Link>
              {/* <NavLink link="/#" label="Know Our Team" /> */}
              {/* <NavLink link="/#" label="Download App" /> */}
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-gray-600">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <Image
                   src="/linkedin.png"
                   alt="picture w"
                   width={500}
      height={500}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full  text-dark hover:border-primary hover:bg-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  />
                   <Image
                   src="/twitter.png"
                   alt="picture w"
                   width={500}
      height={500}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full  text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-gray-300 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  />
                  
                  {/* Add more social media links as needed */}
                </div>
                <p className="text-base text-body-color dark:text-gray-600">
                  &copy; 2025 TailGrids
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for background graphic */}
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for background graphic */}
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-black">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-black leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
