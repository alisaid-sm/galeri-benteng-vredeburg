export type TArrayOfFasilitas = {
    id: number,
    name: string,
    image: string,
    description: string
};

const arrayOfFasilitas : TArrayOfFasilitas[] = [
    {
        id: 1,
        name: "Toilet",
        image: "fas1.png",
        description: "Fasilitas kamar mandi/toilet menjadi hal penting dalam menunjang kenyamanan pengunjung. Kamar mandi museum terdapat di semua sisi museum yaitu (barat, utara, timur dan selatan)."
    },
    {
        id: 2,
        name: "Taman Bermain Anak",
        image: "fas2.png",
        description: "Museum Benteng Vredeburg Yogyakarta taman yang terdapat di depan pintu keluar ruang pameran diorama IV merupakan taman bermain bagi anak-anak yang dilengkapi dengan permainan anak anak antara lain ayunan, tangga lengkung dan perosotan."
    },
]

export default arrayOfFasilitas;