describe('checkBrackets', function() {
  // Incorrect cases
  it('should return -1 for undefined', function() {
    assert.equal(checkBrackets(undefined), -1);
  });

  it('should return -1 for null', function() {
    assert.equal(checkBrackets(null), -1);
  });

  it('should return -1 for a number', function() {
    assert.equal(checkBrackets(123), -1);
  });

  it('should return -1 for a string without brackets', function() {
    assert.equal(checkBrackets('Hello, world!'), -1);
  });

  it('should return 2 for a string with mismatched brackets', function() {
    assert.equal(checkBrackets(')(()()'), 2);
  });

  // Correct cases
  it('should return -1 for an empty string', function() {
    assert.equal(checkBrackets(''), -1);
  });

  it('should return 0 for a string with balanced brackets', function() {
    assert.equal(checkBrackets('(()())'), 0);
  });

  it('should return 1 for a string with one missing closing bracket', function() {
    assert.equal(checkBrackets('(()()'), 1);
  });

  it('should return 1 for a string with one missing opening bracket', function() {
    assert.equal(checkBrackets(')()()'), 1);
  });

  it('should return 1 for a string with one missing closing brackets', function() {
    assert.equal(checkBrackets('()(()'), 1);
  });

  it('should return 2 for a string with two missing opening brackets', function() {
    assert.equal(checkBrackets(')())()'), 2);
  });

  it('should return -1 for NaN', function() {
    assert.equal(checkBrackets(NaN), -1);
  });
  it("(1)))))()(()()()()()()()()(dasfsdg))2(()", function() {
    assert.equal(checkBrackets('1)))))()(()()()()()()()()(dasfsdg))2(()'), 6);
  });
  it("()()()()1)()(())2(()", function() {
    assert.equal(checkBrackets('()()()()1)()(())2(()'),2);
  });
  it("(1)()(())2(()((((((((", function() {
    assert.equal(checkBrackets('(1)()(())2(()(((((((('),9);
  });
  it("()()((()))", function() {
    assert.equal(checkBrackets('dlas;jkdklas)))))(((((jdklasdlk()asakldajklss()'), 10);
  });
  it("1)()(())2(()", function() {
    assert.equal(checkBrackets('1)()(())2(()'), 2);
  });
  it("()", function() {
    assert.equal(checkBrackets('()'),0);
  });
  it("()()())))dasdada((())", function() {
    assert.equal(checkBrackets('()()())))dasdada((())'), 4);
  });
  it("1s)s(ds)sd(d(s))df2((s)", function() {
    assert.equal(checkBrackets('1s)s(ds)sd(d(s))df2((s)'), 2);
  });
  it("((((((()))))))(()())", function() {
    assert.equal(checkBrackets('1)()(())2(()((((dsadsa((((dasdsa))dasdas)))'), 5);
  });
});