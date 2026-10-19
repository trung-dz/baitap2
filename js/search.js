/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: VŨ TẤN TÀI
   NỘI DUNG: Tìm kiếm thí sinh theo số báo danh và hiển thị tất cả.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

let dangTimKiem = false;

    function hienThiTatCa() {
      dangTimKiem = false;
      $("searchSBD").value = "";
      hienThiDanhSach(quanLy.hienThiDanhSach());
    }

    function thucHienTimKiem() {
      const soBaoDanh = $("searchSBD").value.trim();
      if (!soBaoDanh) {
        $("searchSBD").focus();
        return;
      }
      const ketQua = quanLy.timKiemTheoSBD(soBaoDanh);
      dangTimKiem = true;
      hienThiDanhSach(ketQua ? [ketQua] : [], true);
    }



function khoiTaoTimKiem() {
      $("btnSearch").addEventListener("click", thucHienTimKiem);
      $("searchSBD").addEventListener("keydown", event => {
        if (event.key === "Enter") thucHienTimKiem();
      });
      $("btnShowAll").addEventListener("click", hienThiTatCa);
}
