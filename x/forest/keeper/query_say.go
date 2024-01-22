package keeper

import (
	"context"
	"fmt"
	"forest/x/forest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Say(goCtx context.Context, req *types.QuerySayRequest) (*types.QuerySayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QuerySayResponse{Name: fmt.Sprintf("Hello %s!", req.Name)}, nil
}
