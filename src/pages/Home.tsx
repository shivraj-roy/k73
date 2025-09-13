import HeroText from "../components/HeroText";
import Video from "../components/Video";

const Home = () => {
   return (
      <>
         <div className="full-screen fixed">
            <Video />
         </div>
         <div className="relative full-screen flex flex-col">
            <HeroText />
         </div>
      </>
   );
};
export default Home;
