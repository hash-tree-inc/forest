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
const msgTypes = [
    ["/forest.forest.Params", Params],
    ["/forest.forest.QueryParamsRequest", QueryParamsRequest],
    ["/forest.forest.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/forest.forest.QuerySayResponse", QuerySayResponse],
    ["/forest.forest.MsgUpdateParams", MsgUpdateParams],
    ["/forest.forest.GenesisState", GenesisState],
    ["/forest.forest.QuerySayHelloRequest", QuerySayHelloRequest],
    ["/forest.forest.QuerySayRequest", QuerySayRequest],
    ["/forest.forest.QueryParamsResponse", QueryParamsResponse],
    ["/forest.forest.QuerySayHelloResponse", QuerySayHelloResponse],
];
export { msgTypes };
