export default function VideoCard({ src, title }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md card fade-in">
      <iframe
        className="rounded-lg mb-4 object-cover w-full h-56"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
    </div>
  );
}

