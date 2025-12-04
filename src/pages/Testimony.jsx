export default function Testimony() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-md w-full">
        <div className="card flex flex-col items-center p-6">
          {/* Nombre / título */}
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Rosita's Testimony
          </h2>

          {/* Texto breve */}
          <p className="text-gray-700 mb-4 text-center italic">
            “I never thought I could grow food in my house. Now I have fresh
            lettuce, tomato and vegetables all year.”
          </p>

          {/* Texto completo */}
          <p className="text-gray-700 text-center mb-6">
            Growing food at home has changed my daily life. I feel more
            connected to nature, save money, and enjoy healthier meals. It’s
            truly empowering to see tiny seeds grow into something nourishing.
          </p>

          {/* Video de YouTube */}
          <div className="w-full aspect-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/W-B8kcKbA64?si=lXUpaMYu9QPvmbf2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
