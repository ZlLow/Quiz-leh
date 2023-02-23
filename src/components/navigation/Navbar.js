import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid px-4">
                    <Link className="navbar-brand" href="/">
                        <Image
                            src="/logo.svg"
                            alt="Quiz-leh Logo"
                            width={70}
                            height={35}
                            priority
                        />
                    </Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}