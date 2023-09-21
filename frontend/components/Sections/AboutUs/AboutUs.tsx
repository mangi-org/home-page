import { GradientSpan, Hydrogen, Paragraph } from "../../UI/intex"
import { Paralax } from "../Paralax"

/**
 * Renders the AboutUs component.
 *
 * @return {JSX.Element} The rendered AboutUs component.
 */
function AboutUs() {
    return (
        <section id="about" className="container mx-auto mt-4 relative">
            <div className="flex flex-col justify-center text-center items-center my-4">
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