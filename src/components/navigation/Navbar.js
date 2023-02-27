import {useState} from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

import navbar from "@/styles/Navbar.module.css"

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbar.layout}`}>
                <div className="container-fluid px-5">
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/manage">Library</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/play">Play</Link>
                            </li>
                        </ul>
                        <div className="ms-auto">
                            {session ? <ProfileTab/> : <SignInTab/>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

function ProfileTab(components) {
    return (
        <>
            <div>
                <Link className="d-flex flex-row" href="/profile">
                    <Image src="/profile.svg" alt="profile" className="rounded-circle border border-dark" width={30} height={30}/>
                    <div className="ms-2 mt-1 text-black-50">
                        {components.name}
                    </div>
                </Link>
            </div>
        </>
    )
}

function SignInTab() {

    return (
        <>
            <div className="container-fluid navbar-nav">
                <Link className="nav-link" href={`/api/auth/signIn`} onClick={
                    (e) => {
                        e.preventDefault();
                        signIn();
                    }}>
                    <button className="btn btn-outline-primary">Login </button>
                </Link>
                <Link className="nav-link" href="/auth/register">
                    <button className="btn btn-outline-secondary">Sign Up
                    </button>
                </Link>
            </div>
        </>
    )
}