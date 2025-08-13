'use client'

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-300 py-8 px-4 flex flex-col md:flex-row items-center justify-around ">
      <div className="mb-4 md:mb-0">
        <ul className="space-y-2 text-sm">
          <li>
            📧<span className="text-yellow-400"> Email: support@example.com</span> 
          </li>
          <li>
            📞 <span className="text-yellow-400">Phone: +374 99 123456</span> 
          </li>
          <li>
           📍 <span className="text-yellow-400">Address: Yerevan, Armenia</span> 
          </li>
        </ul>
      </div>
        <p className="text-yellow-400">
                Thank you for choosing us. We will be happy to answer your questions.
            </p>
    </div>
  );
};

export default Footer;

