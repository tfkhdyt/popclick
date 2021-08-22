import React from 'react';
import { Howl } from 'howler';

import suara from '../audio/teng.m4a';

class Goodbye extends React.Component {
  audio = new Howl({
    src: [suara],
    loop: true
  });
  
  componentDidMount(){
    this.audio.once('load', () => {
      this.audio.play();
    })
  }
  
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mt-2 text-white mx-auto text-center">
            <h1 id="header">Goodbye</h1>
          </div>
        </div>
        <div className="row mx-3">
          <div className="col-12 col-md-8 my-3 text-white mx-auto">
            <p className="text-center fst-italic">Assalamu'alaikum Wr. Wb.</p>
            <p className="text-start">
              Halo temen-temen semua, saya gak nyangka <b>POPOWI</b> bisa sampe se-viral ini. Yang pada awalnya hanya saya share di group <i>*ngf*rm*t*k* Cr*ng*p*st*ng</i>, sekarang udah tersebar ke mana-mana, bahkan sampe masuk <i>Tigtog</i>.
            </p>
            <p className="text-start">
              Saya tidak anti-rezim, saya tidak bermaksud makar. Tujuan saya membuat web ini hanya untuk melatih skill pemrograman saya. Saya mulai mendalami Bahasa <i>JavaScript</i> 1 bulan yang lalu, dan saya baru mulai belajar menggunakan <i>ReactJS</i> 1 minggu yang lalu. Dalam 1 bulan terakhir saya sudah banyak membuat web app menggunakan <i>JavaScript</i>, dan salah satunya adalah <b>POPOWI</b>.
            </p>
            <p className="text-start">
              Karena <i>Popcat.click</i> yang sedang nge-tren saat ini, saya terinspirasi untuk membuat versi clonenya. Secara gameplay, <b>POPOWI</b> sudah mirip dengan <i>Popcat.click</i>. Tapi ada satu hal yang kurang dan mungkin sudah kalian sadari sejak awal, yaitu <i>Leaderboard</i>
            </p>
            <p className="text-start">
              Alasan saya tidak memasukkan <i>Leaderboard</i> ke dalam <b>POPOWI</b> bukan karena saya lupa, tapi karena saya belum tau caranya 😅. Saya akan tambahkan Leaderboard jika saya sudah tau cara implementasi Database ke dalam <i>ReactJS</i>
            </p>
            <p className="text-start">
              Saya akan nonaktifkan web ini sampai waktu yang belum ditentukan. Namun tenang, <b>POPOWI</b> akan kembali. Selagi menunggu <b>POPOWI</b> kembali, kalian bisa menikmati lagu partai 🐂 dengan menekan layar di mana saja.
            </p>
            <p className="text-start">
              Saya mohon maaf untuk pihak-pihak yang tersinggung, khususnya Pak Joko Widodo 🙏🏼
            </p>
            <p className="text-center fst-italic">Wassalamu'alaikum Wr. Wb.</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Goodbye;