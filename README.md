# Kubets

kubejs typescript template using rspack & swc.

## Why rspack

Most of the tooling right now drop support for ES5 transpilation target, though the support in swc will remain to be seen.

## How to use

> [!WARNING] 
> Build will clear kubejs output directory so proceed with caution.

1.  Each folders in ./scripts each map to corresponding kubejs `${folder}_scripts`
2.  Root folder contents will be copied to kubejs as-is. For example, `./root/assets` -> `kubejs/assets`
3.  Configure `./config/web_server.json/auth`
4.  Configure kubejs path in `./rspack.config.ts/OUTPUT_DIR` relative to this directory
5.  Install with any preferred package manager
6.  Configure rspack as needed
7.  `npm run build`

## Known issues

1.  _for loop_ iterable syntax (`for (kword .. expr ..)`) is not supported by rhino because it can't evaluate `var a, b = c` correctly.
    **Alternative: `.forEach`**
2.  Array spread syntax also suffer the same problem as no. 1. 
    **Alternative: `.concat`**
3.  Argument array spread syntax is also not supported, same problem as no. 1.
    **Alternative: `arr.push.apply(arr, args)`**

## Notes

1.  All modern libs are not available to Rhino and even some are disabled. Refer to [typings](./typings/) for available libs
2.  kubejs typings must be provided manually. Use LLM to help with this.

## Example

Checkout [example-cnc-copper-compat](https://github.com/slainless/kubets/tree/example-cnc-copper-compat)