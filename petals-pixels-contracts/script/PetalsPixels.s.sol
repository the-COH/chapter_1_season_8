// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Script.sol";

import {PetalsPixels} from "../src/PetalsPixels.sol";

contract DeployPetalsPixels is Script {
    function run() external {
        uint deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        PetalsPixels pp = new PetalsPixels();
        pp.setBaseURI("ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/");
        pp.safeMint{value: 0.01 ether}(0x83c6dBCe02e4064601c9f78Ebe52890D606D8915, 7);

        vm.stopBroadcast();
    }
}