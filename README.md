# BeforeEachbug
## Reproducing the error
Out of the box just run SpecRunner.html in Chrome
The single test will run through and the console will output:

root: begin
root: end
inner: begin
inner: end

with a 1.5 second delay between each being and end.

Then open the developer console and search Source for "root: begin"
Put a breakpoint on the console.log('root: begin') line.
Refresh the page to run the test again.
When the breakpoint is hit - resume.

A lot of the time the order interleaves and the inner beforeEach will start BEFORE the root beforEach has finished.
root: begin
inner: begin
root: end
inner: end

## Rebuilding the .ts file
npm install
npm run build
