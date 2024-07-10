import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  collapsed: { [key: number]: boolean } = {};
  faqs: { question: string, answer: string }[] = [
    {
      question: 'Bagaimana cara mendaftar sebagai mahasiswa baru?',
      answer: 'Untuk mendaftar sebagai mahasiswa baru, kunjungi website resmi kami dan ikuti langkah-langkah pendaftaran online yang sudah tersedia. Anda akan diminta untuk mengisi formulir pendaftaran, mengunggah dokumen yang diperlukan, dan membayar biaya pendaftaran.'
    },
    {
      question: 'Apa saja persyaratan untuk pendaftaran?',
      answer: 'Persyaratan pendaftaran meliputi ijazah SMA/sederajat, transkrip nilai, foto terbaru, dan dokumen identitas lainnya. Pastikan semua dokumen sudah lengkap dan sesuai dengan ketentuan yang berlaku.'
    },
    {
      question: 'Bagaimana cara mendapatkan beasiswa?',
      answer: 'Untuk mendapatkan beasiswa, Anda harus memenuhi kriteria yang telah ditentukan dan mengikuti proses seleksi yang berlaku. Informasi lebih lanjut tentang beasiswa dapat ditemukan di halaman beasiswa pada website resmi kami.'
    },
    {
      question: 'Kapan jadwal pendaftaran dibuka?',
      answer: 'Jadwal pendaftaran mahasiswa baru dibuka pada awal tahun akademik. Pastikan Anda selalu memeriksa website resmi kami untuk mendapatkan informasi terbaru tentang jadwal pendaftaran.'
    },
    {
      question: 'Bagaimana cara menghubungi layanan bantuan?',
      answer: 'Anda dapat menghubungi layanan bantuan melalui email, telepon, atau chat langsung di website kami. Tim kami siap membantu menjawab pertanyaan dan memberikan panduan yang Anda butuhkan.'
    },
    {
      question: 'Apa saja program studi yang tersedia?',
      answer: 'Kami menawarkan berbagai program studi yang dapat dipilih oleh mahasiswa baru, mulai dari program studi teknik, sains, seni, hingga ilmu sosial. Informasi lengkap tentang program studi dapat dilihat di website resmi kami.'
    },
    {
      question: 'Apakah ada batasan usia untuk mendaftar?',
      answer: 'Tidak ada batasan usia untuk mendaftar sebagai mahasiswa baru di institusi kami. Selama Anda memenuhi persyaratan akademik dan administrasi, Anda dapat mendaftar.'
    },
    {
      question: 'Bagaimana cara mengikuti tes seleksi?',
      answer: 'Informasi tentang jadwal dan prosedur tes seleksi akan diumumkan di website resmi kami. Pastikan Anda mengikuti semua tahapan seleksi dengan baik untuk meningkatkan peluang Anda diterima.'
    },
    {
      question: 'Apakah ada biaya pendaftaran?',
      answer: 'Ya, ada biaya pendaftaran yang harus dibayarkan saat mengajukan pendaftaran sebagai mahasiswa baru. Besar biaya pendaftaran dapat dilihat di website resmi kami.'
    },
    {
      question: 'Bagaimana cara melihat status pendaftaran saya?',
      answer: 'Anda dapat melihat status pendaftaran Anda melalui portal pendaftaran online dengan login menggunakan akun yang telah Anda buat. Semua informasi terkait status pendaftaran akan tersedia di sana.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(index: number) {
    this.collapsed[index] = !this.collapsed[index];
  }

  isCollapsed(index: number): boolean {
    return this.collapsed[index] ?? true;
  }
}
