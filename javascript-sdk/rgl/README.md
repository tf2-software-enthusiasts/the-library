# logs.tf

The types and SDK that can interact with the [rgl.gg](https://api.rgl.gg/docs)

## Install

Checkout the [jsr page](https://jsr.io/@tf2software/rgl) for more details.

### Examples

A simple example that can request the log json of a particular game:

```ts
const logJson = await getById("3750052");

console.log(logJson);
```

For more examples, see the [documentation on jsr](https://jsr.io/@tf2software/rgl/doc)

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
