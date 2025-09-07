import { ChartNoAxesCombined, Plus, Settings } from "lucide-react"
import { Card } from "../atoms/Cards"

export const QuickActions = () => {

    const cardsAction = [
        {
            icon: Plus,
            backgroundColor: "bg-green-500",
            title: "Criar sala",
            subTitle: "Adicione uma nova sala de aula"
        },
        {
            icon: ChartNoAxesCombined,
            backgroundColor: "bg-blue-500",
            title: "Ver relatório",
            subTitle: "Análise do desempenho e frequência"
        },
        {
            icon: Settings,
            backgroundColor: "bg-purple-500",
            title: "Configurações",
            subTitle: "Configurações gerais do sistema"
        },
    ]

    return (
        <>
            <h2 className="font-semibold text-2xl">
                Ações rápidas
            </h2>
            <div className="grid grid-cols-1 justify-between gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    cardsAction.map((card, i) => (
                        <Card.root key={i}>
                            <Card.icon icon={card.icon} backgroundColor={card.backgroundColor}></Card.icon>
                            <Card.text title={card.title} subTitle={card.subTitle}></Card.text>
                        </Card.root>
                    ))
                }
            </div>
        </>
    )
}