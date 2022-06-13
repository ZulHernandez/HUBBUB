//funsión para disparar el Swal
function nosotros() {
    //disparamos Swal
	Swal.fire({
        //ponemos template
		template: "#nosotrosSwal",
        //seteamos estilo del Swal
        width: '81.46vw',
        customClass: 'swal-height',
        padding: '100px 82px',
        showConfirmButton: false,
        showCloseButton: true,
        backdrop: 'rgba(51,51,51,0.5)',
	});
}