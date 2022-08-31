

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let peso = document.querySelector("#peso");
let text = document.getElementById("resultado");

solicitar.addEventListener('click', () => {

    // if (peso.value <= 75) {
    //     swal({

    //         title: "Plan Número 1- Protein Diet",
    //         text: "La dieta baja en carbohidratos (o Low carb, como se la conoce en inglés) restringe los carbohidratos. Los carbohidratos se encuentran mayormente en los alimentos azucarados, la pasta y el pan. En su lugar se consume comida a base de ingredientes naturales, enfocándose en proteínas y verduras y grasas naturales.",
    //         icon: "success",
    //     })
    // }
    // else {
    //     swal({
    //         title: "Plan Número 2-Low Carb!",
    //         text: "La dieta baja en carbohidratos (o Low carb, como se la conoce en inglés) restringe los carbohidratos. Los carbohidratos se encuentran mayormente en los alimentos azucarados, la pasta y el pan. En su lugar se consume comida a base de ingredientes naturales, enfocándose en proteínas y verduras y grasas naturales.",
    //         icon: "success",
    //     })

    // }

    // APLICACIÓN DE OPERADORES AVANZADOS/TERNARIOS EN LAS LÍNEAS DE ABAJO. LA IDEA ES APLICAR LA COMPLEJIDAD PARA EL PROYECTO FINAL.

    (peso.value <= 75) ? swal({

        title: "Plan Número 1- Protein Diet",
        text: "La dieta Protein Diet es alta en proteinas y se basa en alimentos altos en proteinas para ganar peso a traves de la masa muscular que se genera",
        icon: "success",
    })
        :
        swal({
            title: "Plan Número 2-Low Carb!",
            text: "La dieta baja en carbohidratos (o Low carb, como se la conoce en inglés) restringe los carbohidratos. Los carbohidratos se encuentran mayormente en los alimentos azucarados, la pasta y el pan. En su lugar se consume comida a base de ingredientes naturales, enfocándose en proteínas y verduras y grasas naturales.",
            icon: "success",
        })

})






// LOCAL STORAGE GUARDA NUTRICIONISTAS ASIGNADOS A CADA PLAN A DEFINIR EN PROYECTO



const nutricionistas = [{
    name: "Lic. Iriarte",
    age: 33,
}, {
    name: "Lic. Duarte",
    age: 27,
}, {
    name: "Lic. Dorrego",
    age: 25
}]

// DESESTRUCTURACIÓN POR ARRAYS DE NOMBRE DE NUTRICIONISTAS

const [a,b,c,d] = nutricionistas

console.log(a.name)
console.log(b.name)
console.log(c.name)


localStorage.setItem("nutricionistas", JSON.stringify(nutricionistas));

