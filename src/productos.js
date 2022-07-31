const catalogo=

[
    {
        id:'1',
        marca: "Moto E32 64GB ",
        precio: "$ 30.000,00.-",
        stock: 10,
        img:"../src/img/cel1.webp",
        descripcion:"Fino, moderno y duradero, el moto e32 es elegante en el exterior e inteligente en el interior. Una pantalla ultra gran angular HD+ con una rápida velocidad de actualización de 90 Hz te ofrece una experiencia visual fluida de borde a borde"
    }, {
        id:'2',
        marca: "Samsung A03 Core ",
        precio: "$ 40.000,00.-",
        stock: 8,
        img:"../src/img/cel2.webp",
        descripcion:"Ampliá tu visión con la pantalla Infinity-V de 6,5 pulgadas de Galaxy A03 Core y mira lo que te estuviste perdiendo. Gracias a la tecnología HD+, tus contenidos cotidianos se ven mejor: nítidos, definidos y claros."
    }, {
        id:'3',
        marca: "Moto G57 5G ",
        precio: "$ 50.000,00.-",
        "stock": 2,
        "img":"../src/img/cel3.webp",
        descripcion:"La pantalla Max Vision HD+ de 6.5 tiene una relación de aspecto de 20:9 para que te desplaces menos y veas más. La relación pantalla-cuerpo de 87 % significa que hay más espacio en la pantalla, pero aún así podés usar el teléfono cómodamente con una sola mano."
    }, {
        id:'4',
        "marca": "Samsung A22 5G ",
        "precio": "$ 60.000,00.-",
        "stock": 3,
        "img":"../src/img/cel4.webp",
        descripcion:"El Galaxy A22 Core combina curvas suaves y una parte trasera texturizada para mejorar el agarre, mientras su amplia y suave pantalla permite disfrutar plenamente los vídeos. Un patrón de rayas cerca de la cámara añade estilo y llama la atención. Elegí entre los colores negro o azul."
    }, {
        id:'5',
        "marca": "Moto EDGE 30 ",
        "precio": "$ 70.000,00.-",
        "stock": 5,
        "img":"../src/img/cel5.webp",
        descripcion:"Conectate a redes 5G* y accedé a conexiones superrápida, ya sea cuando cargues la sección de noticias de Instagram o cuando descargues tu programa favorito en segundos*. Aprovechá al máximo el nuevo estándar de Wi-Fi de 6 GHz y conectate a una velocidad de gigabits aún más rápida con Wi-Fi 6*. Disfrutá de una experiencia sin interrupciones gracias al procesador Qualcomm® Snapdragon Elite Gaming™, que ofrece opciones avanzadas de personalización, gráficos ultrar reales y un desempeño veloz."
    }, {
        id:'6',
        "marca": "Samsung S20 FF 5G",
        "precio": "$ 80.000,00.-",
        "stock": 15,
        "img":"../src/img/cel6.webp",
        descripcion:"El Samsung Galaxy S20 es el nuevo flagship para el 2020 de la serie Galaxy S de Samsung. Con una pantalla QHD+ de 6.2 pulgadas y tasa de refresco de 120 Hz, el Galaxy S20 está potenciado por un procesador Snapdragon 865 en su variante para USA o un procesador Exynos 990 en su versión internacional. "
    }
]

export const getCatalogo = () =>{
    return new Promise((resolve, reject) =>{
        
            resolve(catalogo)
        
})
}




export const getCatalogoById = (Id) =>{
    return new Promise((resolve, reject) =>{
        
            resolve(catalogo.find(catal => catal.id === Id))
        
    })
}