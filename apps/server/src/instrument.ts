/**
 * OpenTelemetry instrumentation preload file.
 *
 * MUST be loaded before any application code via --import flag
 * so that auto-instrumentations can patch modules (http, pg, ioredis)
 * before they are imported by the application.
 *
 * Usage: tsx --import ./src/instrument.ts src/app.ts
 */
import { initOtel } from './libs/otel'

export const otelInstance = initOtel()
