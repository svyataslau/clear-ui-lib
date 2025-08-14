import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'
import { readFileSync } from 'fs'
import { copyFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
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
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
