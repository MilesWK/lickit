// PERIODIC TABLE OUTLINE //
// -- Key: --
// 0 = ELement-wide space
// 1 = Element
// 2 = Little Gap


async function get_elements() {
    const response = await fetch("./lickit.json");
    const result = await response.json();
    outline = [
    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
    var rowNum = 1;
    var eleNum = 1;
    outline.forEach((row) => {
        console.log(row)
        var rowDiv = document.createElement("div")

        rowDiv.classList.add("row")
        rowDiv.id = `row${rowNum}`;
        row.forEach((column) => {
            console.log(eleNum)
            if (column === 1) {
                var element = result.find(element2 => element2.element === String(eleNum));
                console.log(element)
                var element_div = document.createElement("div")
                element_div.classList.add("element")
                var element_row = document.createElement("div")
                element_row.classList.add("element-row")
                var elementNumber = document.createElement("p")
                elementNumber.textContent = element.element
                var atomicNumber = document.createElement("p")
                atomicNumber.textContent = "1" // TODO: GET ACTUAL NUMBER
                element_row.appendChild(elementNumber)
                element_row.appendChild(atomicNumber)

                var element_symbol = document.createElement("p")
                element_symbol.classList.add("atomic-symbol")
                element_symbol.textContent = "H" // TODO: GET ACTUAL SYMBOLS

                var element_name = document.createElement("p")
                element_name.classList.add("atomic-name")
                element_name.textContent = element.name

                element_div.appendChild(element_row)
                element_div.appendChild(element_symbol)
                element_div.appendChild(element_name)

                rowDiv.appendChild(element_div)

                eleNum++
            } else if (column === 0) {
                var blank_space = document.createElement("div");
                blank_space.classList.add("big-space")
                rowDiv.appendChild(blank_space)
            } else if (column === 2) {
                var little_space = document.createElement("div")
                little_space.classList.add("little-space")
                rowDiv.appendChild(little_space)
            }
        });
        rowNum++
        document.body.append(rowDiv)
    });
}

get_elements()