import Image from "next/image"
import { ButtonLink } from "../Button"
import BackgroundImage from '@/assets/mangi_attr.svg'
import styles from './Creativity.module.css'
import { Hydrogen } from "../Hydrogen"

/**
 * Creates a section for displaying creative content.
 *
 * @return {JSX.Element} The JSX element representing the section.
 */
function Creativity() {
    return (
        <section className={styles.creativity}>
            <div className={styles.backgroundImage}>
                <Image src={BackgroundImage} alt="background image" />
            </div>
            <div className={styles.mainText}>
                <Hydrogen text="Творческий подход" />
                <p>
                    Мы глубоко убеждены в том, что уникальный и оригинальный дизайн является ключевым элементом успешного веб-проекта.
                    Мы не просто создаем сайты, мы создаем удивительные пользовательские интерфейсы, которые привлекают внимание и помогают достигать поставленных целей.
                    <br /><br />
                    Наш творческий подход основан на поиске вдохновения в различных источниках, экспериментах с дизайном и использовании новых технологий.
                    Мы стремимся создавать сайты, которые будут не только красивыми, но и удобными для использования.
                    Мы уделяем внимание каждой детали, чтобы создать сайт, который будет отличаться от остальных.
                </p>
            </div>
            <div className={styles.buttonGroup}>
                <ButtonLink href="#contacts">Начать творческий подход</ButtonLink>
            </div>
        </section>

    )
}

export default Creativity