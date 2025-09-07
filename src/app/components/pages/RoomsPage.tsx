import { RoomLayout } from "../layout/RoomLayout"

export const RoomsPage = () => {
    return (
        <RoomLayout>
            <h2 className="font-semibold text-2xl">
                Ações rápidas
            </h2>
            <div className="grid grid-cols-1 justify-between gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    [1, 2, 3].map((e) => (
                        <div key={e} className="card bg-base-100 shadow-sm border-gray-950 border">
                            <div className="flex gap-2 p-4 pb-8">
                                <div className="rounded-md w-10 h-10 bg-red-500"></div>
                                <div className="leading-4">
                                    <h2 className="text-lg font-semibold capitalize">Criar nova sala</h2>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </RoomLayout>
    )
}