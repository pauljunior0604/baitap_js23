// Tính tiền lương nhân viên

function tinhTongLuong() {
    var tienLuong = document.getElementById("Luong1Ngay").value;
    var soNgay = document.getElementById("soNgayLam").value;
    tongLuong = tienLuong * soNgay;
    document.getElementById("tongLuong").innerHTML = tongLuong;
  }
//   Tính trung bình 
function GiaTriTB() {
    var so1 = document.getElementById("soMot").value;
    var so2 = document.getElementById("soHai").value;
    var so3 = document.getElementById("soBa").value;
    var so4 = document.getElementById("soBon").value;
    var so5 = document.getElementById("soNam").value;
    var giaTriTB = 0;
    giaTri =
    parseFloat (so1) +
    parseFloat(so2) +
    parseFloat(so3) +
    parseFloat(so4) +
    parseFloat(so5);
    giaTriTB = parseFloat(giaTri) / 5;
    document.getElementById("giaTriTB").innerHTML = giaTriTB;
  }
  // Quy đổi tiền

function tinhGiaQuyDoi() {
    var soTien = document.getElementById("soTien").value;
    giaQuyDoi = soTien * 23000;
    document.getElementById("giaQuyDoi").innerHTML = giaQuyDoi;
  }
  // Tính chu vi và diện tích

function tinhChuviDienTich() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    
    ketQuaCV = (parseFloat(chieuDai) + parseFloat(chieuRong)) * 2;
    document.getElementById("CV").innerHTML = ketQuaCV;
    ketQuaDT = chieuDai * chieuRong;
    document.getElementById("DT").innerHTML = ketQuaDT;
  }
  // Tính tổng hai ký số
function tinhTong() {
    var tongKySo = document.getElementById("tongHaiSo").value;
    soHangChuc = Math.floor((tongKySo % 100) / 10);
    soDonVi = Math.floor(tongKySo % 10);
    tongHaiSo = parseFloat(soHangChuc) + parseFloat(soDonVi);
    document.getElementById("ketQuaTong").innerHTML = tongHaiSo;
  }