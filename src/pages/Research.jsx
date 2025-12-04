export default function Research() {
  const researchQuestions = [
    {
      question: "Q1: What foods grow best in small containers?",
      answer:
        "Herbs like basil and mint, leafy greens like lettuce, and microgreens grow exceptionally well in compact spaces.",
      image: "./hierbas.jpg",
    },
    {
      question: "Q2: What low-cost materials are best for beginners?",
      answer:
        "Recycled containers, coconut coir, seed-starting mix, and spray bottles offer cheap and effective solutions.",
      image: "./pots.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 text-center mb-8 fade-in">
            Research & Beginner’s Guide to Micro Gardening
          </h2>

          {/* Introduction */}
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto fade-in">
            Planting and harvesting crops has been a way of life for thousands
            of years. Micro gardening allows anyone to grow vegetables, herbs,
            and flowers in small spaces like balconies, kitchen counters,
            patios, or tiny yards. Here’s how to get started!
          </p>
        </div>

        {/* Research Questions */}
        <section className="space-y-8 fade-in">
          {researchQuestions.map((item, index) => (
            <div
              key={index}
              className="card flex flex-col items-center text-center p-6 sm:p-8"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.question}
                className="rounded-xl object-cover w-48 h-32 mb-4"
              />

              {/* Text */}
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Guide content */}
        <section className="card space-y-6 fade-in p-6 sm:p-8">
          <h3 className="text-3xl font-bold text-green-700 text-center">
            What Is Micro Gardening?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            Micro gardening involves planting vegetables, fruits, and flowers in
            small spaces where plants would not ordinarily grow. You can start
            on balconies, kitchen counters, patios, or small yards.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            Suitable plants include microgreens, lettuce, peas, spinach,
            cabbage, and herbs like basil, dill, and oregano. Microgreens are
            harvested young and add flavor and nutrition to meals.
          </p>

          <h3 className="text-3xl font-bold text-green-700 text-center">
            How To Make A Micro Garden
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 max-w-3xl mx-auto text-left">
            <li>
              <strong>Initial Design:</strong> Choose location carefully based
              on plant type and sun exposure.
            </li>
            <li>
              <strong>Containers:</strong> Standard pots, hanging baskets,
              raised beds, old tubs, milk crates, or window boxes. Ensure proper
              drainage.
            </li>
            <li>
              <strong>Germinating Seeds:</strong> Soak seeds, use potting mix,
              keep soil moist, provide warmth and light, rotate containers to
              avoid leaning.
            </li>
            <li>
              <strong>Transplanting:</strong> Thin seedlings as needed,
              transplant outside if desired, harvest microgreens in a few weeks.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
