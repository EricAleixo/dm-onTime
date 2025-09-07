import { LucideIcon } from "lucide-react"

export const ButtonIcon = ({ icon: Icon, notificationLength }: { icon: LucideIcon, notificationLength?: number }) => {
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {
                notificationLength ? (
                    <div className="indicator">
                        <Icon></Icon>
                        <span className="badge badge-sm indicator-item bg-red-500">{notificationLength}</span>
                    </div>
                ) : (
                    <Icon/>
                )
            }
        </div>
    )
}