module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId 'fd02c739-3349-4731-ace7-5d62152d915b'
                        beaconUrl 'https://bf82543awj.bf.dynatrace.com/mbeacon'
                    }
                    userOptIn false
                    agentBehavior.startupLoadBalancing true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>fd02c739-3349-4731-ace7-5d62152d915b</string>
        <key>DTXBeaconURL</key>
        <string>https://bf82543awj.bf.dynatrace.com/mbeacon</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <true/>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        `
    }
}
