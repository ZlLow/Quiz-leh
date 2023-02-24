import Image from "next/image";

// Components
import Searchbar from "@/components/forms/SearchBar";

// CSS Modules
import background from "@/styles/Background.module.css"
import formStyle from "@/styles/Form.module.css"
import divStyle from "@/styles/Div.module.css"

export default function Manage() {
    return(
        <>
            <div className={background.manage}>
                <div className="container-fluid ms-3">
                    <div className="position-relative d-flex flex-row">
                        <Searchbar/>
                        <div className={formStyle.expand}>
                            <ul className="nav nav-tabs gap-3 pe-3">
                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Image src="/collections.svg" alt="Grid View" height={24} width={24}/>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Image src="/vercel.svg" alt="Compact View" height={24} width={24}/>
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
                                <Image src="/vercel.svg" alt="Create" height={64} width={64}/>
                                </div>
                                <div className="text-dark">You can create your quiz here!</div>
                                <button className="mt-3 btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}