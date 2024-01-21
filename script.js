const container = document.querySelector('.container')

for(let i = 0; i < 16; i++){
    let row = document.createElement('div')

    for(let j = 0; j < 16; j++){
        let column = document.createElement('div')

        column.className = 'column'

        row.append(column)
    }

    row.className = 'row'

    container.appendChild(row)
}
