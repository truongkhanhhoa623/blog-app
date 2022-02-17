import { Header } from "../../components"
import "./styles.scss"
export  function PublicLayout({children}){
    return(
        <div className="puslish-layout">
            <Header/>
            {children}
        </div>
    )
}