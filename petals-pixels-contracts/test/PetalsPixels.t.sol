// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {PetalsPixels} from "../src/PetalsPixels.sol";

contract TestPetalsPixels is Test {
    PetalsPixels public pp;

    address admin = address(0x1);

    function setUp() public {
        vm.deal(admin, 15 ether);
        
        vm.startPrank(admin);

        pp = new PetalsPixels();
        pp.setBaseURI("https://abc.xyz/");

        vm.stopPrank();
    }

    function test() public {
        vm.startPrank(admin);
        pp.safeMint{value: 0.01 ether}(admin, 13);
        vm.stopPrank();

        assertEq(pp.tokenURI(1), "https://abc.xyz/19");
    }
}