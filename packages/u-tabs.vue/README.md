# Tabs

## Examples
### Basic

``` html
<u-tabs>
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

### Selected Index

``` html
<u-tabs :selected-index="2">
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

### Readonly & Disabled

``` html
<u-tabs readonly>
    <u-tab title="TabA">Readonly</u-tab>
    <u-tab title="TabB">Readonly</u-tab>
    <u-tab title="TabC">Readonly</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="TabA">Disabled All</u-tab>
    <u-tab title="TabB">Disabled All</u-tab>
    <u-tab title="TabC">Disabled All</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="TabA">Disabled Partially</u-tab>
    <u-tab title="TabB" disabled>Disabled Partially</u-tab>
    <u-tab title="TabC">Disabled Partially</u-tab>
</u-tabs>
```

### Hidden

``` html
<u-tabs :selected-index="2">
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB" hidden>ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```
