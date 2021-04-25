const row = document.getElementById('targets')
let doSomething = () =>  {
    let cartHtml = ''

    if(localStorage.getItem('cart')) {
        var json = JSON.parse( localStorage.getItem('cart') );
        var c = []

        for(const m of movies) {
            const res = json.filter(r => r.id == m.id)
            if(res.length != 0 && res.length > 1){
                c.push(
                    {
                        id: res[0].id,
                        mainImage: res[0].mainImage,
                        title: res[0].title,
                        type: res[0].type,
                        stars: res[0].stars,
                        price: res[0].price * res.length,
                        quantity: res.length
                    }
                )
            }else if(res.length != 0){
                c.push(res[0])
            }
        }
        for(const iterator of c) {
            cartHtml += `<tr>
                            <td align="center">
                                <img src="${iterator.mainImage}" width="50" >
                            </td>
                            <td align="center">${iterator.title}</td>
                            <td align="center">$ ${new Intl.NumberFormat().format(iterator.price)}</td>
                            <td align="center">${iterator.quantity == undefined ? 1 : iterator.quantity}</td>
                        </tr>`
        }

        document.getElementById('tabla-productos').innerHTML = cartHtml
    }
}

let movies = [
    {
        id: 1,
        mainImage: 'img/bloodshot.jpg',
        title: 'BLOODSHOT',
        type: 'PELÍCULA DE ACCION',
        stars: 5,
        price: 10000
    },

    {
        id: 2,
        mainImage: 'img/Avengers.jpg',
        title: 'Avenger End Game',
        type: 'PELÍCULA DE CIENCIA FICCIÓN',
        stars: 5,
        price: 20000
    },

    {
        id: 3,
        mainImage: 'img/godzillakong.jpg',
        title: 'GODZILLA VS KONG',
        type: 'PELÍCULA DE ACCIÓN',
        stars: 5,
        price: 25000
    },
    
    {
        id: 4,
        mainImage: 'img/dosmetrosdeti.jpg',
        title: 'DOS METROS DE TI',
        type: 'PELÍCULA ROMANTICA',
        stars: 5,
        price: 15000
    },

    {
        id: 5,
        mainImage: 'img/joker.jpg',
        title: 'JOKER',
        type: 'PELÍCULA DE SUSPENSO',
        stars: 5,
        price: 10000
    },
    
    {
        id: 6,
        mainImage: 'img/misionrescate.jpg',
        title: 'MISIÓN RESCATE',
        type: 'PELÍCULA DE ACCION',
        stars: 5,
        price: 21000
    },

    {
        id: 7,
        mainImage: 'img/mulan.jpg',
        title: 'MULAN',
        type: 'PELÍCULA INFANTIL',
        stars: 5,
        price: 15000
    },
    
    {
        id: 8,
        mainImage: 'img/spiderman.jpg',
        title: 'SPIDERMAN: LEJOS DE CASA',
        type: 'PELÍCULA DE ACCION',
        stars: 5,
        price: 20000
    },

    {
        id: 9,
        mainImage: 'img/toystory.jpg',
        title: 'TOY STORY 4',
        type: 'PELÍCULA INFANTIL',
        stars: '5',
        price: 17000
    },
    
    {
        id: 10,
        mainImage: 'img/justicleague.jpg',
        title: 'JUSTICE LEAGUE',
        type: 'PELÍCULA DE CIENCIA FICCIÓN',
        stars: 5,
        price: 18000
    },

    {
        id: 11,
        mainImage: 'img/aladdin.jpg',
        title: 'ALADDIN',
        type: 'PELÍCULA INFANTIL',
        stars: 5,
        price: 20000
    },
    
    {
        id: 12,
        mainImage: 'img/terminator.jpg',
        title: 'TERMINATOR: DARK FATE',
        type: 'PELÍCULA DE ACCION',
        stars: 5,
        price: 15000
    }
]
let html = ''
let calification = ''
if(row)
{
    for(let i = 0; i<movies.length; i++)
    {
        for(let j = 0; j<movies[i].type.length; j++) {
            calification += `<img src="images/star.png" alt="">`
        }

        html += `<div class="tarjeta">
                    <img src="${movies[i].mainImage}" width="300" height="400" alt="">
                    <div>                    
                        <h3>${movies[i].title}</h3>
                        <small>${movies[i].type}</small>
                        <div>
                            <div>
                                ${calification}   
                            </div>
                            <span>$${movies[i].price}</span>
                        </div>  
                        <button data-id="${movies[i].id}" class="add">Agregar al carrito</button>
                    </div>
                </div>`
    }
}
row.innerHTML = ""
row.innerHTML = html;

document.addEventListener('click', function (event) {
	if (!event.target.matches('.add')) return;
    let id = event.target.attributes[0].value;
    const result = movies.filter(m => m.id == id);

    if(result.length != 0) {
        let cartMovies = localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : []
        cartMovies.push(result[0])
        localStorage.setItem('cart', JSON.stringify(cartMovies))
        doSomething()
        alert("Pelicula agregada al carrito")
    }
}, false);

document.addEventListener('click', function (event) {
	if (!event.target.matches('#clean-cart')) return;
    localStorage.setItem('cart', '[]')
    doSomething()
}, false);
document.addEventListener('DOMContentLoaded', doSomething, false);