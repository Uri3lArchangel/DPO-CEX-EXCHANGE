//SPDX-License-Identifier:MIT
pragma solidity 0.8.19;

import "./ABIs/usdt.json";

contract TokenContractInterface {
    function decimals() external;
    function balanceOf(_account) external;
    function approve(address _spender,address _amount) external;
    function transferFrom(address _sender, address _receiver, uint256 _value) external;
}