

const periodic_table = document.getElementById("periodic-table")

function add_title(description) {
    alert(description.description)
}

// This big function makes an element for the periodic table.
// It is very complicated, and even I have trouble understanding what I wrote
// So I put those comments.

function make_element(element) {
    var element_div = document.createElement("div") // Create "First Div"
    element_div.classList.add("element")            // add element class to that Div
    if (element.l === "y") {                        // Check to see if you can lick the element
        element_div.classList.add("yes-lick")
    } else if (element.l === "n") {
        element_div.classList.add("no-lick")
    } else if (element.l === "d") {
        element_div.classList.add("death-lick")
    } else if (element.l === "r") {
        element_div.classList.add("radioactive-lick")
    }
    var element_row = document.createElement("div")  // Create "Second Div"
    element_row.classList.add("element-row")         // Add the class to that row
    var elementNumber = document.createElement("p")  // Create "paragraph 1"
    elementNumber.textContent = element.element      // Add text to "paragraph 1"
    var atomicNumber = document.createElement("p")   // Create "Paragraph 2"
    atomicNumber.textContent = "1" // TODO: GET ACTUAL NUMBER
    element_row.appendChild(elementNumber)           // Append "paragraph 1" to "Second Div"
    element_row.appendChild(atomicNumber)            // Append "paragraph 2" to "second Div"

    var element_symbol = document.createElement("p") // Create "Paragraph 3"
    element_symbol.classList.add("atomic-symbol")    // This is the letter
    element_symbol.textContent = "H" // TODO: GET ACTUAL SYMBOLS

    var element_name = document.createElement("p")   // Create "Paragraph 4"
    element_name.classList.add("atomic-name")        // This is the name
    element_name.textContent = element.name

    element_div.appendChild(element_row)             // Append "Second Div" to "First Div"
    element_div.appendChild(element_symbol)          // Append "Paragraph 3" to "First Div"
    element_div.appendChild(element_name)            // Append "Paragraph 4" to "First Div"
    element_div.addEventListener('click', () => {    // When A user clicks the element, this will be called.
        add_title(element)
    });

    return element_div;
}



async function get_elements() {
    const response = await fetch("./lickit.json");
    const result = await response.json();
    // PERIODIC TABLE OUTLINE //
    // -- Key: --
    // 0 = ELement-wide space
    // 1 = Element
    // 2 = Little Gap
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
        var element = result.find(element2 => element2.element === String(eleNum));

        rowDiv.classList.add("row")
        rowDiv.id = `row${rowNum}`;
        row.forEach((column) => {
            console.log(eleNum)
            if (column === 1) {
                var element = result.find(element2 => element2.element === String(eleNum));

                rowDiv.appendChild(make_element(element))

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
        periodic_table.append(rowDiv)
    });
}

get_elements()