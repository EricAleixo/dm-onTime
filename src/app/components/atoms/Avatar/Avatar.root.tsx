import { ReactNode } from "react"

export const AvatarRoot = ({children}: {children: ReactNode}) => {
    return (
        <div className="dropdown dropdown-end flex items-center gap-2">
            {children}
        </div>
    )
}