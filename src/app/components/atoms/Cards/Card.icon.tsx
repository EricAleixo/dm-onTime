import { LucideIcon } from "lucide-react";

type CardIconProps = {
    icon: LucideIcon,
    backgroundColor?: string
}

export const CardIcon = ({icon: Icon, backgroundColor="bg-primary"}: CardIconProps) => {
    return (
        <div className={`rounded-md w-10 h-10 grid place-items-center ${backgroundColor}`}>
            <Icon className="w-[60%] h-[60%] group-hover:animate-pulse"></Icon>
        </div>
    )
}