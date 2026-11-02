import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 mt-12 text-gray-300 px-6 py-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            UrbanKeys
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            At UrbanKeys, we believe a home is more than just walls and rooms —
            it’s where memories are created and dreams begin. We’re here to help
            you find a place where you truly belong.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Company</h3>
          <ul className="text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            {" "}
            Get updates about new properties and UrbanKeys insights directly
            to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-slate-800 text-gray-200 outline-none"
            />
            <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} UrbanKeys. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
