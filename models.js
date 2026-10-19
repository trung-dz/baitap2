/* ===============================================================
   ĐỒ ÁN: WEBSITE QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC
   THÀNH VIÊN PHỤ TRÁCH: PHẠM GIA HUY
   NỘI DUNG: Lớp ThiSinh, ThiSinhKhoiA/B/C và các môn thi theo khối.
   Chú ý: Phân công nhóm để học tập và báo cáo.
   =============================================================== */
"use strict";

// Yêu cầu 1: Xây dựng lớp cơ sở và 3 lớp thí sinh kế thừa.
    class ThiSinh {
      constructor(soBaoDanh, hoTen, diaChi, mucUuTien, khoiThi) {
        this.soBaoDanh = soBaoDanh;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.mucUuTien = mucUuTien;
        this.khoiThi = khoiThi;
      }
      getMonThi() { return []; }
    }

    class ThiSinhKhoiA extends ThiSinh {
      constructor(soBaoDanh, hoTen, diaChi, mucUuTien) {
        super(soBaoDanh, hoTen, diaChi, mucUuTien, "A");
      }
      getMonThi() { return ["Toán", "Lý", "Hoá"]; }
    }

    class ThiSinhKhoiB extends ThiSinh {
      constructor(soBaoDanh, hoTen, diaChi, mucUuTien) {
        super(soBaoDanh, hoTen, diaChi, mucUuTien, "B");
      }
      getMonThi() { return ["Toán", "Hoá", "Sinh"]; }
    }

    class ThiSinhKhoiC extends ThiSinh {
      constructor(soBaoDanh, hoTen, diaChi, mucUuTien) {
        super(soBaoDanh, hoTen, diaChi, mucUuTien, "C");
      }
      getMonThi() { return ["Văn", "Sử", "Địa"]; }
    }

    const lopTheoKhoi = { A: ThiSinhKhoiA, B: ThiSinhKhoiB, C: ThiSinhKhoiC };
