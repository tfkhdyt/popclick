import React, { Component, Fragment } from 'react';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const cookies = new Cookies();

class Team extends Component {
  state = {
    userProv : cookies.get('userProv')
  }
  
  setCookies = (data) => {
    cookies.set('userProv', data , { 
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
  }
  
  setProv = async () => {
    const { value: userProv } = await Swal.fire({
      customClass: {
        container: 'unevent',
        popup: 'unevent',
        header: 'unevent',
        title: 'unevent',
        closeButton: 'unevent',
        icon: 'unevent',
        image: 'unevent',
        content: 'unevent',
        htmlContainer: 'unevent',
        input: 'unevent',
        inputLabel: 'unevent',
        validationMessage: 'unevent',
        actions: 'unevent',
        confirmButton: 'unevent',
        denyButton: 'unevent',
        cancelButton: 'unevent',
        loader: 'unevent',
        footer: 'unevent'
      },
      title: 'Pilih Provinsi Anda',
      html : (cookies.get('userProv')) ? '<font color="red" class="red bold">Jumlah click Anda akan direset jika pindah team!</font>' : '',
      input: 'select',
      inputOptions: {
        'Sumatera': {
          'Aceh' : 'Aceh',
          'Sumatera Utara' : 'Sumatera Utara',
          'Sumatera Barat' : 'Sumatera Barat',
          'Riau' : 'Riau',
          'Kep. Riau' : 'Kep. Riau',
          'Jambi' : 'Jambi',
          'Bengkulu' : 'Bengkulu',
          'Sumatera Selatan' : 'Sumatera Selatan',
          'Bangka Belitung' : 'Bangka Belitung',
          'Lampung' : 'Lampung'
        },
        'Jawa': {
          'DKI Jakarta' : 'DKI Jakarta',
          'Banten' : 'Banten',
          'Jawa Barat' : 'Jawa Barat',
          'Jawa Tengah' : 'Jawa Tengah',
          'DI Yogyakarta' : 'DI Yogyakarta',
          'Jawa Timur' : 'Jawa Timur'
        },
        'Kep. Nusa Tenggara': {
          'Bali' : 'Bali',
          'NT Barat' : 'NT Barat',
          'NT Timur' : 'NT Timur'
        },
        'Kalimantan': {
          'Kalimantan Barat' : 'Kalimantan Barat',
          'Kalimantan Tengah' : 'Kalimantan Tengah',
          'Kalimantan Selatan' : 'Kalimantan Selatan',
          'Kalimantan Timur' : 'Kalimantan Timur',
          'Kalimantan Utara' : 'Kalimantan Utara'
        },
        'Sulawesi': {
          'Sulawesi Utara' : 'Sulawesi Utara',
          'Gorontalo' : 'Gorontalo',
          'Sulawesi Tengah' : 'Sulawesi Tengah',
          'Sulawesi Barat' : 'Sulawesi Barat',
          'Sulawesi Selatan' : 'Sulawesi Selatan',
          'Sulawesi Tenggara' : 'Sulawesi Tenggara'
        },
        'Kep. Maluku': {
          'Maluku Utara' : 'Maluku Utara',
          'Maluku' : 'Maluku'
        },
        'Papua': {
          'Papua Barat' : 'Papua Barat',
          'Papua' : 'Papua'
        }
      },
      inputPlaceholder: 'Pilih Provinsi',
      inputValue: cookies.get('userProv'),
      showCancelButton: true,
      allowOutsideClick: false
    })
    
    if (userProv) {
      this.setCookies(userProv);
      Swal.fire({
        customClass: {
          container: 'unevent',
          popup: 'unevent',
          header: 'unevent',
          title: 'unevent',
          closeButton: 'unevent',
          icon: 'unevent',
          image: 'unevent',
          content: 'unevent',
          htmlContainer: 'unevent',
          input: 'unevent',
          inputLabel: 'unevent',
          validationMessage: 'unevent',
          actions: 'unevent',
          confirmButton: 'unevent',
          denyButton: 'unevent',
          cancelButton: 'unevent',
          loader: 'unevent',
          footer: 'unevent'
        },
        title: `Selamat Datang di Tim ${userProv}!`,
        icon: 'success'
      }).then(() => {
        cookies.set('count', 0)
        window.location.reload();
      });
    }
  }
  
  componentDidMount(){
    if(!this.state.userProv){
      this.setProv();
    }
  }
  
  render () {
    return (
      <Fragment>
        <button className="btn btn-primary btn-sm unevent mt-1 mb-0 mx-1" onClick={this.setProv}><i class="fas fa-user-friends unevent"></i> Ganti Team</button>
      </Fragment>
    );
  }
}

export default Team;