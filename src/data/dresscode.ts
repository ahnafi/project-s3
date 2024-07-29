interface dataKetentuan {
  dayOne: {
    img: { src: string; title?: string; list?: string[] }[];
  };
  dayTwo: {
    img: { src: string; title?: string; list?: string[] }[];
  };
}

const male: dataKetentuan = {
  dayOne: {
    img: [
      {
        src: "/images/dresscode/cowo-day-one.webp",
        title: "Contoh dress code mahasiswa baru Laki-laki day 1",
      },
    ],
  },
  dayTwo: {
    img: [
      {
        src: "/images/dresscode/cowo-day-two.webp",
        title: "Contoh dress code mahasiswa baru Laki-laki day 2",
      },
    ],
  },
};

const female: dataKetentuan = {
  dayOne: {
    img: [
      {
        src: "/images/dresscode/cewe-day-one.webp",
        title: "Contoh dress code mahasiswa baru Perempuan day 1",
        list: ["Rambut wajib dikucir satu dan rambut tidak berwarna"],
      },
      {
        src: "/images/dresscode/cewe-day-one-hijab.webp",
        title:
          "Contoh dress code mahasiswa baru Perempuan yang mengenakan hijab day 1",
        list: ["Kerudung hitam segiempat (dilarang pashmina)"],
      },
    ],
  },
  dayTwo: {
    img: [
      {
        src: "/images/dresscode/cewe-day-two.webp",
        title: "Contoh dress code mahasiswa baru Perempuan day 2",
        list: ["Rambut wajib dikucir satu dan rambut tidak berwarna"],
      },
      {
        src: "/images/dresscode/cewe-day-two-hijab.webp",
        title:
          "Contoh dress code mahasiswa baru Perempuan yang mengenakan hijab day 2",
        list: ["Kerudung hitam segiempat (dilarang pashmina)"],
      },
    ],
  },
};

const ketentuanUmum: string[] = [
  "Pakaian tidak menampilkan lekuk tubuh.",
  "kemeja putih lengan panjang.",
  "Dasi hitam.",
  "Sepatu bertali dominan hitam.",
  "Jas dan topi almamater.",
  "Rambut tidak berwarna",
  "Bagi yang menggunakan ikat pinggang wajib berwarna hitam.",
  "Bagi Laki-laki menggunakan bawahan hitam berupa celana bahan, panjang semata kaki (dilarang skinny Jeans).",
  "Bagi Perempuan menggunakan bawahan berupa rok hitam panjang (dilarang span).",
];

export {type dataKetentuan,male,female,ketentuanUmum}