import { Outlet } from "react-router-dom";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";

export default function Layout() {

    const loadFromStorage= useAppStore((state)=>state.loadFromStorage)
    useEffect(()=>{
        loadFromStorage()
    },[])

    return (
        <>
            <Header />
            <Notification />
            <main className="mx-auto container py-16">
                <Outlet/>
            </main>
            <Modal />

        </>
    )
}