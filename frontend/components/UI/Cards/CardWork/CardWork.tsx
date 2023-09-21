import Link from 'next/link'
import styles from './CardWork.module.css'
import Image, { StaticImageData } from 'next/image';

interface CardWorkProps {
    title: string;
    link: string;
    backgroundImage: string | StaticImageData;
    backgroundImageAlt: string;
}

/**
 * Renders a card component for displaying work information.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the work.
 * @param {string} props.link - The link to the work.
 * @param {string} props.backgroundImage - The URL of the background image.
 * @param {string} props.backgroundImageAlt - The alt text for the background image.
 * @return {JSX.Element} The rendered card component.
 */
function CardWork({ title, link, backgroundImage, backgroundImageAlt }: CardWorkProps) {

    let checkLink = true;

    // if (link === '#' || link === '') {
    //     checkLink = false;
    // }

    return (
        <div className="relative flex flex-col items-center h-full w-full p-0 m-0 md:w-2/3 lg:w-1/2">
            <div className="bg-cover">
                <Image className="rounded-2xl" src={backgroundImage} alt={backgroundImageAlt} />
                {/* <span></span> */}
            </div>
            <div className="absolute flex items-left flex-wrap w-full justify-center p-2 flex-col pt-2 md:pt-4">
                <h3 className="text-shadow w-fit">{title}</h3>
            </div>
            {checkLink && 
            <Link href={link} className="
                absolute flex items-center justify-center p-1 flex-col bottom-2 border-solid border 
                px-2 border-white rounded bg-white text-dark transition-all hover:backdrop-blur-sm 
                hover:bg-inherit hover:text-white lg:px-4
            "
            >Примеры работ</Link>
            }
        </div>
    );
}

export default CardWork