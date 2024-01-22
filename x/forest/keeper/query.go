package keeper

import (
	"forest/x/forest/types"
)

var _ types.QueryServer = Keeper{}
