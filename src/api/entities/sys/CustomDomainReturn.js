// @flow

import {create, TypeRef} from "../../common/utils/EntityUtils"

import type {StringWrapper} from "./StringWrapper"

export const CustomDomainReturnTypeRef: TypeRef<CustomDomainReturn> = new TypeRef("sys", "CustomDomainReturn")
export const _TypeModel: TypeModel = {
	"name": "CustomDomainReturn",
	"since": 9,
	"type": "DATA_TRANSFER_TYPE",
	"id": 731,
	"rootId": "A3N5cwAC2w",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_format": {
			"id": 732,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		},
		"validationResult": {
			"id": 733,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		}
	},
	"associations": {
		"invalidDnsRecords": {
			"id": 734,
			"type": "AGGREGATION",
			"cardinality": "Any",
			"final": true,
			"refType": "StringWrapper"
		}
	},
	"app": "sys",
	"version": "67"
}

export function createCustomDomainReturn(values?: $Shape<$Exact<CustomDomainReturn>>): CustomDomainReturn {
	return Object.assign(create(_TypeModel, CustomDomainReturnTypeRef), values)
}

export type CustomDomainReturn = {
	_type: TypeRef<CustomDomainReturn>;

	_format: NumberString;
	validationResult: NumberString;

	invalidDnsRecords: StringWrapper[];
}