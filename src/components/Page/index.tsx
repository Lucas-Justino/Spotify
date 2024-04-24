import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";

const Page = () => {
    return (
        <div>
            <div className="flex h-screen gap-2">
                <aside className="w-120 flex flex-col gap-2">
                    <div className="bg-zinc-900 h-1/5 flex flex-col gap-4 p-4 pl-6 rounded-lg">
                        <div className="h-1/3 flex gap-1 font-bold items-center">
                            <FaSpotify color="white" />
                            Spotify
                        </div>
                        <div className="h-1/3 flex gap-4 font-semibold items-center">
                            <GoHomeFill />
                            Início
                        </div>
                        <div className="h-1/3 flex gap-4 font-semibold items-center">
                            <FaSearch />
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
                <main className="flex-1">
                    <div className="bg-zinc-900 w-full h-20 flex justify-between rounded-lg">
                        <div className="flex justify-start items-center gap-2 p-3">
                            <button className="btn-circle bg-black flex justify-center items-center h-7 w-7 pl-1">
                                <MdArrowBackIos />
                            </button>
                            <button className="btn-circle bg-black flex justify-center items-center h-7 w-7">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                        <div className="flex justify-end items-center gap-8 p-10">
                            <button className="font-bold">
                                Inscrever-se
                            </button>
                            <button className="btn-circle bg-white text-black w-28 flex items-center justify-center font-bold">
                                Entrar
                            </button>
                        </div>
                    </div>
                    <div className="bg-orange-500 h-3/4">
                        Tela Main
                    </div>
                    <footer className="bg-purple-800 h-28">
                        FOOTER
                    </footer>
                </main>
            </div>

        </div>
    );
}

export default Page;