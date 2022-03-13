let Saxo = [
  {
    name: "Soprano",
    key: "Nada dasar : B<sub>b</sub>",
    pitchRange: "Rentang nada : A<sub>b3</sub> - E<sub>6</sub>",
    picture: "src/soprano.png",
    description:
      "ini merupakan salah satu jenis dengan nada tinggi. Karena memiliki suara yang tinggi dan lembut, soprano menjadi jenis yang tersulit dari 4 jenis utama. Biasanya soprano digunakan pada lagu smooth jazz seperti “Silhouette”. Desain dari saksofon ini sangat unik, karena soprano adalah saksofon yang bentuknya lurus tidak seperti saksofon biasanya. Jenis ini dipopulerkan oleh Kenny G pada tahun 80'an.",
  },
  {
    name: "Alto",
    key: "Nada dasar : E<sub>b</sub>",
    pitchRange: "Rentang nada : D<sub>b3</sub> - A<sub>b5</sub>",
    picture: "src/alto.png",
    description:
      "Ini merupakan jenis yang paling banyak digunakan, Karena ini merupakan jenis yang paling mudah dari 4 jenis utama bahkan dari ke 14 yang lainnya. Banyak para pemain saksofon bermula dari bermain Alto. Oleh karena itu jenis ini sangat disarankan untuk mereka yang ingin mulai belajar saksofon.",
  },
  {
    name: "Baritone",
    key: "Nada dasar : E<sub>b</sub>",
    pitchRange: "Rentang nada : C<sub>2</sub> - A<sub>4</sub>",
    picture: "src/baritone.png",
    description:
      "Ini merupakan jenis yang terbesar dan terberat diantara 4 jenis utama. Untuk memainkannya kita memerlukan tiupan yang mengeluarkan udara sekaligus dengan banyak, karena untuk membunyikannya memerlukan udara yang banyak. Oleh karena itu bariton menjadi saksofon yang kurang diminati. Baritone merupakan saksofon yang memiliki suara rendah.",
  },
  {
    name: "Tenor",
    key: "Nada dasar : B<sub>b</sub>",
    pitchRange: `Rentang nada : A<sub>b2</sub> - E<sub>5</sub>`,
    picture: "src/tenor.png",
    description:
      "Jenis ini merupakan yang paling populer dikalangan saksofon. Karena tenor memiliki suara yang nyaring dan rendah(diantara alto dan baritone). Jenis ini hampir mirip dengan alto tetapi lebih besar sedikit dari alto serta tenor memiliki ciri khas yaitu lengkungan pada neck-nya. Biasanya tenor digunakan pada musik pop, jazz, dan rock.",
  },
];

function showData(index) {
  let desc = document.getElementById("type-desc-1");
  let key = document.getElementById("type-desc-2");
  let pitch = document.getElementById("type-desc-3");
  let typeimg = document.getElementById("type-img");
  desc.innerHTML = Saxo[index].description;
  key.innerHTML = Saxo[index].key;
  pitch.innerHTML = Saxo[index].pitchRange;
  typeimg.src = Saxo[index].picture;
}

let typeList = document.querySelectorAll(".type-select");
function typeActive() {
  typeList.forEach((link) => link.classList.remove("type-select-active"));
  this.classList.add("type-select-active");
}
typeList.forEach((link) => link.addEventListener("click", typeActive));
