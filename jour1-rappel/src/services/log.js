import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export function init(){
    Sentry.init({
        dsn: "https://97e86e1296f54a948e033737eaf05c0c@o313497.ingest.sentry.io/5789831",
        integrations: [new Integrations.BrowserTracing()],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}
export function log(error){
   
    Sentry.captureMessage(error, "debug");
   /*  Sentry.withScope(scope => {
        scope.setExtra("formation", "W3Academy");
        Sentry.captureMessage(error);
      }); */
}

