/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: PHẠM GIA HUY
   NỘI DUNG: Kiểm tra thông tin, thêm thí sinh và xem trước môn thi.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

function hienThongBao(noiDung, laLoi = false) {
      const notice = $("notice");
      notice.textContent = noiDung;
      notice.className = "notice " + (laLoi ? "error" : "success");
      notice.hidden = false;
    }

    function anThongBao() {
      $("notice").hidden = true;
      $("notice").textContent = "";
    }

function khoiTaoFormThem() {
      $("khoiThi").addEventListener("change", function () {
        const Lop = lopTheoKhoi[this.value];
        const monThi = Lop ? new Lop("", "", "", "").getMonThi().join(" · ") : null;
        $("subjectPreview").textContent = monThi
          ? "Các môn thi: " + monThi
          : "Chọn khối thi để xem các môn dự thi.";
      });

      $("studentForm").addEventListener("submit", function (event) {
        event.preventDefault();
        anThongBao();
        // PHẠM GIA HUY: Lấy nguyên số báo danh do người dùng tự nhập; không tự tạo mã.
        const soBaoDanh = $("soBaoDanh").value.trim();
        const hoTen = $("hoTen").value.trim().replace(/\s+/g, " ");
        const diaChi = $("diaChi").value.trim();
        const mucUuTien = $("mucUuTien").value;
        const khoiThi = $("khoiThi").value;

        if (!soBaoDanh || !hoTen || !diaChi || !mucUuTien || !khoiThi) {
          hienThongBao("Vui lòng điền đầy đủ các trường bắt buộc.", true);
          return;
        }
        // Có thể tự chọn SBD chữ, số, dấu cách hay dấu gạch dưới; chỉ chặn ký tự điều khiển.
        if (soBaoDanh.length > 30 || /[\u0000-\u001F\u007F]/.test(soBaoDanh)) {
          hienThongBao("Số báo danh không hợp lệ hoặc dài quá 30 ký tự.", true);
          $("soBaoDanh").focus();
          return;
        }
        try {
          const Lop = lopTheoKhoi[khoiThi];
          if (!Lop) throw new Error("Khối thi không hợp lệ.");
          const thiSinh = new Lop(soBaoDanh, hoTen, diaChi, mucUuTien);
          const daLuu = quanLy.themThiSinh(thiSinh);
          this.reset();
          $("subjectPreview").textContent = "Chọn khối thi để xem các môn dự thi.";
          hienThiTatCa();
          hienThongBao(daLuu
            ? "Đã thêm thí sinh " + hoTen + " (SBD: " + soBaoDanh + ") thành công!"
            : "Đã thêm vào danh sách tạm thời, nhưng trình duyệt không cho phép lưu lâu dài.", !daLuu);
          $("soBaoDanh").focus();
        } catch (error) {
          hienThongBao(error.message, true);
        }
      });

      $("studentForm").addEventListener("reset", function () {
        anThongBao();
        $("subjectPreview").textContent = "Chọn khối thi để xem các môn dự thi.";
      });
}
