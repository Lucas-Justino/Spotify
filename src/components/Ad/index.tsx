const Ad = () => {
    return (
        <div className="fixed bottom-0 w-full bg-gradient-to-r from-fuchsia-700 via-purple-500 to-blue-400 h-16 mt-2 flex justify-between items-center md:mt-16 lg:mt-16 sm:mt-16">
            <div className="flex flex-col text-white p-2 pl-4">
                <p className="font-semibold">Testar o Premium de graça</p>
                <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div>
                <button className="btn-circle bg-white mr-10 w-48 pl-4 pr-4">
                    <p className="font-bold text-black">Inscreva-se grátis</p>
                </button>
            </div>
        </div>
    );
}

export default Ad;
