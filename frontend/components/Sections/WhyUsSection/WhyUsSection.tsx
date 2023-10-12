import { Hydrogen, GradientSpan, Paragraph, CardGlass } from "@/components/UI";
import VectorBGImage from "@/assets/Vector.png"
import Image from "next/image";

interface ItemsWhyInterface {
    title: string;
    description: string;
}

const ItemsWhy: ItemsWhyInterface[] = [
    {
        title: "Современный подход к разработке",
        description: "Вы сможете видеть результат на каждом этапе разработки от дизайна до публикации на сайте"
    },
    {
        title: "Актуальные технологии при разработке",
        description: "Ваш сайт будет поддерживаться браузерами на долгие годы вперёд"
    },
    {
        title: "Дешевизна обслуживания сайта на много лет вперёд",
        description: "Мы трудимся над тем, чтобы сэкономить ваши деньги на хостингах и рекламы"
    },
    {
        title: "Продукт радует глаз клиента снова и снова",
        description: "Запоминающийся дизайн вашего продукта (сайта или мобильного приложения) будет заставлять вернуться клиента вновь"
    },
]

/**
 * Renders the WhyUsSection component.
 *
 * @return {JSX.Element} The rendered WhyUsSection component.
 */
function WhyUsSection() {

    return (
        <section id="why" className="relative my-4">
            <div className="container mx-auto">
                <Hydrogen text="Почему мы?" />
                <Paragraph className="text-center">
                    Глубоко <GradientSpan >погружаемся</GradientSpan> во все этапы разработки
                </Paragraph>
                <div className="grid grid-cols-2 grid-flow-row gap-4 p-1 md:p-12 lg:grid-cols-4">
                    {ItemsWhy.map((item, index) => (
                        <CardGlass key={index} className="p-3">
                            <span>{index + 1 < 10 ? '0' + (index + 1) : index}</span>
                            <h3 className="font-bold text-lg my-2 md:text-xl lg:text-2xl">{item.title}</h3>
                            <Paragraph className="text-sm">{item.description}</Paragraph>
                        </CardGlass>
                    ))}
                </div>
            </div>
            <Image src={VectorBGImage} className="object-contain w-full h-full -z-10 absolute top-0 left-0 md:object-fill lg:object-contain lg:-left-96" alt="Vector" />
        </section>
    )
}

export default WhyUsSection