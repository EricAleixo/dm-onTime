import { Bell } from "lucide-react"
import { Avatar } from "../atoms/Avatar"
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Header = () => {
    return (
        <header className="navbar bg-base-100 shadow-sm flex items-center justify-between px-2 md:px-5">
            <div>
                <a className="font-semibold text-2xl">Salas</a>
            </div>

            <div>
                <Input.root text="Digite o nome da sala"></Input.root>
            </div>

            <div className="flex items-center gap-2">
                <Button.root>
                    <Button.icon icon={Bell} notificationLength={2}></Button.icon>
                    {/* <Button.drop></Button.drop> */}
                </Button.root>
                <Avatar.root>
                    <Avatar.name></Avatar.name>
                    <Avatar.profilePhoto imagemUrl="/images/image.png" imagemAlt="Foto de perfil de Eric Aleixo"></Avatar.profilePhoto>
                </Avatar.root>
            </div>
        </header>
    )
}