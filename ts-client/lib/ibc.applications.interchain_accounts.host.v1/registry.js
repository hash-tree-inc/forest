import { Params } from "./types/ibc/applications/interchain_accounts/host/v1/host";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/host/v1/query";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/query";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
const msgTypes = [
    ["/ibc.applications.interchain_accounts.host.v1.Params", Params],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsRequest", QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsResponse", QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", MsgUpdateParams],
];
export { msgTypes };