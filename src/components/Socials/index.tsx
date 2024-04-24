import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex justify-end gap-4">
            <button className="btn-circle bg-zinc-800">
                <span className="flex items-center justify-center">
                    <FaInstagram size={20} color="white" />
                </span>
            </button>
            <button className="btn-circle bg-zinc-800">
                <span className="flex items-center justify-center">
                    <FaTwitter size={20}  color="white"/>
                </span>
            </button>
            <button className="btn-circle bg-zinc-800">
                <span className="flex items-center justify-center">
                    <FaFacebook size={20}  color="white"/>
                </span>
            </button>
        </div>
    );
}

export default Socials;
