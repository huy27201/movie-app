import React from 'react'
import './FAQPage.scss'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'

function FAQPage() {
    return (
        <div className="main-section">
            <div className="section">
                <FadeIn>
                    <h1 className="title">Câu hỏi thường gặp</h1>
                        <div className="faq-item">
                            <h3 className="faq-question">1. Xem phim bị chậm, mặc dù đã kích hoạt VIP Mode cho phim đó?</h3>
                            <p className="faq-answer">Nếu phim chạy nhưng cứ một đoạn lại bị dừng để chờ load tiếp (dù đã thử chọn các server khác nhau), cần xác định do thiết bị hay do mạng của bạn.</p>
                            <ul className="faq-step">
                                <li>Hãy thử xem phim trên một thiết bị khác (máy tính / điện thoại / TV...). Phần lớn mọi người khi đổi sang thiết bị khác thì phim lại chạy mượt ={'>'} vậy là do thiết bị cũ của bạn. Nếu đó là TV, hãy kiểm tra thiết lập TV và tắt <i>giao thức kết nối mạng IPv6.</i> Nếu đó là một thiết bị chạy iOS, thì hãy <i>thử dùng một trình duyệt khác</i> (chẳng hạn Chrome) thay vì trình duyệt Safari mặc định, nhưng nói chung player trên iOS rất hay có vấn đề với phim bitrate cao + âm thanh 5.1.</li>
                                <li>Nếu phim chạy chậm trên tất cả các thiết bị mà bạn thử, với tất cả các server, thì đó là do nhà mạng của bạn đã bóp <b>băng thông đường truyền quốc tế</b>. Có 2 cách giải quyết: 1. Gọi điện phản ánh với nhà mạng; 2. Sử dụng một VPN (mạng riêng ảo) để tăng tốc độ cho mạng của bạn. Chúng tôi <b>đề xuất bạn dùng ứng dụng WARP</b> ={'>'} <Link to="#" className="link">download tại đây</Link>.</li>
                            </ul>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">2. Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật, hoặc âm thanh bị rè?</h3>
                            <ul className="faq-step">
                                <li>Nếu xem trên điện thoại: Lỗi âm thanh là do trình duyệt của bạn (thường là Chrome). <Link to="#" className="link">Hãy cài & dùng trình duyệt Firefox</Link>!</li>
                                <li>Nếu bạn xem trên PC: Khác với phim / clip trên các web khác (kể cả Youtube), phim trên XemPhim sử dụng âm thanh 5.1 (6 channel) thay vì âm thanh stereo (2 channel). Nếu thiết bị bạn xem chỉ có 2 loa, bạn cần thiết lập chương trình quản lý âm thanh trên thiết bị cho đúng: chọn đúng chế độ với số loa mình có (stereo), đừng chọn nhiều hơn, nếu không thiết bị của bạn sẽ cố gắng xuất âm thanh ra những loa không tồn tại ={'>'} mất tiếng.<br></br>
                                Ví dụ đây là phần chọn các chế độ âm thanh của Realtek HD Audio Manager: <Link to="#" className="link">click vào đây</Link>.</li>
                            </ul>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">3. Làm sao để xem phim trên TV?</h3>
                            <p className="faq-answer">Để xem phim trên TV, TV bạn phải có trình duyệt web. Hầu hết các loại Smart TV những năm gần đây đều có cài sẵn trình duyệt. Nếu TV bạn không có sẵn trình duyệt, bạn có thể cài trình duyệt từ cửa hàng ứng dụng (Google Play Store / CH Play / App Store) trên TV. Với TV Android, bạn nên cài trình duyệt Puffin.</p>
                            <p className="faq-answer">Sau khi cài trình duyệt, truy cập trang web như bạn vẫn làm trên máy tính / điện thoại và xem phim</p>
                        </div>
                    </FadeIn>
            </div>      
        </div>
    )
}

export default FAQPage
