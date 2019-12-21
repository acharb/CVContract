pragma solidity ^0.5.0;

import "./CVExtender.sol";

contract CVContract is CVExtender {

    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    function getAddress() public view returns(string memory) {
        return "https://www.linkedin.com/in/aleccharbonneau/";
    }

    function getDescription() public view returns(string memory) {
        return "Full-Stack Engineer excited about Blockchain and its possibilities, let's connect!";
    }
    function getTitle() public view returns(string memory) {
        return "SimpleExample";
    }
    function getAuthor() public view returns(string memory, string memory) {
        return ("Alec", "alec.charbonneau@gmail.com");
    }
}