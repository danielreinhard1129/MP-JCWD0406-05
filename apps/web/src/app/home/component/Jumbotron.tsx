import React from 'react';

const LandingPage = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://placekitten.com/502/502')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to MyEvent
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Where every moment is a masterpiece and every gathering is a
          celebration of uniqueness.{' '}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <form className="flex flex-col md:flex-row gap-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for event"
                className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-cyan-600 focus:outline-none focus:border-cyan-600"
              />
              <button
                type="submit"
                className="bg-cyan-600 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
              >
                Search
              </button>
            </div>
            <select
              id="categories"
              name="categories"
              className="w-full h-10 border-2 border-cyan-600 focus:outline-none focus:border-cyan-600 text-cyan-600 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option value="All">All</option>
              <option value="Freemium">Freemium</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
