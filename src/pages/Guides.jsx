export default function Guides() {
  const guides = [
    {
      title: "Basil in Small Pots",
      description: `Learn how to grow aromatic basil in small containers. 
Choose a sunny windowsill or balcony, use well-draining soil, and water moderately. 
Harvest leaves regularly to encourage new growth and prevent the plant from flowering too soon. 
Basil thrives in warmth, so avoid drafts and cold areas.`,
      image: "./basil.jpg",
      videoUrl: "https://www.youtube.com/watch?v=i44x7E86mEY"
    },
    {
      title: "Lettuce in Shallow Containers",
      description: `Growing lettuce in shallow containers is perfect for small spaces. 
Use at least 4-6 inches of soil depth, and make sure the container has good drainage. 
Sow seeds evenly, keep soil moist, and thin seedlings to prevent overcrowding. 
Harvest leaves when they are young and tender for the best flavor.`,
      image: "./lettuce.webp",
      videoUrl: "https://www.youtube.com/watch?v=4xpT2jcTdV8"
    },
    {
      title: "Fast Microgreens Indoors",
      description: `Microgreens are quick to grow and highly nutritious. 
Use shallow trays with seed-starting mix, sprinkle seeds evenly, and cover lightly with soil. 
Keep the soil moist and place trays in a bright spot or under grow lights. 
Most microgreens are ready to harvest in 1-3 weeks, depending on the variety. 
Popular options include radish, broccoli, and mustard greens.`,
      image: "./microgreens.webp",
      videoUrl: "https://www.google.com/search?sca_esv=a06aec7fb01ac89a&sxsrf=AE3TifPAB8gdFhuz0yUbFiDE97ozYZFRRQ:1764823990771&udm=7&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQcG_77B-hmbxHGSx0Fwu3oUGVAxkUj6FedW1OxjKWburj5c6EY9TUE_D_2lyn0c6Y4aF4N78YbTHRk_yp9_wpY27p-2hG34ni-5kly6mc9a1jiHEEs5UeOtFAJo-nojSgyFdYrExr1RO_bAZHsKfxzSG-QOgRBbMaIcVJnvjHdk1oISj8dDPrfeMrGmMkU4bTl_V2Fg&q=Fast+Microgreens+Indoors&sa=X&ved=2ahUKEwjEn77YkaORAxVBlZUCHYXLDPsQtKgLegQIFBAB&biw=1280&bih=559&dpr=1.5#fpstate=ive&vld=cid:da49e075,vid:xPh-Z2-BctM,st:0"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">

      <main className="flex-grow max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-12">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 text-center mb-8 fade-in">
          How-to Guides
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-10 fade-in max-w-3xl mx-auto">
          Simple step-by-step tutorials to help beginners start growing at home.
        </p>

        {/* Guide Cards */}
        <section className="space-y-8">
          {guides.map((guide, index) => (
            <div key={index} className="card max-w-3xl mx-auto flex flex-col items-center text-center p-6 sm:p-8 fade-in hover:shadow-lg transform hover:-translate-y-1 transition">

              {/* Circular Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="px-4 sm:px-6 max-w-xl mx-auto">
                <h3 className="text-2xl font-semibold text-green-700 mb-3">{guide.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                  {guide.description}
                </p>
                {guide.videoUrl && (
                  <a
                    href={guide.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}


