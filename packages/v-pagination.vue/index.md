# Pagination

## Examples
### Basic

``` html
<v-pagination :total="11"></v-pagination>
<v-pagination :total="11" :current="6"></v-pagination>
```

### Side & Around

Use `side` and `around` properties to change the count of displayed numbers.

``` html
<v-pagination :total="11" :current="6" :side="1" :around="3"></v-pagination>
```

### Disabled

``` html
<v-pagination :total="11" disabled></v-pagination>
```
