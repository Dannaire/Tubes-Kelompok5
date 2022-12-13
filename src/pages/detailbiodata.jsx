import React from 'react';
import { Link } from "react-router-dom";
import image from '../Assets/Js/Image';
import Slideswiper from '../Assets/Js/swiper';
import '../Assets/CSS/detailbiodata.scss';
class Detail extends React.Component{
render() {
  return (
    <div classname="detailbiodata">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css" />
  <link rel="stylesheet" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js" />      
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <nav>
    <div className="logo">
      Kelompok 5
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Profile</Link></li>
    <li><Link to="/">Biodata</Link></li> 
    <li><Link to="/Detail">Detail</Link></li>
    <li><Link to="/Calculator">Calculator</Link></li>
    <li><Link to="/">Member</Link></li> 
    </ul>
  </nav>
  <main>
    <section>
      
      <Slideswiper />
  
      <div className="card_container">
        <div className="card_border">
          <div className="profile_foto">
            <img className="foto_profile" src={image.Rasyid} alt="photo" />
          </div>
          <div className="profile_content">
            <p className="profile_name">Detail Biodata</p>
            <p className="biodata_profile"><b>Nama:</b> Muhammad Rasyid Ridho</p>
            <p className="biodata_profile"><b>Alamat:</b> Sidokare Asri, Candi, Sidoarjo</p>
            <p className="biodata_profile"><b>Skill:</b> UI/UX</p>
            <p className="biodata_profile"><b>Tools:</b> HTML 5, Figma, Bootsrap 5, PHP, MySQL</p>
          </div>
        </div>
      </div>
      <div className="card_container">
        <div className="card_border">
          <div className="profile_foto">
            <img id="b2" className="foto_profile" src={image.Zidane} alt="photo" />
          </div>
          <div className="profile_content">
            <p className="profile_name">Detail Biodata</p>
            <p className="biodata_profile"><b>Nama:</b> Muhammad Zidane Fajarianto</p>
            <p className="biodata_profile"><b>Alamat:</b> Jl.Danau Rawa Pening H8 H13</p>
            <p className="biodata_profile"><b>Skill:</b> Frontend Developer</p>
            <p className="biodata_profile"><b>Tools:</b> HTML 5, CSS 3, PHP, MySQL , Bootstrap 5</p>
          </div>
        </div>
      </div>
      <div className="card_container">
        <div className="card_border">
          <div className="profile_foto">
            <img className="foto_profile" src={image.Nabila} alt="photo" />
          </div>
          <div className="profile_content">
            <p className="profile_name">Detail Biodata</p>
            <p className="biodata_profile"><b>Nama:</b> Nabila Farahana</p>
            <p className="biodata_profile"><b>Alamat:</b> Komplek Jatayu 3 NO 31</p>
            <p className="biodata_profile"><b>Skill:</b> UI/UX</p>
            <p className="biodata_profile"><b>Tools:</b> HTML 5</p>
          </div>
        </div>
      </div>
      <div className="card_container">
        <div className="card_border">
          <div className="profile_foto">
            <img className="foto_profile" src={image.Novita} alt="photo" />
          </div>
          <div className="profile_content">
            <p className="profile_name">Detail Biodata</p>
            <p className="biodata_profile"><b>Nama:</b> Novita Azka Maghfira</p>
            <p className="biodata_profile"><b>Alamat:</b> Jl. Samudra no. 14a Magetan </p>
            <p className="biodata_profile"><b>Skill:</b> UI/UX</p>
            <p className="biodata_profile"><b>Tools:</b> HTML 5, MySQL, PHP, kotlin</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="maps-grid">
        <div className="maps-card">
          <div className="maps-iframe-wrapper">
            <iframe className="maps-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196058.19985464792!2d39.731191455825424!3d21.435101081405005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74d3fb493%3A0x55d1f94f8e094785!2sMasjidil%20Haram!5e0!3m2!1sid!2sid!4v1667181710511!5m2!1sid!2sid" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="maps-card-description">
            <p>
              Favorite Location of
              Muhammad Rasyid Ridho
            </p>
          </div>
        </div>
        <div className="maps-card">
          <div className="maps-iframe-wrapper">
            <iframe className="maps-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.116083807956!2d112.65336941487138!3d-7.9869467942478325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6286f61d4a915%3A0xe4bbdb51c52be7f4!2sMasjid%20Al%20-%20Hafez!5e0!3m2!1sid!2sid!4v1667080255204!5m2!1sid!2sid" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="maps-card-description">
            <p>
              Favorite Location of
              Muhammad Zidane Fajarianto
            </p>
          </div>
        </div>
        <div className="maps-card">
          <div className="maps-iframe-wrapper">
            <iframe className="maps-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7353.64180962246!2d112.5232069495303!3d-7.8828702106539055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880d52e0379d9%3A0x9c94d817cc2686bb!2sJatim%20Park%20I%2C%20Jl.%20Dewi%20Sartika%20Atas%2C%20Sisir%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065314!5e0!3m2!1sen!2sid!4v1667185158842!5m2!1sen!2sid" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="maps-card-description">
            <p>
              Favorite Location of
              Nabila Farahana
            </p>
          </div>
        </div>
        <div className="maps-card">
          <div className="maps-iframe-wrapper">
            <iframe className="maps-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3951.0800751431148!2d112.67062234336865!3d-7.990667499999992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6288672ee6cc7%3A0xaa30a648ccfd5fff!2sBTU%20LAND!5e0!3m2!1sid!2sid!4v1667202652306!5m2!1sid!2sid" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="maps-card-description">
            <p>
              Favorite Location of
              Novita Azka Maghfira
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-content text-center">
              <h2>TEFA Kelompok 5</h2>
              <p>"Guru membuka pintu, tetapi Anda harus masuk sendiri" <br />Thanks For Our Mentor TEFA Ahmad Muzakki </p>
              <div className="hr" />
              <h6>SMK Telkom Malang</h6>
              <h6>+62 1234 5678<span>|</span>+62 8765 1234</h6>
              <div className="contact-social">
                <ul>
                  <li><a className="hover-target" href="https://github.com/Dannaire/Tugas-TEFA-Frontend-1"><i className="fab fa-github" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p>Copyright © 2022 Kelompok 5 All Rights Reserved.</p>
    </footer>
  </main>
</div>
);
}
}


export default Detail;