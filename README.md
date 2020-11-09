# soapInMouth
NodeJs Bad Word Filter. It comes with its own blacklist, but you can add, remove, or modify it to fit your uses.

Versions: 

*	1.0: 2020-10-17
* 1.4: 2020-11-08

You don't have to include single character variations into the blacklist.

Example: nigga, n1gga, ni gg a

The generater will automatically take those into account.

# Examples

```
Input: big daddy is gay       Output: big daddy is ***
Input: big daddy is GaY       Output: big daddy is ***
Input: big daddy is G a Y     Output: big daddy is *****
Input: big daddy is gaaaay    Output: big daddy is ******
```
