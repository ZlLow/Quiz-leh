import Link from "next/link";

import {Montserrat} from "@next/font/google";


const montserrat = Montserrat({
    weight: '300',
    subsets: ['latin']
    })
export default function Footer() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <p className={montserrat.className}>
                    Create your own Quiz
                    <Link href="/manage/create"> Here!</Link>
                </p>
            </div>
        </>
    )
}