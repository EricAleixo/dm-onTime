import { ReactNode } from "react"
import { Header } from "../organisms/Header"

export const RoomLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <Header />
            <main className="px-6">
                {children}
            </main>
        </>
    )
}