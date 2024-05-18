import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "https://4e959525c7f1064a7e500e4999e65955@o4507277982433280.ingest.de.sentry.io/4507278995554384",
    tracesSampleRate: 1,
    debug: process.env.NODE_ENV === 'development',
  });
}
