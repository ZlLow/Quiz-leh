import formStyle from "@/styles/Form.module.css";
import icon from "@/styles/Icon.module.css";
import Image from "next/image";

export default function Searchbar() {
    return (
        <>
            <form role="search">
                <input className={formStyle.search}
                       type="search"
                       aria-label="'search"
                       placeholder="Search"/>
                <div className={icon.search}>
                    <Image src="/search.svg" alt="Search" height={24} width={24}/>
                </div>
            </form>
        </>
    )
}