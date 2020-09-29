import chai from 'chai';
import operate from './operate';

describe("operate('10','2','x')", () => {
  context('', () => {
    it("should return '20'", () => {
      chai.expect(operate('10', '2', 'x')).to.equal('20');
    });
  });
});

describe("operate('10','2','÷')", () => {
  context('', () => {
    it("should return '5'", () => {
      chai.expect(operate('10', '2', '÷')).to.equal('5');
    });
  });
});

describe("operate('10','2','+')", () => {
  context('', () => {
    it("should return '12'", () => {
      chai.expect(operate('10', '2', '+')).to.equal('12');
    });
  });
});

describe("operate('10','2','-')", () => {
  context('', () => {
    it("should return '8'", () => {
      chai.expect(operate('10', '2', '-')).to.equal('8');
    });
  });
});

describe("operate('100','2','%')", () => {
  context('', () => {
    it("should return '2'", () => {
      chai.expect(operate('100', '2', '%')).to.equal('2');
    });
  });
});

describe("operate('100','2','@')", () => {
  context('', () => {
    it('should throw Unknown operation exception', () => {
      chai
        .expect(() => {
          operate('100', '2', '@');
        })
        .to.throw(Error, "Unknown operation '@'");
    });
  });
});
