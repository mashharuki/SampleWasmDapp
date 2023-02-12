/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flipper';
import type * as ReturnTypes from '../types-returns/flipper';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* flip
	*
	* @returns { boolean }
	*/
	"flip" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "flip", [], __options );
	}

	/**
	* increment
	*
	* @returns { number }
	*/
	"increment" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "increment", [], __options );
	}

	/**
	* changeText
	*
	* @param { string } newText,
	* @returns { void }
	*/
	"changeText" (
		newText: string,
		__options ? : GasLimit,
	){
		return queryJSON( this.__nativeContract, this.__callerAddress, "changeText", [newText], __options );
	}

	/**
	* get
	*
	* @returns { boolean }
	*/
	"get" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "get", [], __options );
	}

	/**
	* getNumber
	*
	* @returns { number }
	*/
	"getNumber" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getNumber", [], __options );
	}

	/**
	* getText
	*
	* @returns { string }
	*/
	"getText" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< string > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getText", [], __options );
	}

}