import type { moduleFederationPlugin } from '@module-federation/sdk';

function foo(config: moduleFederationPlugin.RemotesConfig) {
    console.log(config)
}

