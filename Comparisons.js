0 == false         // true       -> coerção para número
'' == false        // true       -> coerção para 0
[] == false        // true       -> [] vira ''
[] == ![]          // true       -> ![] é false; [] == false
null == undefined  // true       -> exceção nas comparações
NaN == NaN         // false      -> NaN é o único valor que não é igual a si mesmo
