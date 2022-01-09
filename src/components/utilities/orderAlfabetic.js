
function orderAlf(list, order) {
    if (list.length <= 1) {
        return list;
    }

    var longitud = Math.floor(list.length / 2)
    var derecha = list.slice(0, longitud)
    var izquierda = list.slice(longitud)

    return merge(orderAlf(izquierda,order), orderAlf(derecha,order), order);
}
function merge(izquierda, derecha, order) {
    let result = []
    if (order === "desc") {
        while (izquierda.length && derecha.length) {
            if (izquierda[0].name > derecha[0].name) {
                result.push(izquierda.shift())

            } else if (izquierda[0].name < derecha[0].name) {
                result.push(derecha.shift())
            }

        }
        return [...result, ...izquierda, ...derecha]
    }
    if(order==="asc"){
        while (izquierda.length && derecha.length) {
            if (izquierda[0].name < derecha[0].name) {
                result.push(izquierda.shift())

            } else if (izquierda[0].name > derecha[0].name) {
                result.push(derecha.shift())
            }

        }
        return [...result, ...izquierda, ...derecha]
    }
}

export {orderAlf}