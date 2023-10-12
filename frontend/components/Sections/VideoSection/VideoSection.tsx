import { Hydrogen, Video } from "@/components/UI";
import imageBackgound from "@/assets/videoBackground.png"
import Image from "next/image";


function VideoSection() {
    return (
        <section className="relative flex flex-col justify-center items-center w-full h-auto py-8 gap-8 px-1 md:py-20">
            <Hydrogen text="Видео" />
            <Image className="-z-10 absolute object-cover w-full h-full" src={imageBackgound} alt="background image" />
            <div className="w-full h-full lg:w-2/3 xl:w-1/2">
                <Video src="/video.mp4" />
            </div>
        </section>
    )
}

export default VideoSection