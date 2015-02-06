# enum
While working in a ReactJS project, I was using the keyMirror function to create constants files, but had the feeling it was more work than it needed to be. Why create an object with a bunch of null values when all I cared about where the keys? This function is the result. Simply pass as many strings to it as you'd like and you'll end up with an object whose keys are equal to its values:

```
var constants = enum('FOO', 'BAR', 'BUZZ');
!!constants('FOO'); // true
!!constants('BIZZ'); // false
```
