### GruntJS TS compilation
- flush `build/` archives & compile `.ts` files under `src/`
```
grunt
```

### Default TS compilation

- compile all `.ts/.tsx` files through `tsconfig.json`
```
tsc
```
- compile specific `ts` file
```
tsc src/specs/frisby_status.spec.ts --outDir build/
```

### Test execution
```
npm test build/
```

<img src="https://i.imgur.com/VRlM5gr.png" width="40%" height="40%">
