const Transaction = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
      <a
        href="#"
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
      >
        <div className="flex-1">
          <h5 className="mb-3 text-xl font-bold lg:text-2xl">Compare Plans</h5>
          <p className="mb-6 text-lg text-gray-600">
            Find out what plan is right for you
          </p>
          <span className="flex items-baseline text-lg font-bold text-indigo-600">
            View price comparison
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Transaction;
