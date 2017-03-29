# Pagination

## Examples
### Basic

``` html
<vi-pagination :total="11"></vi-pagination>
<vi-pagination :total="11" :current="6"></vi-pagination>
```

### Side & Around

Use `side` and `around` properties to change the count of displayed numbers.

``` html
<vi-pagination :total="11" :current="6" :side="1" :around="3"></vi-pagination>
```

### Disabled

``` html
<vi-pagination :total="11" disabled></vi-pagination>
```
