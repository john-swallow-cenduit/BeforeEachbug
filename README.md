# BeforeEachBug
## Reproducing the error
- Run SpecRunner.html in Chrome

The single test should run through and the console should output:

```
root: begin
<-- Delay here (1)
root: end
inner: begin
<-- Delay here (2)
inner: end
``` 

If the delay at point (1) exceeds the jasmine.DEFAULT_TIMEOUT_INTERVAL value you would expect that the test would error out and stop.

What actually happens is counter-intuitive. 

It triggers the inner beforeEach ANYWAY and you end up with the execution interleaving!

```
root: begin
inner: begin
root: end
inner: end
```

It THEN outputs an error of the form:

 Error: Timeout - Async function did not complete within 5000ms (set by jasmine.DEFAULT_TIMEOUT_INTERVAL)

The error shows itself most prominently when debugging as the timeout will kick in because you pause the code but the fact that your tests carry on trying to run causes enormous confusion.

The issue can be worked around by setting the jasmine.DEFAULT_TIMEOUT_INTERVAL to some larger value.

## Rebuilding the .ts file
- npm install
- npm run build
