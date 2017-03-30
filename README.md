## boom-numbers-ts

#### What is it

Boom numbers are numbers consisting only of digits 2 and 3. Given an integer k (0<k<=10^7) , display the k-th Boom number.
[reference](http://www.geeksforgeeks.org/kth-boom-number/)
#### [Type Docs](https://wasabi-io.github.io/boom-numbers-ts)


#### Trying to find algorithm to solve problem.

```
x           1      [ 0 ]
y           10     [ 1 ]
xx          11     [ 1 ]
xy          100    [ 2 ]
yx          101    [ 2 ]
yy          110    [ 2, 1 ]
xxx         111    [ 2, 1 ]
xxy         1000   [ 3 ]
xyx         1001   [ 3 ]
xyy         1010   [ 3, 1 ]
yxx         1011   [ 3, 1 ]
yxy         1100   [ 3, 2 ]
yyx         1101   [ 3, 2 ]
yyy         1110   [ 3, 2, 1 ]
xxxx        1111   [ 3, 2, 1 ]
xxxy        10000  [ 4 ]
xxyx        10001  [ 4 ]
xxyy        10010  [ 4, 1 ]
xyxx        10011  [ 4, 1 ]
xyxy        10100  [ 4, 2 ]
xyyx        10101  [ 4, 2 ]
xyyy        10110  [ 4, 2, 1 ]
yxxx        10111  [ 4, 2, 1 ]
yxxy        11000  [ 4, 3 ]
yxyx        11001  [ 4, 3 ]
yxyy        11010  [ 4, 3, 1 ]
yyxx        11011  [ 4, 3, 1 ]
yyxy        11100  [ 4, 3, 2 ]
yyyx        11101  [ 4, 3, 2 ]
yyyy        11110  [ 4, 3, 2, 1 ]

```

#### Getting Started

* Install Project

```ssh
$ git clone https://github.com/kbukum/boom-numbers-ts.git`
$ cd boom-numbers-ts
$ npm install
```

* Start Project.
```ssh
$ npm run start
```

* run test

```ssh
$ npm test
```

* run coverage

```ssh
$ npm run coverage
```


* export docs

```ssh
$ npm run docs
```

* build code as javascript (common-js)

```ssh
$ npm build
```
