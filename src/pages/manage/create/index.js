import Image from "next/image";

import styles from "@/styles/Create.module.css"
import background from "@/styles/Background.module.css"
import formStyle from "@/styles/Form.module.css"
import inputStyle from "@/styles/Input.module.css"
import divStyle from "@/styles/Div.module.css"
import {useState} from "react";


let nextId = 0;
export default function Create() {

    const [val, setVal] = useState('');
    const [rows, setRows] = useState([]);

    const [qns, setQns] = useState([]);

    return (
        <>
            <div className={background.default}>
                <div className="d-flex flex-nowrap">
                    <QuestionBank/>
                </div>
                <div className="mt-5 container-fluid">
                    <div className="d-flex justify-content-center">
                        <form className="w-100 px-5">
                            <input type="text" className={formStyle.question} placeholder="Start typing your question"/>
                            <div className="d-grid gap-3">
                                <div className="row">
                                    <Col src="/triangle.svg" placeholder="Add answer 1" onChange={e => setVal(e.target.val)}/>
                                    <Col src="/Square.svg" placeholder="Add answer 2"  onChange={e => setVal(e.target.val)}/>
                                </div>
                                <div className="row">
                                    <Col src="/Square.svg" placeholder="Add answer 3" setValue={e => setVal(e.target.val)}/>
                                    <Col src="/triangle.svg" placeholder="Add answer 4" setValue={e => setVal(e.target.val)}/>
                                </div>
                                {rows.map((col) => (
                                     <Col key={col.id} src="/triangle.svg" value={col.val} >
                                     </Col>
                                    ))}
                                <div className="row">
                                    <Col src="/circle.svg" placeholder="Add an answer">
                                        <button className="btn btn-outline-light" type="button" onClick={event => addCol(rows,event.target.value)}>
                                            <Image src="/add.svg" alt="Add" height={24} width={24}/>
                                        </button>
                                    </Col>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center my-3 gap-3">
                                <button className="btn btn-primary" type="submit">Save</button>
                                <button className="btn btn-secondary">Exit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function Col(components) {
    return (
        <>
            <div className="col">
                <div className={divStyle.answer}>
                    <Image className="bg-white" src={components.src} alt="icon" height={36} width={36} />
                    <input type="text" value={components.value} className={inputStyle.answer} placeholder={components.placeholder} onChange={components.onChange}/>
                    {components.children}
                </div>
            </div>
        </>
    )
}

function QuestionBank() {
    return (
        <>
            <div className={styles.quesBank}>
                <ul className="nav flex-column mb-auto overflow-auto">
                    <li className="nav-item">
                        <div className="text-black">
                            1. Quiz
                            <div className="container">
                                <button className={`btn btn-light ${divStyle.qns}`}>
                                    <div>
                                        Question
                                    </div>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <button className="btn btn-primary">Add Questions</button>
            </div>
        </>
    )
}

function addCol(rows,val) {
    console.log(rows)
    rows.push({
        id: nextId++,
        val: val,
    });
}