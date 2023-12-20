import "./App.css";
import xmasHeart from "./assets/xmas_heart.jpg";
import cutebear from "./assets/cutebear.png";
import cutekiss from "./assets/cutekiss.png";
import dwarfs from "./assets/dwarfs.png";
import mistletoe from "./assets/mistletoe.png";
function App() {
    const heartsign = "<3";
    return (
        <>
            <main className="flex flex-col bg-black pb-2">
                <div className="relative">
                    <div className="absolute inset-0 grid place-items-center">
                        <div className="flex flex-col items-center whitespace-nowrap">
                            <span className="relative text-6xl font-updock text-gray">
                                God jul
                                <span className="absolute top-[2px] left-[1px] text-red">
                                    God jul
                                </span>
                            </span>
                            <span className="relative text-2xl font-hi-melody text-gray">
                                Maria Hagen {heartsign}
                                <span className="absolute top-[1px] left-[1px] text-red-dark">
                                    Maria Hagen {heartsign}
                                </span>
                            </span>
                        </div>
                    </div>
                    <img src={xmasHeart} alt="julehjerte" />
                </div>
                <section className="px-4 py-8 gap-4 text-white outline-[16px] outline-white outline bg-red-dark rounded-3xl relative top-[-20px] font-montserrat flex flex-col justify-around text-center items-center">
                    <img
                        src={cutekiss}
                        className="absolute opacity-40"
                        alt=""
                    />
                    <img
                        src={cutebear}
                        className="absolute opacity-40 w-16 left-0 rotate-6 bottom-24"
                        alt=""
                    />
                    <img
                        src={dwarfs}
                        className="absolute opacity-60 bottom-10 w-32"
                        alt=""
                    />

                    <svg
                        className="absolute top-4 right-2 rotate-12 opacity-60 z-0"
                        width="130"
                        height="112"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#FF055F"
                        />
                    </svg>
                    <img
                        src={mistletoe}
                        className="absolute opacity-40 w-60 right-4 top-0 rotate-180"
                        alt=""
                    />
                    <svg
                        className="absolute top-6 rotate-[-10deg] left-2 opacity-40 z-0"
                        width="100"
                        height="86"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#187C2E"
                        />
                    </svg>
                    <svg
                        className="absolute bottom-6 rotate-[-20deg] left-2 opacity-60 z-0"
                        width="130"
                        height="112"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#FF055F"
                        />
                    </svg>
                    <svg
                        className="absolute bottom-6 rotate-[20deg] right-2 opacity-40 z-0"
                        width="110"
                        height="96"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#187C2E"
                        />
                    </svg>
                    <h1 className="font-black text-5xl pb-8 z-50">
                        Jeg elsker deg
                    </h1>
                    <svg
                        className=" z-10 mb-8"
                        width="100"
                        height="86"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <p className="italic font-semibold z-10">
                        Håpa du har en superdupermegafantastisk julefeiring
                        sammen med familien!
                    </p>
                    <h1 className="font-black text-xl z-10">
                        Til mitt favoritt menneske <br />
                        {heartsign} Min Maria {heartsign} <br />
                        <span className="font-light italic">
                            Fra din Eskil {heartsign}
                        </span>
                    </h1>
                    <p className="flex gap-1 items-center py-4 font-medium z-10">
                        Gleda mæ kjempemasse til vi møtes i romjula, håpa du
                        lika duften av gaven {heartsign}
                    </p>

                    <svg
                        className="z-10 mt-8"
                        width="100"
                        height="86"
                        viewBox="0 0 100 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0.25C38.8125 0.25 50 11.2188 50 24.75C50 11.2188 61.1875 0.25 75 0.25C88.8125 0.25 100 11.2188 100 24.75C100 45.1438 79.7875 52.3375 52.45 84.8C52.149 85.1565 51.7739 85.4431 51.3507 85.6396C50.9275 85.8362 50.4666 85.938 50 85.938C49.5334 85.938 49.0725 85.8362 48.6493 85.6396C48.2261 85.4431 47.851 85.1565 47.55 84.8C20.2125 52.3375 0 45.1438 0 24.75C0 11.2188 11.1875 0.25 25 0.25Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <h1 className="font-black text-5xl pt-8 z-10">
                        I LOVE YOU
                    </h1>
                </section>
            </main>
        </>
    );
}

export default App;
