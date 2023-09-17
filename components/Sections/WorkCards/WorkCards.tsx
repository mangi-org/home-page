import { Hydrogen, CardWork } from "../../UI/intex"
import styles from "./WorkCards.module.css"
import CRMBackground from '@/assets/crm.png'
import BotsBackground from '@/assets/bots.png'
import MobileBackground from '@/assets/mobile.png'
import LandingBackground from '@/assets/landing.png'
import ShopBackground from '@/assets/shop.png'
import SeoBackground from '@/assets/seo.png'

const itemsWorkCards = [
    {
        title: 'Корпоративные порталы (CRM системы)',
        link: '#',
        backgroundImage: CRMBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Веб-сайты презентующие компанию',
        link: '#',
        backgroundImage: LandingBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Интернет магазины',
        link: '#',
        backgroundImage: ShopBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Мобильные приложения',
        link: '#',
        backgroundImage: MobileBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Продвижения сайта',
        link: '#',
        backgroundImage: SeoBackground,
        backgroundImageAlt: 'Картинка для работ веб-сайтов'
    },
    {
        title: 'Боты в мессенджерах',
        link: '#',
        backgroundImage: BotsBackground,
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