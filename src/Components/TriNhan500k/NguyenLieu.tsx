import Nep from "../../asset/sticky-rice.png";
import Meat from "../../asset/meat.png";
import Beans from "../../asset/beans.png";
import Banana from "../../asset/banana.png";
import Egg from "../../asset/egg.png";

export const NguyenLieu = () => {
    return (
        <div id="nguyen-lieu" className="bg-[#0e540a] flex w-[100vw] h-[100vh]">
            <div className="mb-12">
                <h2 className="text-white text-center text-4xl font-bold mt-20 mb-20">
                    Nguyên liệu toàn hàng nóng, không mua sỉ, nên giá mắc chút mà ngon nhaaa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-20">
                    <div className="flex flex-col items-center text-center text-white">
                    <img
                        src={Nep}
                        alt="Nếp"
                        className="rounded-full w-[350px] h-[350px] object-cover mb-5"
                    />
                    <p className="text-md">
                        Nếp sáp ngâm cốt dừa (ít à), màu lá dứa xay lọc nước - Có thể đổi màu
                        tím (lá cẩm).<br /><br />
                        Nếp được xào dẻo trước khi nấu để bánh nhanh hơn, có nêm
                        xíu nên ăn vừa miệng. Kiểu nấu này của dân Mỹ Tho.
                    </p>
                    </div>

                    <div className="flex flex-col items-center text-center text-white">
                    <img
                        src={Beans}
                        alt="Đậu"
                        className="rounded-full w-[350px] h-[350px] object-cover mb-5"
                    />
                    <p className="text-md">
                    Đậu xanh cà mua ngoài chợ, trước khi nấu cũng xào sơ để nêm nếm xíu vừa miệng.<br /><br />

                    Bánh chay thì đậu hay nếp đều được làm riêng, khách nhớ dặn.
                    </p>
                    </div>
                    <div className="flex flex-col items-center text-center text-white">
                    <img
                        src={Meat}
                        alt="Thịt"
                        className="rounded-full w-[350px] h-[350px] object-cover mb-5"
                    />
                    <p className="text-md">
                    Thịt heo lọc lấy miếng ngon, ướp xong chiên sơ cho thấm vị, mỡ săn lại, thịt chín sơ.<br /><br />

                    Khách ăn thịt nhiều hay mỡ nhiều thì nhớ dặn để sốp lựa miếng thịt đúng ý - Mỗi đòn bánh 250 gram thịt lận.
                    </p>
                    </div>
                    <div className="flex flex-col items-center text-center text-white">
                    <img
                        src={Banana}
                        alt="Chuối"
                        className="rounded-full w-[350px] h-[350px] object-cover mb-5"
                    />
                    <p className="text-md">
                    (*) Cho bánh tét chuối<br /><br />

                    Mỗi đòn bánh có ít nhất 4 trái chuối, có khi 6 trái. Sốp chỉ bán duy nhất một size bánh 700 gram này thôi, to hơn khách ngán, nhỏ hơn sốp lỗ. Ăn ngon lắm ngoằm ngoằm một hồi là hết một đòn ủa? Nên đừng sợ ăn không hết.
                    </p>
                    </div>

                    <div className="flex flex-col items-center text-center text-white">
                    <img
                        src={Egg}
                        alt="Trứng muối"
                        className="rounded-full w-[350px] h-[350px] object-cover mb-5"
                    />
                    <p className="text-md">
                    Trứng muối<br /><br />

                    Mua ngoài vựa, về lọc rửa ngâm rượu gừng các thứ, hoàn toàn không tanh, bớt mặn vừa vị khi ăn chung với bánh tét, nói chung là ngon lắm chần chừ gì mà không thêm 10k/ trứng?
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
