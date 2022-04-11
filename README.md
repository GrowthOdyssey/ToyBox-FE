# ToyBox

## Environment

| Package | Version |
| ------- | ------- |
| node    | 16.14.0 |
| npm     | 8.6.0   |
| Next    | 12.1.4  |
| React   | 18.0.0  |

## Recommend

- エディターは Visual Studio Code を推奨。

### 推奨する拡張機能

- Stylelint : https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
- ESlint : https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier : https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Setup

- package-lock.json から node_modules のインストール。

```
$ npm ci
```

## Scripts

### ローカルサーバー起動

```
$ npm start
```

### ビルド

- ビルドコマンド実行時に、Stylelint、Eslint、Prettier を実行。
- Lint に問題がなかったら、dist の生成。

```
$ npm run build
```
