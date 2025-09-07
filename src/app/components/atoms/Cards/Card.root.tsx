import { ReactNode } from "react"

export const CardRoot = ({children}: {children: ReactNode}) => {
    return (
        <div className="card bg-base-100 shadow-sm border-gray-950 border cursor-pointer group hover:shadow-md">
            <div className="flex gap-2 p-4 pb-8">
                {children}
            </div>
        </div>
    )
}