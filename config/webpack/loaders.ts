import type { LoadersConfigType, ConfigProps } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

const LoadersConfig = ({ isDev }: ConfigProps): LoadersConfigType => {
    const cssLoaders = {
        test: /\.css$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ]
    };

    const imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                }),
                transpileOnly: isDev
            }
        },
        exclude: /node_modules/
    };

    return [imageLoader, cssLoaders, tsLoader, svgLoader];
};

export default LoadersConfig;
