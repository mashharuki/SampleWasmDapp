/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flipper';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* flip
	*
	*/
	"flip" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "flip", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [], __options);
	}

	/**
	* increment
	*
	*/
	"increment" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "increment", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [], __options);
	}

	/**
	* changeText
	*
	* @param { string } newText,
	*/
	"changeText" (
		newText: string,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "changeText", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [newText], __options);
	}

	/**
	* get
	*
	*/
	"get" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "get", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [], __options);
	}

	/**
	* getNumber
	*
	*/
	"getNumber" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getNumber", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [], __options);
	}

	/**
	* getText
	*
	*/
	"getText" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getText", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "flipper");
		}, [], __options);
	}

}