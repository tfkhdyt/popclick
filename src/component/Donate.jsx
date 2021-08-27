import React from 'react';
import Swal from 'sweetalert2';

const showDonateDialog = () => {
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
    title: 'Donate',
    html: `<p class="text-start unevent">Ingin <b class='unevent'>POPOWI</b> tetap berjalan? bantulah pengembangan game ini dengan donasi.<br/><br/>
Dana hasil donasi akan digunakan untuk:
<ol class='unevent'>
  <li class='unevent text-start'>Upgrade server</li>
  <li class='unevent text-start'>Upgrade database</li>
  <li class='unevent text-start'>Beli domain</li>
  <li class='unevent text-start'>Beli kuota</li>
  <li class='unevent text-start'>Biaya pelarian bila dev jadi buronan</li>
</ol>`,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Saya mau donate!',
    cancelButtonText: 'Skip dulu'
  }).then((result) => {
    if(result.isConfirmed){
      window.open('https://saweria.co/popowi', '_blank');
    }
  })
}

const Donate = () => {
  return (
    <button className='btn btn-success btn-sm unevent mx-1 mt-1 mb-0' onClick={showDonateDialog}><i class="fas fa-money-bill-wave unevent"></i> Donate</button>
  );
}

export default Donate;