import Video from "./Video";

const HeroText = () => {
   return (
      <div className="font-lau pt-3 text-center">
         <div className="text-[9.5vw] leading-36 uppercase">The Spark</div>
         <div className="text-[9.5vw] leading-36 uppercase center-flex ">
            Who
            <div className="h-32 w-64 -mt-6 rounded-full overflow-hidden">
               <Video />
            </div>
         </div>
         <div className="text-[9.5vw] leading-36 uppercase">Generates</div>
         <div className="text-[9.5vw] leading-36 uppercase">There</div>
         <div className="text-[9.5vw] leading-36 uppercase">Creativity</div>
      </div>
   );
};
export default HeroText;
