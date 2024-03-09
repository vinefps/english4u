export default function Content() {
    return (
        <div className="">
            <div className="h-60 w-72">
                <div className="sm:text-xs lg:text-4xl line-clamp-3">Unlock Your Potential with English 4U!</div>
            </div>
            <div className="w-72">
                <p>
                    Prepare-se para expandir seus horizontes e alcançar novas alturas com o English 4U!
                </p>
            </div>
            <div className="flex mt-8">
                <button className="bg-green-400 text-white hover:bg-green-500 font-bold py-2 px-4 rounded mr-4">
                    Se inscrever
                </button>
                <button className="border border-green-400 text-green-400 hover:text-green-500 font-bold py-2 px-4 rounded">
                    Saber mais
                </button>
            </div>
        </div>
    )
}