# Introduction

This is a Go script that when the `main()` function runs, will create integer variables `i` and `j`. Then, in the first print statement, it checks various scenarios involving the comparison of the variables' addresses. The output of this print is below:

```
true false false
```

The `true` is because the address of `i` is definitely equal to itself. The first `false` is because `i` and `j` are separate variables and so they won't have the same adddress. The second `false` is because `j` has a valid memory address, so it is not `nil`.

The second print will output the below:

```
0 1 2
```

The `a`, `b`, and `c` variables are globally defined as an enumeration starting with 0 and incrementing by 1.

# Build

To build, use the following command:

```
# go build script.go
```

# Usage

To execute after building, use the following command:

```
# ./script
```
