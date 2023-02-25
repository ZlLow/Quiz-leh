import styles from "@/styles/Create.module.css"
import background from "@/styles/Background.module.css"
export default function Create() {
    return (
        <>
            <div className={background.default}>
                <div className="d-flex flex-nowrap">
                    <QuestionBank/>
                </div>
                <div></div>
            </div>
        </>
    )
}

function QuestionBank() {
    return (
        <>
            <div className={styles.quesBank}>
                <ul className="nav flex-column mb-auto overflow-auto">
                    <li className="nav-item bg-black">
                        test
                    </li>
                </ul>
                <button className="btn btn-primary">Add Questions</button>
            </div>
        </>
    )
}