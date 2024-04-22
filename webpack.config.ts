import type { EnvVariables, ConfigurationPaths, Configuration } from './config/webpack';
import WebpackConfig from './config/webpack';
import path from 'path';

export default (env: EnvVariables): Configuration => {
    const paths: ConfigurationPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.relative(__dirname, 'src')
    };

    return WebpackConfig(env, paths);
};
