# JavaScript Weird Behaviours

Este repositório é uma coleção de exemplos de comportamentos estranhos e inesperados em JavaScript. O objetivo é demonstrar as peculiaridades da linguagem, principalmente em relação a coerção de tipo, comparações e operadores.

## Exemplos

### `type-coercion.js`

Demonstra como o JavaScript lida com a coerção de tipos em operações matemáticas.

```javascript
null + 3           // 3          -> null é convertido para 0
undefined + 3      // NaN        -> undefined vira NaN
'5' - 2            // 3          -> string vira número
'5' + 2            // '52'       -> concatenação
true + true        // 2          -> true é 1
false + 1          // 1          -> false é 0
'10' * '2'         // 20         -> strings viram números
'10' * 'a'         // NaN        -> string inválida vira NaN
```

### `Comparisons.js`

Exemplos de comparações que podem não ser intuitivas.

```javascript
0 == false         // true       -> coerção para número
'' == false        // true       -> coerção para 0
[] == false        // true       -> [] vira ''
[] == ![]          // true       -> ![] é false; [] == false
null == undefined  // true       -> exceção nas comparações
NaN == NaN         // false      -> NaN é o único valor que não é igual a si mesmo
```

### `arrays-and-objects.js`

Comportamentos inesperados ao trabalhar com arrays e objetos.

```javascript
[] + []            // ''         -> concatenação de strings vazias
[] + {}            // '[object Object]' -> coerção para string
{} + []            // 0          -> interpretado como bloco + array
[1,2] + [3,4]      // '1,23,4'   -> arrays viram strings e concatenam
[,,].length        // 2          -> slots vazios, mas contam no length
[1] == 1           // true       -> coerção para número
[1,2] == '1,2'     // true       -> coerção para string
```

### `strange-functions-and-operators.js`

Exemplos de funções e operadores com resultados surpreendentes.

```javascript
typeof NaN         // 'number'   -> NaN é considerado número
typeof null        // 'object'   -> bug histórico do JS
typeof []          // 'object'   -> array é objeto
typeof (() => {})  // 'function' -> funções são objetos funcionais
!!'false'          // true       -> string não vazia é truthy
!!undefined        // false      -> undefined é falsy
```

### `floating-point-and-IEEE-754.js`

A famosa imprecisão de ponto flutuante em JavaScript.

```javascript
0.1 + 0.2 === 0.3  // false      -> imprecisão de ponto flutuante
0.1 + 0.2          // 0.30000000000000004
```

### `cases-of-confused-logic.js`

Casos onde a lógica de comparação pode ser confusa.

```javascript
false == '0'       // true
false == 0         // true
'' == 0            // true
null >= 0          // true
null > 0           // false
null == 0          // false
```

### `other-bizarre-behaviors.js`

Outros comportamentos bizarros que não se encaixam nas outras categorias.

```javascript
Math.max()         // -Infinity  -> nenhum argumento
Math.min()         // Infinity   -> idem
[NaN].indexOf(NaN) // -1         -> NaN !== NaN
{} + []            // 0          -> pode parecer objeto, mas é uma expressão
!!{}               // true       -> objetos sempre são truthy
```

## Como Usar

Você pode testar qualquer um desses exemplos no console do seu navegador ou em um ambiente Node.js.

## Contribuições

Sinta-se à vontade para abrir uma issue ou enviar um pull request com mais exemplos de comportamentos estranhos do JavaScript.
