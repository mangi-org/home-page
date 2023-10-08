import { Accordions, Hydrogen, Paragraph, CardGlass } from "@/components/UI/intex"

interface ItemsFAQInterface {
    title: string;
    description: string;
}

const listFAQ: ItemsFAQInterface[] = [
    {
        title: "Текс текст",
        description: "Officia culpa sint eu consequat aliquip exercitation esse id amet veniam velit tempor fugiat exercitation."
    },
    {
        title: "Текс текст",
        description: "Officia culpa sint eu consequat aliquip exercitation esse id amet veniam velit tempor fugiat exercitation."
    },
    {
        title: "Текс текст",
        description: "Officia culpa sint eu consequat aliquip exercitation esse id amet veniam velit tempor fugiat exercitation."
    },
    {
        title: "Текс текст",
        description: "Officia culpa sint eu consequat aliquip exercitation esse id amet veniam velit tempor fugiat exercitation."
    }
]

/**
 * Renders the FAQ sections.
 *
 * @return {JSX.Element} The rendered FAQ sections.
 */
function FAQSections() {
    return (
        <section className="relative container mx-auto px-1">
            <Hydrogen text="Часто задаваемые вопросы" />
            <div className="flex flex-col gap-4">
                {listFAQ.map((item, index) => (
                    <CardGlass className="p-4" key={index}>
                        <Accordions.Details open={index === 0}>
                            <Accordions.Summory>{item.title}</Accordions.Summory>
                            <Paragraph>
                                {item.description}
                            </Paragraph>
                        </Accordions.Details>
                    </CardGlass>
                ))}
            </div>
        </section>
    )
}

export default FAQSections