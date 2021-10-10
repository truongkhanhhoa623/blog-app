import { Header } from "../../components"
import "./styles.scss"
export function MainLayout({children}){
    return(
        <div className="main-layout">
  
                <Header/>

   
            {children}
        </div>
    )
}