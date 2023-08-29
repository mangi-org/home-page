import Image from "next/image"
import { Hydrogen } from "../Hydrogen"
import { VKIcon, TelegrammIcon, WhatsAppIcon, MailIcon, PhoneIcon, QuestionIcon } from "../Icons"
import { SupportLayerIcon } from "./SupportLayerIcon"
import styles from "./Support.module.css"
import BackgroundImage from "@/assets/unLinerOrangeVector.svg"

const text = "Можете связаться с нами и одновременно опробовав бота"

function Support() {
    return (
        <section className={styles.section}>
            <div className={styles.bacgroundImages}>
                <Image src={BackgroundImage} alt="background image support" />
            </div>
            <div className={styles.content}>
                <Hydrogen text="Как связаться?" />
                <p>{text}</p>
                <div className={styles.groupIconBottom}>
                    <i className={styles.iconBottom}><VKIcon /></i>
                    <i className={styles.iconBottom}><TelegrammIcon /></i>
                    <i className={styles.iconBottom}><WhatsAppIcon /></i>
                </div>
                <div className={styles.groupIconAir}>
                    <SupportLayerIcon>
                        <i className={styles.iconAir}><MailIcon /></i>
                        <i className={styles.iconAir}><PhoneIcon /></i>
                        <i className={styles.iconAir}><QuestionIcon /></i>
                    </SupportLayerIcon>
                </div>
            </div>
        </section>
    )
}

export default Support