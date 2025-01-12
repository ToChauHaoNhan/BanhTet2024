
import header from "../../asset/header.png";
import headerBackground from "../../asset/header-background.png";

export const TriNhan500k = () => {
    return (
        <div className="flex w-[100vw] h-[100vh]">
            {/* Left Section */}
            <div className="bg-[#FF6A00] w-1/2 relative flex justify-center items-center">
                <img className="max-h-[500px] z-10" src={header} />
                <img className="absolute top-0 left-0 w-full h-full object-cover z-00" src={headerBackground} />
            </div>

            {/* Right Section */}
            
            <div className="bg-[#0e540a] w-1/2 flex flex-col justify-center items-center text-white relative">
                <div className="text-center">
                    <span className="text-3xl font-semibold underline mb-20 block">HH</span>
                    <h1 className="text-7xl font-bold mb-20">GOM NỒI BÁNH TÉT</h1>
                    <p className="mb-6 text-xl mb-10">Bán gần chục năm rồi mới có web</p>
                    <button className="bg-[#FF6A00] text-white text-bold py-3 px-6 rounded-full text-lg">
                        Mua sớm đi, đắt hàng lắm á!
                    </button>
                </div>
            </div>
        </div>
    );
}
