package forest_test

import (
	"testing"

	keepertest "forest/testutil/keeper"
	"forest/testutil/nullify"
	"forest/x/forest/module"
	"forest/x/forest/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ForestKeeper(t)
	forest.InitGenesis(ctx, k, genesisState)
	got := forest.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
