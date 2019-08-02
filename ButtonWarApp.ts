import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { ExternalComponentLocation } from '@rocket.chat/apps-engine/definition/externalComponent/IExternalComponent';

import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class ButtonWarApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        const { name, description, iconFileContent } = this.getInfo();

        configuration.externalComponents.register({
            name,
            description,
            icon: iconFileContent ? iconFileContent : '',
            location: ExternalComponentLocation.CONTEXTUAL_BAR,
            url: 'https://basketball.frvr.com',
            options: {
                webhooks: {
                    sessionEnds: 'http://localhost:30001'
                },
            },
        });
    }
}
