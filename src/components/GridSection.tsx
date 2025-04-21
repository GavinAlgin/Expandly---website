import React from 'react';

const GridSection = () => {
  return (
    <div className="font-sans px-4 py-8 sm:px-6 lg:px-8">
      {/* Grid Section */}
      <div className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded bg-gray-100 p-6">
            <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">Development</h3>
            <p className="mt-2 text-sm text-gray-600">
              Development is our core business! We love solving new and challenging problems when crafting unique solutions. 
            </p>
            <button className="mt-4 rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-600 font-semibold">
              Learn More
            </button>
          </div>

          <div className="rounded bg-gray-100 p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                <path d="M22 13.2644C21.0732 13.0906 20.12 13 19.1472 13C13.7948 13 9.03435 15.7425 6 20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M19 5C15.8705 8.66742 11.1679 11 5.90962 11C4.56437 11 3.25548 10.8473 2 10.5587" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M14.6178 22C14.8684 20.786 15 19.5287 15 18.2407C15 11.9247 11.8343 6.34645 7 3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">Design</h3>
            <p className="mt-2 text-sm text-gray-600">
              We use only modern, responsive and unique designs when representing you and your product.
            </p>
            <button className="mt-4 rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-600 font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded bg-gray-100 p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M21.5 4.5C21.5 5.60457 20.6046 6.5 19.5 6.5C18.3954 6.5 17.5 5.60457 17.5 4.5C17.5 3.39543 18.3954 2.5 19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M20.4711 9.40577C20.5 10.2901 20.5 11.3119 20.5 12.5C20.5 16.7426 20.5 18.864 19.182 20.182C17.864 21.5 15.7426 21.5 11.5 21.5C7.25736 21.5 5.13604 21.5 3.81802 20.182C2.5 18.864 2.5 16.7426 2.5 12.5C2.5 8.25736 2.5 6.13604 3.81802 4.81802C5.13604 3.5 7.25736 3.5 11.5 3.5C12.6881 3.5 13.7099 3.5 14.5942 3.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.5 14.5L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L16.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">Quality Assurance</h3>
            <p className="mt-2 text-sm text-gray-600">
              Through heavy testing we can assure that we did a good job. We test on multiple levels, from the code to the final design.
            </p>
            <button className="mt-4 rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-600 font-semibold">
              Read More
            </button>
          </div>

          <div className="rounded bg-gray-100 p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M12 7.5V16.5M15.8971 9.75L8.10289 14.25M15.897 14.25L8.10275 9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.47867 6.76926C2.20958 10.8137 1.22078 16.4342 4.27013 19.323C6.87609 21.7918 11.5879 21.4667 15.5675 18.7956L20 20.5L18.0841 16.6688C21.8721 12.6801 22.6403 7.43426 19.7299 4.67697C16.6805 1.78811 10.7478 2.72486 6.47867 6.76926Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mt-3">Digital Marketing</h3>
            <p className="mt-2 text-sm text-gray-600">
              Analysis and optimization of your existing web application and mobile application.
            </p>
            <button className="mt-4 rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-600 font-semibold">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
