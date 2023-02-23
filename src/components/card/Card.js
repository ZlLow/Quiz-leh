import card from "@/styles/Card.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Card(components) {
    return (
        <>
            <div className={`card ${card.layout}`}>
                <div className="card-body mx-auto">
                    <Link href={components.href}>
                        <div className="vstack gap-1">
                            <Image
                                src={components.image}
                                alt={components.alt}
                                width={components.width}
                                height={components.height}
                                className={components.style}
                                priority
                            />
                            <div className="d-flex justify-content-center">
                                {components.children}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}