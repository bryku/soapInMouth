# soapInMouth
NodeJs Bad Word Filter. It comes with its own blacklist, but you can add, remove, or modify it to fit your uses.

Versions: 

*	1.0: 2020-10-17
* 1.4: 2020-11-08

You don't have to include single-character variations into the blacklist.

Example: dick, d1ck, di c k, diiiick

The generator will automatically take those into account.

# Examples

```
Input: where did that little shit go?       Output: where did that little **** go?
Input: where did that little sh!t go?       Output: where did that little **** go?
Input: where did that little shet go?       Output: where did that little **** go?
```
