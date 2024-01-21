const container = document.querySelector('.container')
const changeGridSize = document.querySelector('#changeGridSize')

// for(let i = 0; i < 32; i++){
//     let row = document.createElement('div')

//     for(let j = 0; j < 32; j++){
//         let column = document.createElement('div')

//         column.className = 'column'

//         column.addEventListener('mouseenter', (event) => {
//             column.classList.add('active')
//         })

//         row.append(column)
//     }

//     row.className = 'row'

//     container.appendChild(row)
// }

const setGridSize = (size) => {
    for(let i = 0; i < 32; i++){
            let row = document.createElement('div')
        
            for(let j = 0; j < 32; j++){
                let column = document.createElement('div')
        
                column.className = 'column'
        
                column.addEventListener('mouseenter', (event) => {
                    column.classList.add('active')
                })
        
                row.append(column)
            }
        
            row.className = 'row'
        
            container.appendChild(row)
        }
}

changeGridSize.addEventListener('click', () => {
    setGridSize(prompt('How big would you like your grid?'))
})
