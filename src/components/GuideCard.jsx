export default function GuideCard({ title, image, description, link }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md card fade-in flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 object-cover w-full h-56"
        />
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-4 py-2 bg-green-600 text-white rounded-lg text-center hover:bg-green-700 transition"
        >
          Learn More
        </a>
      )}
    </div>
  );
}


