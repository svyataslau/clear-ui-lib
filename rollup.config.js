import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import { copyFileSync, mkdirSync } from 'fs';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      process.env.NODE_ENV === 'production' && terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }),
      {
        name: 'copy-css',
        writeBundle() {
          // Copy CSS file to dist
          try {
            mkdirSync('dist', { recursive: true });
            copyFileSync('src/styles/index.css', 'dist/index.css');
          } catch (error) {
            console.warn('Could not copy CSS file:', error.message);
          }
        },
      },
    ].filter(Boolean),
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
