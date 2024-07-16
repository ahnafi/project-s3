interface Faq {
  title: string;
  qa: QuestionsAnswer[];
}

interface QuestionsAnswer {
  question: string;
  answer: string[];
}

const faqs: Faq[] = [
  {
    title: "Registrasi Online SPMB",
    qa: [
      {
        question: "Bagaimana Alur registrasi online SPMB?",
        answer: [
          `Calon mahasiswa yang dinyatakan diterima membuka laman http://registrasi.unsoed.ac.id; untuk Mengisi form biodata Mahasiswa Baru secara online serta mengunggah :\nFoto digital berwarna ( baju putih, dasi hitam, latar belakang merah ), Surat Keterangan Penghasilan Orang tua, Kartu Keluarga, Rekening Listrik, Telepon atau Bukti Pembayaran PBB;`,
          `Calon Mahasiswa mencetak bukti kesanggupan UKT dan kemudian Membayar Uang Kuliah Tunggal pada Bank yang telah ditetapkan dengan menggunakan Nomor Ujian;`,
          `Calon Mahasiswa mendapatkan PIN dari Bank, mengakses laman untuk melanjutkan proses registrasi online . Calon Mahasiswa membuat USER ID SIA , mendapatkan Nomor Induk Mahasiswa, dan Mencetak Form F1, Mencetak Pernyataan Mentaati tata tertib sebagai Mahasiswa UNSOED dan bukti registrasi online;`,
          `Melakukan Verifikasi Data Mahasiswa di Kantor Subbag Registrasi & Statistik dengan membawa kelegkapan berkas Form F1, Kesangupan UKT, dan Surat Pernyataan Mematuhi Tata tertib UNSOED ( bermataerai Rp. 6000,- )Bukti Fisik yang telah diunggah ( sesuai pada kolom Persyaratan, kolom Uraian Point 2 );`,
          `Mahasiswa melakukan Tes Kesehatan (untuk Fak. Kedokteran);`,
          `Mahasiswa mendapatkan KTM dan Jas Almater.`,
        ],
      },
    ],
  },
  {
    title: "Registrasi Fisik SPMB",
    qa: [
      {
        question:
          "Apa yang harus dilakukan setelah melakukan registrasi online?",
        answer: [
          `Bagi calon Mahasiswa yang sudah melakukan registrasi online, wajib hadir untuk melakukan registrasi fisik dan mengikuti pengarahan yang tidak dapat diwakilkan`,
        ],
      },
      {
        question: `Kapan pelaksanaan registrasi fisik SPMB dilakukan?`,
        answer: [
          `Pelaksanaan registrasi fisik SPMB dilakukan pada tanggal 5 sd 6 Agustus 2024 di Gedung Registrasi dan Alumni, Kompleks Rektorat Unsoed Jalan Prof. Dr. HR. Boenjamin 708 Purwokerto pukul 08.00 s/d Selesai.`,
        ],
      },
      {
        question: `Dresscode apa yang digunakan ketika melakukan registrasi fisik?`,
        answer: [
          `Laki-Laki menggunakan atasan putih (kemeja), celana bahan hitam dengan sepatu dominan hitam.`,
          `Perempuan menggunakan atasan putih (kemeja), rok bahan hitam (model bebas dan tidak ketat) dengan sepatu dominan hitam.`,
          `notes: bagi perempuan berhijab menggunakan hijab  warna hitam dan bagi yang tidak berhijab diharuskan rambut berwarna hitam dan diikat.`,
        ],
      },
      {
        question: `Apa saja berkas yang harus dibawa saat registrasi fisik?`,
        answer: [
          `Berkas yang perlu dibawa mahasiswa yang perlu dibawa sesuai dengan Form F1 yang dicetak dari sistem registrasi dan dikumpulkan yaitu :`,
          `Kartu Tanda Peserta UTBK-SNBT Tahun 2024, Biodata mahasiswa baru dan Bukti Registrasi Online dicetak dari laman https://registrasi.unsoed.ac.id/apps`,
          `Surat pernyataan mentaati Peraturan dan Tata Tertib di UNSOED di cetak dari laman https://registrasi.unsoed.ac.id/apps, bermeterai Rp.10.000,00 ditandatangani mahasiswa dan orang tua/ wali`,
          `⁠Pernyataan kesanggupan pembayaran biaya pendidikan/Uang Kuliah Tunggal (UKT) yang dicetak dari laman https://registrasi.unsoed.ac.id/apps, bermeterai Rp.10.000,00 ditandatangani mahasiswa dan orang tua/wali`,
          `Surat keterangan sehat dan Pemeriksaan Narkoba (NAPZA) wajib dikeluarkan oleh Klinik Pratama UNSOED. Fakultas Kedokteran : Pendidikan Dokter dan Kedokteran Gigi, dan Fakultas Ilmu-ilmu Kesehatan : Prodi Farmasi dan Prodi Keperawatan, ditambah surat keterangan sudah mengikuti psikotest`,
          `Asli Surat Keterangan lulus/Fotokopi Ijazah yang dilegalisir bagi lulusan 2024, Fotokopi Ijazah yang dilegalisir bagi lulusan 2022 dan 2023.`,
          `Surat keterangan gaji/ pendapatan orang tua/wali yang dikeluarkan oleh pihak yang berwenang dan stempel instansi atau RT/ RW/ Lurah bagi yang tidak bekerja secara tetap/wiraswasta.`,
          `Fotokopi Kuintansi Bukti Pembayaran Listrik/Bukti Pembelian token listrik/PDAM dan Telepon pembayaran bulan terakhir.`,
          `Fotokopi Bukti Pembayaran PBB tahun terakhir.`,
          `⁠Fotokopi Kartu Keluarga tahun terakhir.`,
          `⁠Fotokopi Kartu Badan Penyelenggara Jaminan Sosial (BPJS).`,
          `Surat Keterangan Tidak Mampu/ Keterangan Keluarga Miskin (GAKIN) Asli diketahui kelurahan, Fotocopy Kartu Keluarga Sejahtera (KKS), Kartu Indonesia Sehat (KIS), Kartu Indonesia Pintar (KIP), serta Beras Miskin (RASKIN) bagi mahasiswa diterima beasiswa KIP.`,
          `Fotokopi raport yang telah dilegalisir.`,
          `Surat Penyataakan KIP-K (Bagi mahasiswa diterima beasiswa KIP-K) dicetak dari sistem, bermeterai Rp. 10.000,00 ditandatangani mahasiswa dan orang tua/ wali.`,
          `Pas foto 4 x 6 berwarna 1 lembar.`,
        ],
      },
      {
        question: "Hal-hal tambahan yang dibawa saat registrasi fisik?",
        answer: [`Makanan dan Minuman (optional)`, `Powerbank`, "Charger"],
      },
    ],
  },
];

export { faqs };
