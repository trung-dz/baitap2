/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: TRƯƠNG THÀNH TRUNG
   NỘI DUNG: Lớp QuanLyThiSinh, lưu/đọc dữ liệu localStorage, quản lý trạng thái.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

const khoaLuuTru = "quan_ly_thi_sinh_dai_hoc_v1";

    // Yêu cầu 2: Lớp quản lý gồm thêm, hiển thị, tìm kiếm và thoát.
    class QuanLyThiSinh {
      constructor() {
        this.danhSach = this.docDuLieu();
        this.dangHoatDong = true;
      }

      docDuLieu() {
        try {
          const raw = JSON.parse(localStorage.getItem(khoaLuuTru) || "[]");
          if (!Array.isArray(raw)) return [];
          return raw.filter(item => item && lopTheoKhoi[item.khoiThi] && item.soBaoDanh)
            .map(item => new lopTheoKhoi[item.khoiThi](
              item.soBaoDanh, item.hoTen || "", item.diaChi || "", item.mucUuTien || "Không"
            ));
        } catch (error) {
          console.warn("Không thể đọc dữ liệu đã lưu:", error);
          return [];
        }
      }

      luuDuLieu() {
        try {
          localStorage.setItem(khoaLuuTru, JSON.stringify(this.danhSach));
          return true;
        } catch (error) {
          console.warn("Không thể lưu dữ liệu:", error);
          return false;
        }
      }

      themThiSinh(thiSinh) {
        if (!(thiSinh instanceof ThiSinh)) throw new Error("Dữ liệu thí sinh không hợp lệ.");
        if (this.timKiemTheoSBD(thiSinh.soBaoDanh)) {
          throw new Error("Số báo danh này đã tồn tại. Vui lòng nhập số khác.");
        }
        this.danhSach.push(thiSinh);
        return this.luuDuLieu();
      }

      hienThiDanhSach() {
        return [...this.danhSach];
      }

      timKiemTheoSBD(soBaoDanh) {
        // TRƯƠNG THÀNH TRUNG: Chấp nhận SBD tự chọn, tìm kiếm không phân biệt chữ hoa/thường.
        const ma = String(soBaoDanh).trim().toLocaleLowerCase("vi-VN");
        return this.danhSach.find(ts => String(ts.soBaoDanh).trim().toLocaleLowerCase("vi-VN") === ma) || null;
      }

      thoatChuongTrinh() {
        this.dangHoatDong = false;
      }

      vaoLaiChuongTrinh() {
        this.dangHoatDong = true;
      }
    }
