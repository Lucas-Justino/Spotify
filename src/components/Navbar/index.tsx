import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="bg-zinc-900/55 w-full h-20 flex justify-between rounded-lg">
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
    );
}

export default Navbar;