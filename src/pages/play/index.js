import Image from 'next/image'
import Link from "next/link";

import background from '@/styles/Background.module.css'
import divStyle from "@/styles/Div.module.css"
import icon from "@/styles/Icon.module.css"
import formStyle from "@/styles/Form.module.css"
import Footer from "@/components/navigation/Footer";

export default function Index() {
    return (
        <>
            <div className={background.play}>
                <div className={divStyle.play}>
                    <div className="mb-4">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Quiz-leh Logo"
                                width={125}
                                height={100}
                                className={icon.logo}
                                priority
                            />
                        </Link>
                    </div>
                    <div className={formStyle.play}>
                        <form className="form-control px-4 py-3">
                            <div className="mb-3">
                                <input className="form-control text-center" type="text" placeholder="Game Pin"/>
                            </div>
                            <button className="container btn btn-dark">Enter</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
