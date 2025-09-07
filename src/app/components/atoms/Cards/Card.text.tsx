type CardTextProps = {
    title: string,
    subTitle: string
}

export const CardText = ({ title, subTitle }: CardTextProps) => {
    return (
        <div className="leading-4">
            <h2 className="text-lg font-semibold capitalize">{title}</h2>
            <p className="text-gray-500">{subTitle} </p>
        </div>
    )
}