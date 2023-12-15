const productos = [
    {
        id: 1,
        nombre: 'Remera escote V',
        imagen: 'https://cdntienda.universoshopweb.com/pub/media/catalog/product/cache/d7574f12538e546d58299d712612fd64/r/e/reme_3.jpeg',
        precio: 6900,
        stock: 10,
        categoria: 'remeras',
        descripcion: 'Esta remera está confeccionada en jersey de algodón, por que lo que es muy fresca. Tiene un calce super cómodo y canchero. Tiene escote en V y mangas cortas. Es una prenda versátil, tanto para las distintas combinaciones, como para las situaciones de uso.'
    },
    {
        id: 2,
        nombre: 'Remera escote redondo',
        imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/264/325/products/remera-negra1-3bf6465a57f3d33e8815956801365809-640-0.png',
        precio: 6500,
        stock: 8,
        categoria: 'remeras',
        descripcion: 'Esta remera no te puede faltar en tu armario esta temporada! Está confeccionada de jersey de algodón, cuenta escote redondo y es unisex . Combinala con nuestros pantalones Oxford!'
    },
    {
        id: 3,
        nombre: 'Pantalon Oxford',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_788886-MLA31026469906_062019-O.webp',
        precio: 8900,
        stock: 3,
        categoria: 'pantalones',
        descripcion: 'Este pantalón oxford no te puede faltar nunca en tu armario, sea la temporada que sea siempre es un must have. Probalo con blusas o camisas para un look más formal o bien con nuestros buzos oversize para algo más sporty-chic que la rompe.'
    },
    {
        id: 4,
        nombre: 'Pantalon Cargo',
        imagen: 'https://navon.com.ar/wp-content/uploads/2023/01/Pantalon-Cargo-con-refuerzo.jpg',
        precio: 8700,
        stock: 9,
        categoria: 'pantalones',
        descripcion: 'El pantalón de moda en una versión sútil, que se adapta a todo. Este pantalón fue diseñado con vocación de ser una prenda utilitaria, amplia, cómoda y con grandes bolsillos para estar preparada para todo.'
    },
    {
        id: 5,
        nombre: 'Buzo oversize',
        imagen: 'https://acdn.mitiendanube.com/stores/001/841/303/products/mockupbuzomarronl1920x10801-e73205ef70092d3c9a16903075582974-1024-1024.jpg',
        precio: 12700,
        stock: 5,
        categoria: 'abrigos',
        descripcion: 'Buzo tipo Oversize de algodón rústico con estampa en el frente, bolsillos canguro y capucha regulable con cordón. Composición: 100% Algodón de máxima calidad. Son super comodos!!'
    },
    {
        id: 6,
        nombre: 'Campera de Jean',
        imagen: 'https://lavaindumentaria.com.ar/wp-content/uploads/2021/07/wcaca-1.jpg',
        precio: 14600,
        stock: 11,
        categoria: 'abrigos',
        descripcion: 'Campera de denim con lavado stonewash y acidwash. Tiene botones metálicos y roturas. Esta campera es super cómoda y canchera y es un clásico que necesitás para tus outfits.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (productos)
        },2000)
        
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
    setTimeout(() => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
    resolve(productoFiltrado)
        }, 2000)
  } )
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            const productosFiltrados = productos.filter((prod) => prod.categoria === category)
            resolve(productosFiltrados)

        }, 2000)
    })
}