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
        <section className={"flex flex-col justify-center items-center px-1 w-full md:-mt-56 gap-4 "+styles.container}>
            <Image src={FirstImage} alt="first excemple website image" className="object-cover w-full md:object-contain md:w-3/4 xl:w-1/2" />
            <ButtonContacts>Начать сотрудничество</ButtonContacts>
        </section>
    )
}

export default FirstExcempleWebsite