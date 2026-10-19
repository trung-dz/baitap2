# WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC

## Phân công công việc (gắn trực tiếp vào code)

| Thành viên | Phụ trách | File |
| --- | --- | --- |
| **Phạm Gia Huy** | Lớp ThiSinh; lớp kế thừa Khối A/B/C; kiểm tra nhập và thêm mới thí sinh | `js/models.js`, `js/add.js` |
| **Vũ Tấn Tài** | Hiển thị danh sách, môn thi; tìm kiếm số báo danh; hiện tất cả | `js/display.js`, `js/search.js` | Nhóm trưởng 
| **Trương Thành Trung** | Lớp quản lý, đọc/ghi localStorage; thống kê; thoát; HTML/CSS; tích hợp | `js/storage.js`, `js/app.js`, `index.html`, `style.css` |

**Phân công được lưu dưới dạng chú thích mã nguồn**, không có phần tên thành viên hiển thị trên trang web. Mỗi người phụ trách khoảng 1/3 công việc; số dòng mã thực tế có thể khác nhau.

## Chạy dự án

1. Giải nén cả thư mục (không tách riêng `index.html` khỏi `js/` hoặc `style.css`).
2. Nhấp đúp vào `index.html` để mở trên Chrome, Edge hoặc Firefox.
3. Tự nhập **bất kỳ** số báo danh, họ tên, địa chỉ (không có giá trị đặt sẵn); chọn mức ưu tiên và khối thi A/B/C, rồi nhấn **Thêm thí sinh**.
4. Tìm kiếm bằng SBD hoặc chọn **Hiển thị tất cả**. Chọn **Thoát** để chuyển sang màn hình kết thúc.
5. **Phân công nhóm không hiển thị trên website**. Để xem phân công, mở các file mã nguồn bằng VS Code và xem phần chú thích `<!-- ... -->`, `// ...` hoặc `/* ... */`.

**Lưu ý:** Số báo danh do người sử dụng tự chọn, không được trùng với SBD đã nhập trước đó. Dữ liệu từ các lần chạy trước trên cùng trình duyệt vẫn được giữ nếu đã lưu bằng localStorage.

## Cấu trúc dự án

```
QuanLyThiSinh_TuNhap_3Nguoi/
├── index.html               # Trương Thành Trung
├── style.css                # Trương Thành Trung
├── js/
│   ├── models.js            # Phạm Gia Huy
│   ├── add.js               # Phạm Gia Huy
│   ├── display.js           # Vũ Tấn Tài
│   ├── search.js            # Vũ Tấn Tài
│   ├── storage.js           # Trương Thành Trung
│   └── app.js               # Trương Thành Trung
├── tai_lieu/
│   └── HUONG_DAN_PHAN_CONG.md
└── README.md
```

## Kiến thức OOP và các tính năng

- `ThiSinh` là lớp cha, các lớp `ThiSinhKhoiA`, `ThiSinhKhoiB`, `ThiSinhKhoiC` kế thừa.
- Đa hình thể hiện qua phương thức `getMonThi()` được ghi đè ở từng lớp con.
- `QuanLyThiSinh` quản lý mảng dữ liệu và các nghiệp vụ thêm mới, hiển thị, tìm kiếm, thoát.
- Dữ liệu lưu cục bộ trong `localStorage`, không cần server hoặc cài database.
- Tránh XSS trong danh sách bằng cách gắn nội dung qua `textContent`.

## Thuyết trình theo 3 phần

- **Phạm Gia Huy**: Trình bày OOP, kế thừa, môn thi từng khối, và demo thêm thí sinh.
- **Vũ Tấn Tài**: Trình bày các hàm dựng bảng, tìm số báo danh, và demo kết quả tìm kiếm.
- **Trương Thành Trung**: Trình bày lưu/khôi phục dữ liệu, thống kê, nút thoát, cách liên kết các file.

## Lưu ý

- Để hiển thị code hoặc chỉnh sửa, mở cả thư mục trong Visual Studio Code.
- Thứ tự các thẻ `<script>` cuối `index.html` phải giữ đúng như hiện tại.
- Dữ liệu không được chia sẻ giữa các máy, vì đây là bài tập web thuần HTML/CSS/JS.
- Có thêm file `index_1_file.html` trong thư mục dự án: bản chạy độc lập một file, với phân công ghi trong chú thích mã nguồn (không xuất hiện trên giao diện).
