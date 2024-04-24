import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Card from "../Card";
import image1 from "../../images/lofibeats.jpg";
import image2 from "../../images/todaystophits.jpg";
import image3 from "../../images/chilloutlounge.jpg";
import image4 from "../../images/allout2020s.jpg";
import image5 from "../../images/jazzinthebackground.jpg";
import image6 from "../../images/chillhits.jpg";
import Links from "../Links";
import Socials from "../Socials";
import { FaRegCopyright } from "react-icons/fa";
import Ad from "../Ad";

const Page = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row h-screen gap-2">
                <Sidebar />
                <main className="flex-1">
                    <Navbar />
                    <div className="bg-zinc-900 h-full rounded-b-lg md:h-full sm:h-full">
                        <div className="p-2 pl-4 flex justify-between">
                            <p className="text-white text-2xl font-bold">
                                Playlists do Spotify
                            </p>
                            <p className="font-semibold pr-10">
                                Mostrar tudo
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ml-4">
                            <Card imageSrc={image1} title="lofi beats" description="chill beats, lofi vibes, new tracks every week..." />
                            <Card imageSrc={image2} title="Today's Top Hits" description="Taylor Swift is on top of the Hottest 50!" />
                            <Card imageSrc={image3} title="Chillout Lounge" description="Just lean back and enjoy relaxed beats." />
                            <Card imageSrc={image4} title="All Out 2020s" description="The biggest songs of the 2020s." />
                            <Card imageSrc={image5} title="Jazz in the..." description="Soft instrumental Jazz for all your activities." />
                            <Card imageSrc={image6} title="Chill Hits" description="Kick back to the best new and recent chill..." />
                        </div>
                        <div className="mt-10 md:flex justify-between p-10">
                            <div className="md:w-3/4">
                                <Links />
                            </div>
                            <div className="md:w-1/4">
                                <Socials />
                            </div>
                        </div>
                        <footer className="bg-zinc-900 h-14 rounded-lg">
                            <div className="flex m-5 ">
                                <div className="bg-zinc-800 w-96 h-0.5"></div>
                                <div className="bg-zinc-800 w-96 h-0.5"></div>
                                <div className="bg-zinc-800 w-96 h-0.5"></div>
                            </div>
                            <div className="flex justify-start items-center gap-1 m-7 text-sm">
                                <FaRegCopyright />
                                2024
                                Spotify AB
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
            <Ad />
        </div>
    );
}

export default Page;
