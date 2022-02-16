import { AdminHeader } from "../../components";
import "./styles.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import apiAuth from "../../services/api/apiAuth";

export function MainLayout({ children }) {
    const [profile, setProfile] = useState({}) 
    useEffect(()=>{
        const getProfileUser = ()=>{
            apiAuth.getProfile().then((res)=>{
                setProfile(res.data)
            })
        }
        getProfileUser()
    },[])
    return (
        <div className="main-layout">
          <AdminHeader profile={profile} />
          {children}
        </div>
      )
  

;
}
