import Image from "next/image"
import styles from './FirstExcempleWebsite.module.css'
import FirstImage from '@/assets/excemple_website.png'
import { ButtonContacts } from "../Button"


/**
 * Renders the content of the first example website.
 *
 * @return {JSX.Element} The rendered content of the first example website.
 */
function FirstExcempleWebsite() {
    return (
        <div className={styles.container}>
            <div className={styles.first_excemple_website_image}>
                <Image src={FirstImage} alt="first_excemple_website_image" />
            </div>
            <ButtonContacts>Начать сотрудничество</ButtonContacts>
        </div>
    )
}

export default FirstExcempleWebsite