import { ReactNode } from "react"

export const ButtonRoot = ({ children }: { children: ReactNode }) => {
    return (
        <div className="dropdown dropdown-end">
            {children}
        </div>
    )
}