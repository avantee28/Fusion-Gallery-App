import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <div>
      <Footer bgDark>
        <div className="w-full px-4 lg:px-24">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/yazdanhaider">Github</Footer.Link>
                <Footer.Link href="https://twitter.com/YazdanH7">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="https://github.com/yazdanhaider">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Fusion Gallery" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <p class="chakra-text css-akxq7u"> <span class="css-79wky"><a target="_blank" rel="noopener" class="chakra-link css-f4h6uy" href="https://github.com/yazdanhaider">Team 438</a></span>, Ethnus Project</p>
            <Footer.Icon href="https://github.com/yazdanhaider" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/yazdan-haider/" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/YazdanH7" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
