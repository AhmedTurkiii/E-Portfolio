import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form>
              <div class="my-6">
                <label
                  for="name"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="email"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:torki.ah.dev@gmail.com">
                    Send me email directly
                  </a>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  <a href="mailto:torki.ah.dev@gmail.com">Submit</a>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt--1 md:mt-">
            <div className="mt- mb-12">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold mb-4">Contact Information</h1>

                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.01 6.16l8.99 5.93c.31.2.67.31 1.03.31s.72-.1 1.03-.31l8.99-5.93c.18-.12.38-.16.57-.12.19.04.35.17.45.34.1.16.15.36.12.56l-.02.11v10c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V7c0-.03 0-.06.01-.08-.04-.2.01-.4.12-.57.11-.16.27-.29.45-.33.19-.04.39.01.56.12l.02.11V7v.16zM5 6v.01l7 4.61 7-4.61V6H5zm14 12c.55 0 1-.45 1-1V8.98L12 14.18 4 8.98V17c0 .55.45 1 1 1h14z" />
                  </svg>
                  <a
                    href="mailto:torki.ah.dev@gmail.com"
                    className="font-semibold text-blue-700"
                  >
                    torki.ah.dev@gmail.com
                  </a>
                </div>

                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6-.5-.2-1-.1-1.4.2l-2.2 1.7c-3.2-1.7-5.8-4.4-7.5-7.5l1.7-2.2c.4-.4.5-.9.2-1.4-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1C3 14.7 9.3 21 17 21c.6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                  </svg>
                  <a
                    href="tel:+14083096144"
                    className="font-semibold text-blue-700"
                  >
                    +1 (408) 309-6144
                  </a>
                </div>

                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mr-2 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                  </svg>

                  <p className="font-semibold text-blue-700">
                    San Jose, California
                    <br />
                    USA
                  </p>
                </div>
                <h1 className="text-3xl  font-bold">Social</h1>
                <ul className="flex">
                  {contactLinks.map((el) => (
                    <a
                      href={el.link}
                      className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                    >
                      <img alt="" src={el.url} />
                      {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Ahmed Torki
      </div>
    </div>
  );
};

export default Contact;
