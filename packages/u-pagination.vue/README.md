# Pagination

## Examples
### Basic

``` html
<u-pagination :total="11"></u-pagination>
<u-pagination :total="11" :current="6"></u-pagination>
```

### Side & Around

Use `side` and `around` properties to change the count of displayed numbers.

``` html
<u-pagination :total="11" :current="6" :side="1" :around="3"></u-pagination>
```

### Readonly & Disabled

``` html
<u-pagination :total="11" readonly></u-pagination>
<u-pagination :total="11" disabled></u-pagination>
```
