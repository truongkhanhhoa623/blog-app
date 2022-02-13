import { AdminHeader } from "../../components";
import "./styles.scss";
import { useEffect, useState } from "react";
import { getApiProfile, selectUser } from "./../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export function MainLayout({ children }) {
  const dispatch = useDispatch();
  const { profile } = useSelector(selectUser);
  useEffect(() => {
    dispatch(getApiProfile());
  }, []);
    return (
        <div className="main-layout">
          <AdminHeader profile={profile} />
          {children}
        </div>
      )
  

;
}
