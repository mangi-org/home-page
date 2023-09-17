import { GradientSpan, Hydrogen, Paralax, Paragraph } from "../../UI/intex"
import styles from "./AboutUs.module.css"


/**
 * Renders the AboutUs component.
 *
 * @return {JSX.Element} The rendered AboutUs component.
 */
function AboutUs() {
    return (
        <section id="about" className={styles.section}>
            <div className="content">
                <Hydrogen text="О нас" />
                <Paragraph>
                    Команда Mangi.org находится вот уже <GradientSpan>7 лет на рынке</GradientSpan> и служит верностью и правдой своим клиентам
                </Paragraph>
            </div>
            <Paralax />


        </section>
    )
}

export default AboutUs