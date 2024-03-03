const danh_sach_ki_thi = {
    1: {
        TenKiThi: "Giữa kì môn Lập trình web",
        Loai: "Tự do",
        SoNguoiThamGia: 50, // Số người tham gia kỳ thi
        DiemTrungBinh: 7.5, // Điểm trung bình của kỳ thi
        danh_sach_cau_hoi: {
            // Danh sách câu hỏi
            1: {
                de_bai:
                    "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
                danh_sach_dap_an: {
                    A: "Tầng 1",
                    B: "Tầng 2",
                    C: "Tầng 3",
                    D: "Tầng 4",
                },
                dap_an_dung: "A",
            },
            2: {
                de_bai:
                    "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
                danh_sach_dap_an: {
                    A: "Tầng 1",
                    B: "Tầng 2",
                    C: "Tầng 3",
                    D: "Tầng 4",
                },
                dap_an_dung: "A",
            },
            3: {
                de_bai:
                    "Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?",
                danh_sach_dap_an: {
                    A: "Tầng 1",
                    B: "Tầng 2",
                    C: "Tầng 3",
                    D: "Tầng 4",
                },
                dap_an_dung: "A",
            },
        },
    },
};

const bai_lam = {
    ma_de: 1,
    phieu_tra_loi: ["A", "B", "B"],
    thoi_gian_lam: "0:22:12",
};

function onPageLoad() {
    const ma_de = bai_lam["ma_de"];
    const ki_thi = danh_sach_ki_thi[ma_de];
    const phieu_tra_loi = bai_lam["phieu_tra_loi"];
    const thoi_gian_lam = bai_lam["thoi_gian_lam"];
    const ds_cauhoi = Object.values(ki_thi["danh_sach_cau_hoi"]);

    let questionTotal = Object.values(ds_cauhoi).length;
    let correctAnswerTotal = 0;

    for (let i = 0; i < ds_cauhoi.length; i++) {
        const cauhoi = ds_cauhoi[i];
        if (phieu_tra_loi[i] === cauhoi.dap_an_dung) {
            correctAnswerTotal += 1;
        }
    }

    const incorrectAnswerTotal = questionTotal - correctAnswerTotal;
    const score = ((correctAnswerTotal / questionTotal) * 10).toFixed(1);
    const completionRate = ((correctAnswerTotal / questionTotal) * 100).toFixed(
        2
    );

    document.getElementById("exam-name").innerText = ki_thi["TenKiThi"];
    document.getElementById("question-total").innerText = questionTotal;
    document.getElementById("correct-answer-total").innerText =
        correctAnswerTotal;
    document.getElementById("score").innerText = score;
    document.getElementById("exam-time").innerText = thoi_gian_lam;
    document.getElementById("participants").innerText =
        ki_thi["SoNguoiThamGia"];
    document.getElementById("completion-rate").innerText =
        completionRate + "%";
    document.getElementById("average-score").innerText =
        ki_thi["DiemTrungBinh"];
}

window.addEventListener("load", onPageLoad);
