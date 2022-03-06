import { useEffect, useState } from 'react'
import './Confirm.scss'

export default function Confirm(props) {
    const {onCancel, onConfirm, id, isOpen, infoConfirm} = props
    const {type, title, body} = infoConfirm
    const [iconType, setIconType] = useState("")
    useEffect(()=>{
        switch (type) {
            case "delete":
                setIconType("fa-times")
        }
    },[])
    const handleConfirm = (id) =>{
        if(onConfirm){
            onConfirm(id)
        }
    }
    return (
        <div className={`confirm ${isOpen ? "confirm--open" : "" }`} >
            <div className="confirm-popup">
                <div className={`confirm-popup__icon ${type}`}><i className={`fas ${iconType}`}></i></div>
                <h1 className="confirm-popup__title">{title}</h1>
                <p className="confirm-popup__body">{body}</p>
                <div className ="confirm-popup__control">
                    <button className="btn btn--close" onClick= {()=>onCancel()} >Close</button>
                    <button className="btn btn--confirm" onClick= {()=>handleConfirm(id)} >{type}</button>
                </div>     
            </div>
        </div>
    )
}