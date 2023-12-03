import { useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const ref = useRef<any>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="grid grid-rows-2">

      <div className="bg-white grid grid-cols-2 pb-5">

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Dive Deep into the Web of Knowledge</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">In a world overloaded with information, find what truly connects.</p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  to="/query"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <a onClick={handleClick} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          
          <img className="rounded-full" src="https://i.ibb.co/jb037Tm/image.png" alt="" />

        </div>

      </div>

      <div onClick={handleClick} className="bg-white">

        <div>
          <div className="mx-auto max-w-2xl py-15 sm:py-20 lg:py-25 mt-20 pt-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-pointer">
                How it works?
              </h1>
              <ol ref={ref}>
                <li className="mt-6 text-lg leading-8 text-gray-600"> <b>Search</b>: Enter a topic you're interested in and our powerful search engine will scour the web for relevant articles, news, and other sources of information. </li>
                <li className="mt-6 text-lg leading-8 text-gray-600"> <b>Categorize</b>: Organize your search results by adding categories to filter and group similar information, allowing you to easily navigate and analyze the information you've gathered. </li> 
                <li className="mt-6 text-lg leading-8 text-gray-600"> <b>Analyze</b>: Uncover the affiliations of the authors and sources behind the information you've collected, identifying trends and patterns to gain deeper insights into your topic of interest.  </li>
                <li className="mt-6 text-lg leading-8 text-gray-600"> <b>Visualize</b>: Transform your search results into interactive visualizations, enabling you to see the connections and relationships between different pieces of information.  </li>
                <li className="mt-6 text-lg leading-8 text-gray-600"> <b>Learn</b>: Immerse yourself in the curated content and explore the affiliations associated with your topic, gaining a comprehensive understanding of the subject matter.  </li>
              </ol>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  to="/query"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
          
        </div>


      </div>

    </div>
  )
}

export default Hero;
