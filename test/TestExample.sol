pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CVContract.sol";

contract TestExample {

  function testItStoresAValue() public {
    CVContract cv = CVContract(DeployedAddresses.CVContract());

    cv.set(89);

    uint expected = 89;

    Assert.equal(cv.get(), expected, "It should store the value 89.");
  }

}
