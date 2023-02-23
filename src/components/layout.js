import Navbar from "@/components/navigation/Navbar";
import {useRouter} from "next/router";

export default function Layout({ children }) {
    const withoutNavbar = ["/play"]
    const router = useRouter();

    const noNavbar = withoutNavbar.some((item) => router.asPath.includes(item));
    return (
        <>
                {noNavbar ? null : <Navbar/> }
                <main>{children}</main>
        </>
    )
}