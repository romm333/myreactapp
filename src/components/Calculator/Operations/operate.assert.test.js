import assert from 'assert';
import operate from './operate';

describe("operate('10','2','x')", () => {
  context('', () => {
    it("should return '20'", () => {
      assert.strictEqual(operate('10', '2', 'x'), '20');
    });
  });
});

describe("operate('10','2','÷')", () => {
  context('', () => {
    it("should return '5'", () => {
      assert.strictEqual(operate('10', '2', '÷'), '5');
    });
  });
});

describe("operate('10','2','+')", () => {
  context('', () => {
    it("should return '12'", () => {
      assert.strictEqual(operate('10', '2', '+'), '12');
    });
  });
});

describe("operate('10','2','-')", () => {
  context('', () => {
    it("should return '8'", () => {
      assert.strictEqual(operate('10', '2', '-'), '8');
    });
  });
});

describe("operate('100','2','%')", () => {
  context('', () => {
    it("should return '2'", () => {
      assert.strictEqual(operate('100', '2', '%'), '2');
    });
  });
});

describe("operate('100','2','@')", () => {
  context('', () => {
    it('should throw Unknown operation exception', () => {
      assert.throws(
        () => {
          operate('100', '2', '@');
        },
        Error,
        "Unknown operation '@'"
      );
    });
  });
});
