import Link from 'next/link'
import styles from './CardWork.module.css'
import Image from 'next/image';

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
function CardWork({ title, link, backgroundImage, backgroundImageAlt }) {

    let checkLink = true;

    // if (link === '#' || link === '') {
    //     checkLink = false;
    // }

    return (
        <div className={styles.card}>
            <div className={styles.bacground}>
                <Image src={backgroundImage} alt={backgroundImageAlt} />
                <span></span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {checkLink && <Link href={link}>Примеры работ</Link>}
            </div>
        </div>
    );
}

export default CardWork