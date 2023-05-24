//SPDX-License-Identifier:MIT
pragma solidity 0.8.19;

import "./interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract exchange{
    using SafeMath for uint256;
    address payable feeReceiver;
    TokenContractInterface private tokenContract;
    constructor(address payable _feeReceiver,address _tokenContractAddress){
        tokenContract = TokenContractInterface(_tokenContractAddress);
        feeReceiver=_feeReceiver;
    }
    function returnDecimal() internal view returns(uint256) {
        return tokenContract.decimals();
    }

    // function buy(uint256 _amountOfDPO, uint256 _priceOfExhcnageToken)external{
    //     uint256 total = ((0.001).div( _priceOfExhcnageToken)).mul(_amountOfDPO);
    //     tokenContract.approve(address(this),total);
    // }
}
