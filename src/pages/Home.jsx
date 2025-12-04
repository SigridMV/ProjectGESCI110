import Hero from "../components/Hero";
import GuideCard from "../components/GuideCard";
import VideoCard from "../components/VideoCard";
import StoryCard from "../components/StoryCard";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Micro-Garden Guides</h2>

          <div className="grid-cards">
            <GuideCard
              title="Micro-Garden with Plastic Bottles"
              description="Reuse plastic bottles to create a simple vertical garden."
              image="/guide1.jpg"
              link="https://www.youtube.com/watch?v=fnR9eGiGm-s"
            />
            <GuideCard
              title="Grow Lettuce Without Soil"
              description="A low-cost hydroponic method anyone can start at home."
              image="/guide2.jpg"
              link="https://www.youtube.com/watch?v=F5XxQM5G5Fg"
            />
            <GuideCard
              title="Cardboard Seed Starters"
              description="Make biodegradable seed starters using items you already have."
              image="/guide3.jpg"
              link="https://www.google.com/search?q=Cardboard+Seed+Starters&oq=Cardboard+Seed+Starters&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yBwgCEAAY7wUyBwgDEAAY7wUyBwgEEAAY7wUyBwgFEAAY7wUyCggGEAAYgAQYogTSAQczNTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:11538f88,vid:ZTFklqEiIQ8,st:0"
            />
          </div>
        </div>
      </section>

      <section id="videos" className="py-28 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">
          Beginner-Friendly Videos
        </h3>

        <div className="grid-cards">
          <VideoCard
            src="https://www.youtube.com/embed/cRGXjnePC2k?si=dASHPI_sEhtjxG1o"
            title="Micro-Gardens for Beginners"
          />

          <VideoCard
            src="https://www.youtube.com/embed/NE0nDSkISbY?si=-h3sBwf50Ui10ZaO"
            title="Grow Food Indoors"
          />

          <VideoCard
            src="https://www.youtube.com/embed/i7xNm-om-Mk?si=edms1u5_eJwrknGF"
            title="Easy Vertical Garden"
          />
        </div>
      </section>

      <section  className="section-real">
        <h3 className="real">Real Stories</h3>

        <div id="stories" className="flex justify-center">
          <StoryCard
            name="Rosita"
            image="/rosita.jpeg"
            text="I never thought I could grow food in my house. Now I have fresh lettuce, tomato and vegetables all year."
            link="/testimony" 
          />
        </div>
      </section>
    </>
  );
}
