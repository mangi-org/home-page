import { GradientSpan } from "../GradientSpan"
import { Hydrogen } from "../Hydrogen"
import { Paragraph } from "../Paragraph"
import styles from "./AboutUs.module.css"

function AboutUs() {
    return (
        <section id="about">
            <div className="content">
                <Hydrogen text="О нас" />
                <Paragraph>
                    Команда Mangi.org находится вот уже <GradientSpan>7 лет на рынке</GradientSpan> и служит верностью и правдой своим клиентам
                </Paragraph>
            </div>
            <div className="paralax">

            </div>

        </section>
    )
}

export default AboutUs