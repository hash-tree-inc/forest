package types

const (
	// ModuleName defines the module name
	ModuleName = "forest"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_forest"
)

var (
	ParamsKey = []byte("p_forest")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
