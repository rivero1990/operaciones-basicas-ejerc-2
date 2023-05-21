const imgMostradas = document.querySelector("ol");
const CANT_MAX_IMG = 3;

let cantImagenes = 0;

const IMAGEN_1 = "https://th.bing.com/th/id/OIP.F7Y1VI5s5G8aV15yNSIa3wHaEo?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_2 = "https://th.bing.com/th/id/OIP.JbagTlZrLUw-lZdDboHn9wHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_3 = "https://th.bing.com/th/id/OIP.sMgLF7To4puhQrjWr6Hx9gHaFj?w=206&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";


function imgAgregadas() {
    
    switch (cantImagenes) {
        case 0:
            imgMostradas.innerHTML += `
            <li>
                <img src="${IMAGEN_1}" alt="">
            </li>
            `;
            cantImagenes++;
             break;
        case 1:
            imgMostradas.innerHTML += `
            <li>
                <img src="${IMAGEN_2}" alt="">
            </li>
            `;
            cantImagenes++;
             break;
        case 2:
            imgMostradas.innerHTML += `
            <li>
                <img src="${IMAGEN_3}" alt="">
            </li>
            `;
            cantImagenes++;
             break;
        default:
            alert("Error");
            break;
    }
}

function quitarImagenes() {
    switch (cantImagenes) {   
        case 3:
        imgMostradas.innerHTML = `
            <li>
                <img src="${IMAGEN_1}" alt="">
            </li>
            <li>
                <img src="${IMAGEN_2}" alt="">
            </li>
            `;
            cantImagenes--;
            break;
        case 2:
            imgMostradas.innerHTML = `
            <li>
                <img src="${IMAGEN_1}" alt="">
            </li>
            `;
            cantImagenes--;
            break;
         case 1:
            imgMostradas.innerHTML = `
            
            `;
            cantImagenes--;
            break;
        default:
            alert("Error");
            break;
    }
}
