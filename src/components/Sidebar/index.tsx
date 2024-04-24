import { FaSearch, FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { VscLibrary } from "react-icons/vsc";

const Sidebar = () => {
    return (
        <aside className="w-120 h-full flex flex-col gap-2">
            <div className="bg-zinc-900 h-1/5 flex flex-col gap-4 p-4 pl-6 rounded-lg">
                <div className="h-1/3 flex gap-1 font-bold items-center">
                    <FaSpotify size={25} color="white" />
                    Spotify
                </div>
                <div className="h-1/3 flex gap-4 font-semibold items-center">
                    <GoHomeFill size={25} />
                    Início
                </div>
                <div className="h-1/3 flex gap-4 font-semibold items-center">
                    <FaSearch size={25}/>
                    Buscar
                </div>
            </div>
            <div className="bg-zinc-900 h-4/5 rounded-lg p-2 pt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center pl-4">
                    <div className="flex gap-4 font-bold justify-start items-center">
                        <VscLibrary size={30} />
                        Sua Biblioteca
                    </div>
                    <IoMdAdd size={25} />
                </div>
                <div className="bg-zinc-800 flex flex-col gap-4 rounded-lg p-4 text-white">
                    <p className="font-bold">
                        Crie sua primeira playlist
                    </p>
                    <p className="">
                        É facil, vamos te ajudar.
                    </p>
                    <button className="btn-circle bg-white text-black h-10 w-28 font-bold text-sm">
                        Criar playlist
                    </button>
                </div>
                <div className="bg-zinc-800 flex flex-col gap-4 rounded-lg p-4 text-white">
                    <p className="font-bold">
                        Que tal seguir um podcast novo?
                    </p>
                    <p className="">
                        Avisaremos você sobre novos episódios.
                    </p>
                    <button className="btn-circle bg-white text-black h-10 w-32 font-bold text-sm">
                        Explore podcasts
                    </button>
                </div>
                <div className="flex flex-col p-4 gap-3">
                    <div className="flex text-xs justify-around gap-4">
                        <p>Legal</p>
                        <p>Segurança e Centro de privacidade</p>
                        <p>Política de privacidade</p>
                    </div>
                    <div className="flex text-xs justify-start gap-4">
                        <p>Cookies</p>
                        <p>Sobre anúncios</p>
                        <p>Acessibilidade</p>
                    </div>
                    <div className="text-sm">
                        <p>Cookies</p>
                    </div>
                    <button className="btn-circle bg-zinc-900 border border-white h-10 w-40 text-white font-bold text-xs flex items-center justify-center gap-1 mt-4">
                        <GrLanguage size={20} />
                        Português do Brasil
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;