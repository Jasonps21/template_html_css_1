let daftar_makanan = [
  {
    kategori: "Breakfast",
    nama_makanan: "Kale Chips Art Party",
    harga_makanan: "200.000",
    photo_makanan: "assets/image/breakfast_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
  {
    kategori: "Lunch",
    nama_makanan: "Taiyaki Gastro Tousled",
    harga_makanan: "400.000",
    photo_makanan: "assets/image/lunch_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
  {
    kategori: "Dinner",
    nama_makanan: "Batch Squid Jean Shorts",
    harga_makanan: "350.000",
    photo_makanan: "assets/image/dinner_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
  {
    kategori: "Breakfast",
    nama_makanan: "Kale Chips Art Party",
    harga_makanan: "200.000",
    photo_makanan: "assets/image/breakfast_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
  {
    kategori: "Lunch",
    nama_makanan: "Taiyaki Gastro Tousled",
    harga_makanan: "400.000",
    photo_makanan: "assets/image/lunch_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
  {
    kategori: "Dinner",
    nama_makanan: "Batch Squid Jean Shorts",
    harga_makanan: "350.000",
    photo_makanan: "assets/image/dinner_item.jpg",
    keterangan:
      "Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf...",
  },
];

var list_menu = document.querySelector("#menu-list");
daftar_makanan.forEach((element) => {
  let newElement = document.createElement("div");
  newElement.className = "column-menu";
  newElement.innerHTML =
    `
    <article class="article-menu">
    <p class="judul-kategori" style="padding-top: 30px;">` +
    element.kategori +
    `</p>
    <img src="` +
    element.photo_makanan +
    `" class="img-menu">
    <p class="title-menu"><strong>` +
    element.nama_makanan +
    `</strong></p>
    <p class="description-menu">` +
    element.keterangan +
    `</p>
</article>
 `;
  list_menu.appendChild(newElement);
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
