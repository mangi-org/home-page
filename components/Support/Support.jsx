import { Hydrogen } from "../Hydrogen"
import styles from "./Support.module.css"

const text = "Можете связаться с нами и одновременно опробовав бота"

function Support() {
    return (
        <section className={styles.section}>
            <div className={styles.bacgroundImages}>

            </div>
            <div className={styles.content}>
                <Hydrogen text="Как связаться?" />
                <p>{text}</p>
            </div>
            <div className={styles.groupIconBottom}>

            </div>
            <div className={styles.groupIconAir}>
                
            </div>
        </section>
    )
}

export default Support