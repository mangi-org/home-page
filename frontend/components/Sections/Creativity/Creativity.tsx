import { Hydrogen, Paragraph, ButtonLink } from "@/components/UI"

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
        <section className="relative container mx-auto my-4 flex flex-col gap-8 justify-center md:my-12 lg:my-24">
            <Hydrogen text="Творческий подход" />
            {lines.map((item, index) => (
                <Paragraph className="font-medium text-justify indent-4 px-4" key={index}>{item}</Paragraph>
            ))}
            <div className="mx-auto mb-4">
                <ButtonLink href="#contacts">Начать творческий подход</ButtonLink>
            </div>
        </section>

    )
}

export default Creativity