'use client'
// import { useRef } from 'react';
import Image from "next/image";
import CenterImage from "@/assets/webexample-main.png";
import ImageFirst from "@/assets/webexample1.png";
import ImageSecond from "@/assets/webexample2.png";
import ImageThird from "@/assets/webexample3.png";
import ImageFourth from "@/assets/webexample4.png";
import ImageFifth from "@/assets/webexample5.png";


const settingsBackgroundImage = [
    {
        src: ImageFirst,
        alt: 'background image',
        transform: {
            coefficient: 0.15
        },
        className: "w-1/3 left-1 top-6 -z-10 md:top-12",
    },
    {
        src: ImageSecond,
        alt: 'background image',
        transform: {
            coefficient: 0.345
        },
        className: "w-1/3 right-6 top-0 md:w-1/4 md:right-16",
    },
    {
        src: ImageThird,
        alt: 'background image',
        transform: {
            coefficient: 0.145
        },
        className: "w-1/3 right-1 top-32 md:top-60 lg:top-96",
    },
    {
        src: ImageFourth,
        alt: 'background image',
        transform: {
            coefficient: 0.08
        },
        className: "w-1/3 top-20 left-6 md:top-44 md:left-16 lg:top-60 lg:left-24 xl:top-72",

    },
    {
        src: ImageFifth,
        alt: 'background image',
        transform: {
            coefficient: 0.135
        },
        className: "w-1/3 w-1/4 left-16 top-0 md:left-32 lg:left-48 xl:left-64",
    }
]

/**
 * Generates a parallax effect on the page based on the user's scroll position.
 *
 * @return {JSX.Element} The JSX element representing the parallax effect.
 */
function Paralax() {
    // const refBackImage = useRef<HTMLDivElement>(null);

    // const [timelines, setTimelines] = useState<TimelineLite[]>([]);

    // useEffect(() => {
    //     if (!refBackImage.current) return;

    //     for (let item of refBackImage.current.children as HTMLCollection) {
    //         const newTimeline = new TimelineLite();
    //         newTimeline.from(item, 1.5, {
    //             y: "-20%",
    //             ease: Power2.easeInOut
    //         }, "+=0.5");
    //         setTimelines((prev) => [...prev, newTimeline]);
    //     }

    //     console.log(timelines);
    //     const handleScroll = () => {

    //         const srollTop = window.pageYOffset;

    //         timelines.forEach((item, index) => {
    //             item.seek(srollTop);
    //         })

    //         // paralaxTimeline.seek(srollTop);
    //     };

    //     timelines.forEach((item, index) => {
    //         item.play();
    //     })
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [refBackImage.current]);


    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <Image src={CenterImage} className="shadow-2xl rounded w-1/2 my-12 z-10 md:my-20 lg:my-32" alt="background image" />

            <div className='absolute top-0 left-0 w-full'>
                {settingsBackgroundImage.map((item, index) => (
                    <Image className={"absolute shadow rounded  " + item.className} key={index} src={item.src} alt={item.alt} />
                ))}
            </div>
        </div>
    );
}

export default Paralax;
