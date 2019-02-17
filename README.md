### GruntJS TS compilation
- flush `build/` archives, compile `.ts` files under `src/`, run specs, and generate reports inside `reports/`
```
grunt
```
- run all the compiled specs [optional]
```
grunt run:commands
```
<img src="https://i.imgur.com/hOzWJiF.png" width="40%" height="40%">
<img src="https://i.imgur.com/VRlM5gr.png" width="40%" height="40%">

### Default TS compilation [optional]

- compile all `.ts/.tsx` files through `tsconfig.json`
```
tsc
```
- compile specific `ts` file
```
tsc src/specs/frisby_status.spec.ts --outDir build/
```

- test execution
```
npm test build/
```
<img src="https://i.imgur.com/02IEgiU.png" width="80%" height="80%">
