import Image from "next/image"

type AvatarProfilePhotoProps = {
    imagemUrl: string,
    imagemAlt: string
}

export const AvatarProfilePhoto = ({imagemUrl, imagemAlt}: AvatarProfilePhotoProps) => {
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <Image
                    alt={imagemAlt}
                    src={imagemUrl}
                    width={40} 
                    height={40}/>
            </div>
        </div>
    )
}