import { Header } from "../../components"
import "./styles.scss"
export  function PublicLayout({children}){
    return(
        <div className="blank-layout">
            <Header/>
            {children}
        </div>
    )
}