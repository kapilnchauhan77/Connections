function About() {

  return (
      <div className="bg-white grid grid-cols-2">

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Connections</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In today's digital age, vast amounts of information sprawl across the internet. But accessing the right kind of information, particularly the nuanced and interconnected layers, is not always straightforward. Drawing inspiration from journalistic research methodologies, we noticed a pattern. Journalists delve into primary data, then branch out to secondary information linked directly to their main subject, and further into tertiary layers, establishing connections with the secondary data. This expansive search sphere becomes intricate and overwhelming for manual exploration.<br /><br />

                Enter Connections. <br /><br />

                Our platform is designed to harness the power of these intricate relationships. When you search for a topic on Connections, you're not merely skimming the surface; you are immersing yourself into a comprehensive web of information. With advanced analytical techniques, we map out the information universe related to your query, offering you a holistic understanding of your topic of interest. <br /><br />

                Welcome to a world where knowledge isn't just sought but truly connected. <b>Welcome to Connections.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <img className="rounded-full" src={"/image.png"} alt="" />
        </div>

      </div>
  )
}

export default About;
