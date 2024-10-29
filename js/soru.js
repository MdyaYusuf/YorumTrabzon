function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
  return cevap === this.dogruCevap
}

let sorular = [
  new Soru("1) 2010-2011 sezonu Spor Toto Süper Lig şampiyonu hangi takımdır?", {a: "Trabzonspor", b: "Fenerbahçe", c: "Galatasaray", d: "Beşiktaş"}, "a"),
  new Soru("2) Trabzonspor'da tüm zamanların en golcü oyuncusu kimdir?", {a: "Burak Yılmaz", b: "Fatih Tekke", c: "Umut Bulut", d: "Hami Mandıralı"}, "d"),
  new Soru("3) Trabzonspor'un bir resmi maçta elde ettiği en farklı galibiyetin skoru hangisidir?", {a: "7-1", b: "9-0", c: "6-0", d: "7-0"}, "b"),
  new Soru("4) Trabzonspor'da en uzun süre görev alan teknik adam kimdir?", {a: "Ahmet Suat Özyazıcı", b: "Abdullah Avcı", c: "Şenol Güneş", d: "Özkan Sümer"}, "a"),
  new Soru("5) Trabzonspor'un bir sezonda en çok gol attığı sezon hangisidir?", {a: "1981-1982", b: "2010-2011", c: "2021-2022", d: "1995-1996"}, "a"),
  new Soru("6) Bir sezonda 34 lig maçında 33 gol atıp, Avrupa Altın Ayakkabı ödülü sıralamasında sekizinci sırada yer alan Trabzonsporlu oyuncu kimdir?", {a: "Fatih Tekke", b: "Alexander Sörloth", c: "Burak Yılmaz", d: "Şota Arveladze"}, "c"),
  new Soru("7) Trabzonspor'un en çok milli oyuncuya sahip olduğu sezon hangisidir?", {a: "1985-1986", b: "1995-1996", c: "2001-2002", d: "2010-2011"}, "b"),
  new Soru("8) Trabzonspor'da toplamda en uzun süre görev yapan başkan kimdir?", {a: "Faruk Nafız Özak", b: "Sadri Şener", c: "Şamil Ekinci", d: "Mehmet Ali Yılmaz"}, "d"),
  new Soru("9) Trabzonspor bir sezonda en fazla kaç puan toplamıştır?", {a: "82", b: "88", c: "84", d: "85"}, "c"),
  new Soru("10) Trabzonspor'un, Türkiye Ligi'nin en iyi savunma performansını sergilediği sezon hangisidir?", {a: "1976-1977", b: "1980-1981", c: "1983-1984", d: "1995-1996"}, "a")
];