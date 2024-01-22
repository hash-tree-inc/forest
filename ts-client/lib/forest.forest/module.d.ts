import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Params } from "./types/forest/forest/params";
import { QueryParamsRequest } from "./types/forest/forest/query";
import { MsgUpdateParamsResponse } from "./types/forest/forest/tx";
import { QuerySayResponse } from "./types/forest/forest/query";
import { MsgUpdateParams } from "./types/forest/forest/tx";
import { GenesisState } from "./types/forest/forest/genesis";
import { QuerySayHelloRequest } from "./types/forest/forest/query";
import { QuerySayRequest } from "./types/forest/forest/query";
import { QueryParamsResponse } from "./types/forest/forest/query";
import { QuerySayHelloResponse } from "./types/forest/forest/query";
export { Params, QueryParamsRequest, MsgUpdateParamsResponse, QuerySayResponse, MsgUpdateParams, GenesisState, QuerySayHelloRequest, QuerySayRequest, QueryParamsResponse, QuerySayHelloResponse };
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayResponseParams = {
    value: QuerySayResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayHelloRequestParams = {
    value: QuerySayHelloRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayRequestParams = {
    value: QuerySayRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySayHelloResponseParams = {
    value: QuerySayHelloResponse;
    fee?: StdFee;
    memo?: string;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type querySayResponseParams = {
    value: QuerySayResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type genesisStateParams = {
    value: GenesisState;
};
type querySayHelloRequestParams = {
    value: QuerySayHelloRequest;
};
type querySayRequestParams = {
    value: QuerySayRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySayHelloResponseParams = {
    value: QuerySayHelloResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySayResponse({ value, fee, memo }: sendQuerySayResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQuerySayHelloRequest({ value, fee, memo }: sendQuerySayHelloRequestParams): Promise<DeliverTxResponse>;
    sendQuerySayRequest({ value, fee, memo }: sendQuerySayRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySayHelloResponse({ value, fee, memo }: sendQuerySayHelloResponseParams): Promise<DeliverTxResponse>;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    querySayResponse({ value }: querySayResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    querySayHelloRequest({ value }: querySayHelloRequestParams): EncodeObject;
    querySayRequest({ value }: querySayRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySayHelloResponse({ value }: querySayHelloResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        ForestForest: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
