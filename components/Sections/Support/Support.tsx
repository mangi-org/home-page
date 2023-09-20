import Image from "next/image"
import { Hydrogen, Paragraph } from "../../UI/intex"
import { VKIcon, TelegrammIcon, WhatsAppIcon, MailIcon, PhoneIcon, QuestionIcon } from "../../Icons/index"
import { SupportLayerIcon } from "./SupportLayerIcon"
import styles from "./Support.module.css"
import BackgroundImage from "@/assets/unLinerOrangeVector.svg"
import Link from "next/link"



function Support() {
    const text = "Можете связаться с нами и одновременно опробовав бота"

    const iconsBottom = [
        {
            compenent: <VKIcon />,
            link: ''
        },
        {
            compenent: <TelegrammIcon />,
            link: ''
        },
        {
            compenent: <WhatsAppIcon />,
            link: ''
        }
    ]

    const iconsAir = [
        {
            compenent: <MailIcon />,
            link: ''
        },
        {
            compenent: <PhoneIcon />,
            link: ''
        },
        {
            compenent: <QuestionIcon />,
            link: ''
        }
    ]

    const classNameIconsBottom = styles.iconBottom
    const classNameIconsAir = styles.iconAir

    return (
        <section className="w-full mx-auto relative flex my-8 md:px-4">
            <div className="absolute w-1/2 right-0 bottom-0 -z-10 md:w-1/4 lg:w-1/6">
                <Image src={BackgroundImage} alt="background image support" />
            </div>
            <div className="w-full mx-1 flex flex-col border border-orange border-solid rounded-3xl p-4 bg-black bg-opacity-30 backdrop-blur">
                <Hydrogen text="Как связаться?" />
                <Paragraph>{text}</Paragraph>
                <div className={styles.groupIconBottom}>
                    {iconsBottom.map((item: any, index: number) => (
                        item.link !== '' ?
                            <Link href={item.link} key={index}><i className={classNameIconsBottom}>{item.compenent}</i></Link> :
                            <i key={index} className={classNameIconsBottom}>{item.compenent}</i>
                    ))}
                </div>
                <div className={styles.groupIconAir}>
                    <SupportLayerIcon>
                        {iconsAir.map((item: any, index: number) => (
                            item.link !== '' ?
                                <Link href={item.link} key={index}><i className={classNameIconsAir}>{item.compenent}</i></Link> :
                                <i key={index} className={classNameIconsAir}>{item.compenent}</i>
                        ))}
                    </SupportLayerIcon>
                </div>
            </div>
        </section>
    )
}

export default Support