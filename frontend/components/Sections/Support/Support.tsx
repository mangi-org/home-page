import Image from "next/image"
import { Hydrogen, Paragraph } from "../../UI/intex"
import { VKIcon, TelegrammIcon, WhatsAppIcon, MailIcon } from "../../Icons/index"
import BackgroundImage from "@/assets/unLinerOrangeVector.svg"
import Link from "next/link"



function Support() {
    const text = "Можете связаться с нами и одновременно опробовав бота"

    const iconsBottom = [
        {
            compenent: <VKIcon className="w-full h-full" />,
            link: '/',
            label: 'VK'
        },
        {
            compenent: <TelegrammIcon className="w-full h-full" />,
            link: '/',
            label: 'Telegramm'
        },
        {
            compenent: <WhatsAppIcon className="w-full h-full" />,
            link: '',
            label: 'WhatsApp'
        },
        {
            compenent: <MailIcon className="w-full h-full" />,
            link: '/',
            label: 'Email'
        },
    ]

    const classNameIconsBottom = "w-12 h-12 bg-orange rounded-full fill-white p-3 transition-all hover:bg-white hover:fill-orange cursor-pointer"

    return (
        <section id="contacts" className="w-full mx-auto relative flex my-8 md:px-4 md:py-12">
            <div className="absolute w-1/2 right-0 bottom-0 -z-10 md:w-1/4 lg:w-1/6">
                <Image src={BackgroundImage} alt="background image support" />
            </div>
            <div className="w-full mx-1 flex flex-col border border-orange border-solid rounded-3xl p-4 bg-black bg-opacity-30 backdrop-blur md:w-3/4 xl:w-1/2 md:mx-auto">
                <Hydrogen text="Как связаться?" />
                <Paragraph className="text-center justify-center mb-4">{text}</Paragraph>
                <div className="flex flex-row gap-4 items-center justify-center mt-4">
                    {iconsBottom.map((item: any, index: number) => (
                        item.link !== '' ?
                            <Link href={item.link} aria-label={"Ссылка на " + item.label} key={index} className={classNameIconsBottom}><i>{item.compenent}</i></Link> :
                            <i key={index} className={classNameIconsBottom}>{item.compenent}</i>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Support