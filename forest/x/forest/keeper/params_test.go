package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "forest/testutil/keeper"
	"forest/x/forest/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.ForestKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
