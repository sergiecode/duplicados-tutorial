


const marcas = ['IBM', 'INTEL', 'INTEL', 'AMD','AMD'];
const unica = [...new Set(marcas)];


const numeros = [1,2,2,3,3,4,5,6,7,8,9,9]
const unicos = numeros.filter((item,index) => {
    numeros.indexOf(item) === index
})

const tecnologias = ['Javascript', 'Python', 'Python', 'C', 'C']
const noDuplicado = tecnologias.reduce((partial, item) => {
    (partial.includes(item)?partial:[...partial,item]) , []
})




