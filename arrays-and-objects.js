[] + []            // ''         -> concatenação de strings vazias
[] + {}            // '[object Object]' -> coerção para string
{} + []            // 0          -> interpretado como bloco + array
[] == ![]          // true       -> coerção dupla
[1,2] + [3,4]      // '1,23,4'   -> arrays viram strings e concatenam
[,,].length        // 2          -> slots vazios, mas contam no length
[1] == 1           // true       -> coerção para número
[1,2] == '1,2'     // true       -> coerção para string
