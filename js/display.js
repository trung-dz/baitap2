/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: VŨ TẤN TÀI
   NỘI DUNG: Hiển thị bảng thí sinh, khối thi, môn thi, số lượng kết quả.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

function taoO(noiDung, lop = "") {
      const td = document.createElement("td");
      td.textContent = noiDung;
      if (lop) td.className = lop;
      return td;
    }

    function hienThiDanhSach(danhSach, laTimKiem = false) {
      const tbody = $("studentRows");
      tbody.replaceChildren();
      capNhatThongKe();
      $("tableWrap").hidden = danhSach.length === 0;
      $("emptyState").hidden = danhSach.length > 0;

      if (danhSach.length === 0) {
        $("emptyTitle").textContent = laTimKiem ? "Không tìm thấy thí sinh" : "Chưa có thí sinh nào";
        $("emptyDescription").textContent = laTimKiem
          ? "Không có hồ sơ nào trùng với số báo danh đã nhập."
          : "Hãy thêm thí sinh đầu tiên bằng biểu mẫu bên trái.";
      }

      for (const ts of danhSach) {
        const tr = document.createElement("tr");
        tr.append(taoO(ts.soBaoDanh, "sbd"));

        const tdTen = document.createElement("td");
        const student = document.createElement("div");
        student.className = "student";
        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = ts.hoTen.trim().charAt(0).toUpperCase() || "?";
        const name = document.createElement("div");
        name.className = "student-name";
        name.textContent = ts.hoTen;
        student.append(avatar, name);
        tdTen.append(student);
        tr.append(tdTen);

        tr.append(taoO(ts.diaChi, "subtle"));
        tr.append(taoO(ts.mucUuTien === "Không" ? "Không ưu tiên" : "Mức " + ts.mucUuTien, "priority"));

        const tdKhoi = document.createElement("td");
        const chip = document.createElement("span");
        chip.className = "block-chip chip-" + ts.khoiThi;
        chip.textContent = "Khối " + ts.khoiThi;
        tdKhoi.append(chip);
        tr.append(tdKhoi);
        tr.append(taoO(ts.getMonThi().join(" · "), "subtle"));
        tbody.append(tr);
      }

      $("resultSummary").textContent = laTimKiem
        ? "Kết quả tìm kiếm: " + danhSach.length + " thí sinh"
        : "Đang hiển thị " + danhSach.length + " thí sinh";
    }
