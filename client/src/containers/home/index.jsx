import { useEffect, useState } from "react"
import articleApi from "../../services/api/articleApi"



export default function Home(){
    
    const [data, setData] = useState([])
    useEffect(()=>{
        async function getArticles(){
            try {
                 articleApi.getAll()
                    .then((res)=>{
                        const articles = res.data
                        setData(articles)
                    })
            } catch (error) {
                
            }
        }
        getArticles()
    })

    console.log("res",data)
    return(
        <div>Home
        <ul>
        {
            data.map((article)=>{
                return (
                    <li> {article._id}</li>
                )
            })
        }
        </ul>
        </div>
    )
}