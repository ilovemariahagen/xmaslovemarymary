import "./App.css";
import xmasHeart from "./assets/xmas_heart.jpg";
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
                <section className="p-4 gap-4 text-white outline-[16px] outline-white outline bg-red-dark rounded-3xl relative top-[-20px] font-montserrat flex flex-col justify-around text-center items-center">
                    <h1 className="font-black text-5xl pb-8">Jeg elsker deg</h1>
                    <svg
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
                    <p className="italic font-semibold">
                        Håpa du har en superdupermegafantastisk julefeiring
                        sammen med familien!
                    </p>
                    <h1 className="font-black text-5xl">
                        Æ ÆLSKA DÆÆÆÆÆ OMG Æ GLEDAMÆ SÅNN TIL Å SE DÆ !!!
                    </h1>
                    <p className="flex gap-1 items-center py-4 font-medium">
                        Gleda mæ kjempemasse til vi møtes i romjula, håpa du
                        lika duften av gaven {heartsign}
                    </p>

                    <svg
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
                    <h1 className="font-black text-5xl pt-8">I LOVE YOU</h1>
                </section>
            </main>
        </>
    );
}

export default App;
