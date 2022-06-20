'use strick'

console.log("funcionando")

const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')
const toast = document.querySelector('.toast')

formulario.addEventListener('submit', e => {
    // console.log('me diste click')
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log('campo nombreProducto', datos.get('nombreProducto'))
    console.log('campo urlProducto', datos.get('urlProducto'))
    console.log('campo descripcionProducto', datos.get('descripcionProducto'))

    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    window.setTimeout(() => {

        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    },3000)

    formulario.reset()
})