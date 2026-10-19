/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: TRƯƠNG THÀNH TRUNG
   NỘI DUNG: Khởi chạy hệ thống, thống kê A/B/C, nút Thoát/Vào lại.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

// Điểm vào ứng dụng: tạo đối tượng quản lý và kết nối giao diện.
const quanLy = new QuanLyThiSinh();
const $ = id => document.getElementById(id);

    function capNhatThongKe() {
      const danhSach = quanLy.hienThiDanhSach();
      $("totalCount").textContent = danhSach.length;
      for (const khoi of ["A", "B", "C"]) {
        $("count" + khoi).textContent = danhSach.filter(ts => ts.khoiThi === khoi).length;
      }
    }

function khoiTaoChuongTrinh() {
  // Phạm Gia Huy: bật form nhập, thêm mới thí sinh.
  khoiTaoFormThem();
  // Vũ Tấn Tài: bật tìm kiếm và hiển thị danh sách.
  khoiTaoTimKiem();
  // Trương Thành Trung: thoát và khôi phục phiên làm việc.
      $("btnExit").addEventListener("click", () => {
        quanLy.thoatChuongTrinh();
        $("app").hidden = true;
        $("exitScreen").hidden = false;
      });
      $("btnReturn").addEventListener("click", () => {
        quanLy.vaoLaiChuongTrinh();
        $("exitScreen").hidden = true;
        $("app").hidden = false;
        hienThiTatCa();
      });
  hienThiTatCa();
}

khoiTaoChuongTrinh();
