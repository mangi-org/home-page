import { CardWork } from "../Cards"
import { Hydrogen } from "../Hydrogen"
import styles from "./WorkCards.module.css"
import WebSiteBackground from '@/assets/задняя часть веб-сайты.png'

const itemsWorkCards = [
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: WebSiteBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    }
]

/**
 * Renders a section of work cards.
 *
 * @return {JSX.Element} The section of work cards.
 */
function WorkCards() {
    return (
        <section id="work">
            <Hydrogen text="Работы" />
            <div className={styles.works}>
                {itemsWorkCards.map((item, index) => (
                    <CardWork
                        key={index}
                        title={item.title}
                        link={item.link}
                        backgroundImage={item.backgroundImage}
                        backgroundImageAlt={item.backgroundImageAlt}
                    />
                ))}
            </div>
        </section>
    )
}

export default WorkCards