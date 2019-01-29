// Circular dependencies

// A circular dependency is a situation where module A depends on B,
// and B also, directly or indirectly, depends on A. Many module systems
// simply forbid this because whichever order you choose for loading such
// modules, you cannot
// make sure that each module’s dependencies have been loaded before it
// runs.

// CommonJS modules allow a limited form of cyclic dependencies. As long
// as the modules do not replace their default exports object and don’t
// access each other’s interface until after they finish loading, cyclic
// dependencies are okay.

// The require function given earlier in this chapter supports this type
// of dependency cycle. Can you see how it handles cycles? What would go
// wrong when a module in a cycle does replace its default exports object?
