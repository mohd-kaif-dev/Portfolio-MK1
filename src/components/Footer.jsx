import { RiHeartLine, RiTimeLine, RiCalendarLine } from "@remixicon/react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = dateTime.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = `${
    months[dateTime.getMonth()]
  } ${dateTime.getDate()}, ${dateTime.getFullYear()}`;

  return (
    <footer className="py-8 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center text-sm text-stone-300">
            <RiCalendarLine className="mr-2 text-purple-400" />
            <span>{currentDate}</span>
            <span className="mx-2">|</span>
            <RiTimeLine className="mr-2 text-purple-400" />
            <span>{currentTime}</span>
          </div>

          <div className="text-sm text-stone-400">
            © {currentYear} All rights reserved
          </div>

          <div className="flex items-center text-sm md:text-base">
            <span>Developed with</span>
            <RiHeartLine className="mx-2 text-pink-500 w-5 h-5 animate-pulse" />
            <span>by</span>
            <a
              href="https://github.com/mohd-kaif-dev"
              className="ml-2 font-medium hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohd.Kaif
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
