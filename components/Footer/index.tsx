import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="pb-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              © 2023 {""} | All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
