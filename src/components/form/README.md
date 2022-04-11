# FormComponents

## About

- Form コンポーネントを呼び出す事で共通のスタイルを持ったフォームを出力することが可能になる。
- FormInput コンポーネント内で、Props の type に応じた Input コンポーネントが return される。

## Props

| Prop Name | Description                |
| --------- | -------------------------- |
| ttl       | フォームのタイトルの指定   |
| name      | フォームの name 属性の指定 |
| children  | フォーム内に表示させる項目 |
| btn       | フォーム内のボタンの設定   |

### children Prop

- [types/form/index.ts](../../types/form/index.ts)より、**FormItemType**を import 後、指定する必要がある。

| Prop Name  | Description                            |
| ---------- | -------------------------------------- |
| hdg        | 入力項目のタイトル名                   |
| required   | 入力項目の必須フラグ                   |
| annotation | 入力項目の注釈                         |
| type       | input の種別                           |
| element    | input コンポーネントにバインドする要素 |

- type には`text`、`textarea`、`radio`、`checkbox`、`select`、`other`のいずれかを指定(FormInputTypeAttrType を参照)。
- デフォルトでは必須フラグは true になっている。必須フラグを非表示にする時だけ required に false を指定。
- element には、type に指定した要素に対応した element 項目を指定。
- 詳細は下記を参照。

#### text

- [types/form/\_textInput.ts](../../types/form/_textInput.ts)

#### textarea

- [types/form/\_textArea.ts](../../types/form/_textArea.ts)

#### radio

- [types/form/\_radio.ts](../../types/form/_radio.ts)

#### checkbox

- [types/form/\_checkbox.ts](../../types/form/_checkbox.ts)

#### select

- [types/form/\_select.ts](../../types/form/_select.ts)

#### other

- [types/form/\_other.ts](../../types/form/_other.ts)

### btn Prop

- フォーム内のボタンを指定するパラメータ。
- [types/form/index.ts](../../types/form/index.ts)より、**FormBtnType**を import 後、指定する必要がある。

- 指定可能な要素は下記。

| Prop Name | Description                                      |
| --------- | ------------------------------------------------ |
| label     | ボタンに表示するラベル名                         |
| onclick   | ボタンをクリックした時に行う処理                 |
| goBack    | 1 つ前のページに戻るボタンを表示させるパラメータ |

## Example

```js
// Value
const formItem: FormItemType[] = [
  {
    hdg: '名前',
    type: 'text',
    element: {
      name: 'name',
      placeholder: '名前を入力してください',
    },
  },
  {
    hdg: 'お問い合わせ',
    type: 'textarea',
    element: {
      name: 'contact',
      placeholder: 'お問い合わせ内容を入力してください',
      rows: 10,
    },
  },
  {
    hdg: '色',
    required: false,
    annotation: 'お好きな色を選択してください',
    type: 'radio',
    element: {
      name: 'color',
      values: ['赤', '青', '緑'],
    },
  },
  {
    hdg: '確認事項',
    type: 'checkbox',
    element: {
      name: 'confirm',
      value: '同意する',
    },
  },
  {
    hdg: 'お届け日',
    type: 'select',
    element: {
      name: 'delivery',
      values: ['4月1日', '4月2日', '4月3日'],
    },
  },
];

const onclickBtn = () => {
  // Some processing
};

const btnElement: FormBtnType = {
  label: '送信',
  onclick: onclickBtn,
  goBack: true,
};

// Page calling
<Form ttl={'会員登録'} name={'signup'} btn={btnElement}>
  {formItem}
</Form>;
```
