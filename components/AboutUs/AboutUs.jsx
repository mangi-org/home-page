import Image from "next/image"
import { GradientSpan } from "../GradientSpan"
import { Hydrogen } from "../Hydrogen"
import { Paragraph } from "../Paragraph"
import Paralax from "../Paralax"
import styles from "./AboutUs.module.css"


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