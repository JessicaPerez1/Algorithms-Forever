var expect = chai.expect;

describe("acronymBuilder", function () {
  it("should return 'ABC' when given the 'always be coding'", function () {
    //Arrange
    //putting the inputs and expected outputs into variables
    var str = "always be coding";
    //Act
    var result = acronymBuilder(str);
    //Assert
    expect(result).to.eql("ABC");
  });

  it("should return 'DGS' when given the 'don't get stuck", function () {
    var str = "don't get stuck";

    var result = acronymBuilder(str);

    expect(result).to.eql("DGS");
  });
});
