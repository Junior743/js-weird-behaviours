typeof NaN         // 'number'   -> NaN é considerado número
typeof null        // 'object'   -> bug histórico do JS
typeof []          // 'object'   -> array é objeto
typeof (() => {})  // 'function' -> funções são objetos funcionais
!!'false'          // true       -> string não vazia é truthy
!!undefined        // false      -> undefined é falsy
