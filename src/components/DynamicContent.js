import React from 'react';

const DynamicContent = () => {
  return (
    <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
      <div className="relative group">
        <div className="flex flex-col items-center">
          <button
            className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-green-500 px-6 py-2 rounded-full text-green-500 font-semibold hover-bg-green-500 hover-text-white transition-all duration-300"
          >
            <span>Account</span>
          </button>
          <div className="lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max">
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              <button className="hover-bg-dark-hard hover-text-white px-4 py-2 text-white lg-text-dark-soft">
                Admin Dashboard
              </button>
              <button className="hover-bg-dark-hard hover-text-white px-4 py-2 text-white lg-text-dark-soft">
                Profile Page
              </button>
              <button className="hover-bg-dark-hard hover-text-white px-4 py-2 text-white lg-text-dark-soft">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContent;
