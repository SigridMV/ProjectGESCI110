export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 text-center mb-12 tracking-tight">
          Resources & Citations
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed text-center max-w-2xl mx-auto mb-10">
          Here are the main resources used for learning and referencing micro-gardening
          and microgreen cultivation techniques. Each link provides practical tips for beginners.
        </p>

        {/* Card container */}
        <section className="grid gap-6 sm:grid-cols-2">
          {[
            {
              href: "https://www.harvestbyhillwood.com/a-beginners-guide-to-micro-gardening/",
              title: "Beginner’s Guide to Micro-Gardening — Harvest by Hillwood",
              description: "Introduction to micro-gardening for small spaces."
            },
            {
              href: "https://themicrogardener.com/easy-guide-to-growing-microgreens/",
              title: "Easy Guide to Growing Microgreens — The Micro Gardener",
              description: "Step-by-step microgreen growing techniques for beginners."
            },
            {
              href: "https://medicgrow.com/blogs/general-tips/how-to-start-your-own-micro-grow-garden",
              title: "How to Start Your Own Micro-Grow Garden — MedicGrow",
              description: "Practical advice on equipment, lighting, and setup."
            }
          ].map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-green-100 dark:border-green-700 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-400 font-semibold text-lg sm:text-xl hover:underline"
              >
                {resource.title}
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
                {resource.description}
              </p>
            </div>
          ))}
        </section>
      </main>


    </div>
  );
}

