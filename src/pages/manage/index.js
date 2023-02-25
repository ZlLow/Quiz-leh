import Image from "next/image";
import Link from "next/link";

// Components
import Searchbar from "@/components/forms/SearchBar";

// CSS Modules
import background from "@/styles/Background.module.css"
import formStyle from "@/styles/Form.module.css"
import divStyle from "@/styles/Div.module.css"

export default function Manage() {
    return(
        <>
            <div className={background.default}>
                <div className="container-fluid ms-3 mt-5">
                    <div className="position-relative d-flex flex-row">
                        <Searchbar/>
                        <div className={formStyle.expand}>
                            <ul className="nav nav-tabs gap-3 pe-3">
                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Image src="/gridview.svg" alt="Grid View" height={24} width={24}/>
                                        Grid View
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Image src="/compactview.svg" alt="Compact View" height={24} width={24}/>
                                        Compact View
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={formStyle.collapse}>
                        <select className="form-select"
                                aria-label="form-select"
                        defaultValue="recent">
                            <option value="recent" >Recent</option>
                            <option value="draft">Draft</option>
                            <option value="favorite">Favorite</option>
                        </select>
                    </div>
                    <div className={divStyle.empty}>
                        <div className="mx-auto my-auto">
                            <div className="vstack">
                                <div className="d-flex justify-content-center">
                                <Image src="/create.jpg"
                                       alt="Create"
                                       height={103}
                                       width={172}
                                       priority/>
                                </div>
                                <div className="text-dark">You can create your quiz here!</div>
                                <div className="d-grid mx-auto col-6">
                                <button className="mt-3 btn btn-primary">
                                    <Link href="/manage/create">Create</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}