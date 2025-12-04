import { useNavigate } from "react-router-dom";

export default function StoryCard({ name, image, text, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <div
      className="bg-gray-100 p-6 rounded-xl shadow-md text-center flex flex-col items-center max-w-md w-full mx-auto"
    >
      <img
        src={image}
        alt={name}
        className="story-img rounded-full mb-4 shadow-md"
      />

      <h3 className="text-xl font-bold mb-2">{name}</h3>

      <p className="mb-4 italic">“{text}”</p>

      <button
        onClick={handleClick}
        className="mt-auto px-6 py-2 bg-green-600 text-white rounded-lg"
      >
        Read Story
      </button>
    </div>
  );
}



