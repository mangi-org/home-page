import Image from "next/image"
import { Hydrogen, Paragraph, ButtonLink } from "../../UI/intex"
import BackgroundImage from '@/assets/mangi_attr.svg'
import styles from './Creativity.module.css'

const mainText = `Мы глубоко убеждены в том, что уникальный и оригинальный дизайн является ключевым элементом успешного веб-проекта. Мы не просто создаем сайты, мы создаем удивительные пользовательские интерфейсы, которые привлекают внимание и помогают достигать поставленных целей.
Наш творческий подход основан на поиске вдохновения в различных источниках, экспериментах с дизайном и использовании новых технологий. Мы стремимся создавать сайты, которые будут не только красивыми, но и удобными для использования. Мы уделяем внимание каждой детали, чтобы создать сайт, который будет отличаться от остальных.`

/**
 * Creates a section for displaying creative content.
 *
 * @return {JSX.Element} The JSX element representing the section.
 */
function Creativity() {

    let lines = mainText.split('\n')

    return (
        <section className={styles.creativity}>
            <div className={styles.backgroundImage}>
                <Image src={BackgroundImage} alt="background image" />
            </div>
            <div className={styles.mainText}>
                <Hydrogen text="Творческий подход" />
                {lines.map((item, index) => (
                    <Paragraph key={index}>{item}</Paragraph>
                ))}
            </div>
            <div className={styles.buttonGroup}>
                <ButtonLink href="#contacts">Начать творческий подход</ButtonLink>
            </div>
        </section>

    )
}

export default Creativity