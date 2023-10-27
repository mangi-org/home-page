import { CardGlass, Hydrogen, Paragraph } from "@/components/UI";
import Image from "next/image";
import MangiLogo from "@/assets/mangi_attr.png";
import Form from "./Form";

const email = "info@mangi.org";

function ContactFormSections() {
    return (
        <section id="contacts" className="relative p-1">
            <CardGlass className="container mx-auto p-3">
                <Hydrogen text="Обратная связь" />
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full flex flex-col gap-4 md:w-1/2">
                        <Hydrogen text="Свяжитесь с нами:" type="h3" useDefaultClass={false} className="font-bold" />
                        <Paragraph className="grow">
                            Email: <a href={"mailto:" + email}>{email}</a>
                        </Paragraph>
                        <Paragraph className="md:h-56">
                            Расположение главного офиса: <br />
                            <a href="https://yandex.ru/maps/-/CDae7-2O" target="_blank" rel="noopener noreferrer">г.Екатеринбург, ул.8 марта д.212, офис 2</a>
                        </Paragraph>
                    </div>
                    <div className="w-full md:w-1/2 gap-4 flex flex-col">
                        <Hydrogen text="Контактные данные:" type="h3" useDefaultClass={false} />
                        <Form />
                    </div>
                </div>
            </CardGlass>
            <Image src={MangiLogo} alt="excample website image" className="object-contain w-1/3 h-1/3 -z-10 absolute top-24 -right-0 md:-left-28 md:w-1/2 md:h-1/2 lg:w-2/3 lg:h-2/3 lg:-left-40 xl:w-full xl:h-full xl:-left-96 xl:-top-4" />
        </section>
    )
}

export default ContactFormSections