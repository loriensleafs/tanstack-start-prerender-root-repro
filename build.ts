// The programmatic `vite build --app`, with the project folder as Vite's root.
import { createBuilder } from 'vite'

const builder = await createBuilder({ root: import.meta.dirname })
await builder.buildApp()
