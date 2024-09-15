# soapInMouth
NodeJs Bad Word Filter. It comes with its own blacklist, but you can add, remove, or modify it to fit your uses.

Soap uses a generator to automatically include alternate spellings and spaces. 

> Example: dick, d1ck, di c k, diiiick

# Examples

```
Input: where did that little shit go?       Output: where did that little **** go?
Input: where did that little sh!t go?       Output: where did that little **** go?
Input: where did that little shi t go?       Output: where did that little ***** go?
```
