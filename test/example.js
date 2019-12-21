const CVContract = artifacts.require("./CVContract.sol");

contract("CVContract", accounts => {
  it("...should store the value 89.", async () => {
    const CVContractInstance = await CVContract.deployed();

    // Set value of 89
    await CVContractInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await CVContractInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
