let nos = 6; // number of strips
let rgbColor; // color of strip
let hexColor; // hex color of strip

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        regen()
    }

    if (event.key === 'a') {
        addStrip()
    }

    if (event.key === 'r') {
        removeStrip()
    }
})

function regen (x) {
    if (x == 'true') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        rgbColor = `rgb(${r}, ${g}, ${b})`
        hexColor = rgbToHex(r, g, b)
        console.log(hexColor)
        document.getElementById(`strip${nos-1}`).style.backgroundColor = rgbColor;
        document.getElementById(`color${nos-1}`).textContent = rgbColor;
        document.getElementById(`hex${nos-1}`).textContent = hexColor;
        return
    } else {
        for (let i = 1; i < nos; i++) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            rgbColor = `rgb(${r}, ${g}, ${b})`
            hexColor = rgbToHex(r, g, b)
            console.log(hexColor)
            document.getElementById(`strip${i}`).style.backgroundColor = rgbColor;
            document.getElementById(`color${i}`).textContent = rgbColor;
            document.getElementById(`hex${i}`).textContent = hexColor;
        }
    }
    console.log('regenerated colors')
}

function addStrip () {
    if (nos < 10) {
        const newStrip = document.createElement('div')
        newStrip.id = `strip${nos}`
        newStrip.className = 'colorStrip'
        const color = document.createElement('div') 
        color.id = `color${nos}`
        color.textContent = rgbColor
        const hex = document.createElement('div')
        hex.id = `hex${nos}`
        hex.textContent = hexColor
        newStrip.appendChild(color)
        newStrip.appendChild(hex)
        const element = document.getElementById('container')
        element.appendChild(newStrip)
        nos++;
        regen('true')
        
    }
}

function removeStrip () {
    if (nos > 3) {
        nos--;
        const element = document.getElementById('container')
        element.removeChild(document.getElementById(`strip${nos}`))
    }
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

window.onload = regen(nos);