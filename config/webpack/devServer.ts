import type { DevServerConfigType, ConfigProps } from './types';

const ConfigDevServer = ({ port, isDev }: ConfigProps): DevServerConfigType => {
    if (isDev) {
        return {
            port,
            hot: true
        };
    }
};

export default ConfigDevServer;
