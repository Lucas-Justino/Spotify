const Links = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Empresa</p>
                <p>Sobre</p>
                <p>Empregos</p>
                <p>For the Record</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Comunidades</p>
                <p>Para Artistas</p>
                <p>Desenvolvedores</p>
                <p>Publicidade</p>
                <p>Investidores</p>
                <p>Fornecedores</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Links úteis</p>
                <p>Suporte</p>
                <p>Aokucativo móvel grátis</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Planos do Spotify</p>
                <p>Premium Individual</p>
                <p>Premium Duo</p>
                <p>Premium Família</p>
                <p>Premium Universitário</p>
                <p>Spotify Free</p>
            </div>
        </div>
    );
}

export default Links;