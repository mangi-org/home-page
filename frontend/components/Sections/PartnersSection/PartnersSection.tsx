import { Hydrogen, Paragraph, GradientSpan } from "@/components/UI"
import Image from "next/image";
import FMCLogo from "@/assets/fmc-logo.svg"
import MinistLogo from "@/assets/mprf.png"
import FirpoLogo from "@/assets/firpo.svg"
import CustisLogo from "@/assets/custis_logo_blue.png"

interface ItemsPartnersInterface {
    src: string;
    alt: string;
    link?: string;
}

const itemsPartners: ItemsPartnersInterface[] = [
    {
        src: FMCLogo,
        alt: "ФМЦИО",
        link: "https://fmc-spo.ru/"
    },
    {
        src: MinistLogo,
        alt: "Министерство Просвещения",
        link: "https://edu.gov.ru/"
    },
    {
        src: FirpoLogo,
        alt: "Институт развития профессионального образования ФГБОУ",
        link: "https://firpo.ru/"
    },
    {
        src: CustisLogo,
        alt: "Custis",
        link: "https://custis.ru/"
    }
]

const counerPartners = 12

/**
 * Renders the PartnersSection component.
 *
 * @return {JSX.Element} The rendered PartnersSection component.
 */
function PartnersSection() {
    return (
        <section className="relative my-4 md:my-12 lg:my-28">
            <div className="container mx-auto">
                <Hydrogen text="Партнеры" />
                <Paragraph className="text-center">
                    Нам уже доверяют <GradientSpan>{counerPartners}</GradientSpan>. <br />
                    Основные партнеров:
                </Paragraph>
                <div className="grid grid-cols-4 gap-4 p-4 mx-auto items-center justify-items-center">
                    {itemsPartners.map((item, index) => (
                        <a href={item.link} target="_blank" key={index} className="md:h-1/2 md:w-1/2">
                            <Image src={item.src} alt={item.alt} height="100" width="100" className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection