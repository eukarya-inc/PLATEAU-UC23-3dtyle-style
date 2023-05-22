# 3Dtile　スタイルプラグイン


## このプラグインについて
Re:Earthで読み込んだ3D都市モデル（PLATEAU）の表示・非表示や色の変更をノンコードで行うことができるプラグインです。複数の条件の設定で3D都市モデル（PLATEAU）の色分けや表示・非表示の設定を行い、jsonファイルでのエクスポートも可能です。

## 利用手順

### 準備
#### 3Dタイルの読み込み・プロパティの確認方法
- 中央上部パネルから3Dタイルアイコンを地図上にドラッグアンドドロップし、使用したい3DタイルのURLやファイルをRe:Earthに読み込みます。
  ※3D都市モデル（PLATEAU）のURLは[こちら](https://github.com/Project-PLATEAU/plateau-streaming-tutorial/blob/main/3d-tiles/plateau-3dtiles-streaming.md)から参照できます。

- 3Dタイルを読み込んだあと、左パネルのレイヤーで「3Dタイル」を選択した状態で、右パネル上部の「インフォボックス」をクリックし「新規インフォボックス」をクリックすると、3Dタイルのプロパティを閲覧することができるようになります。プロパティを確認したい建物をクリックすると、インフォボックスが表示されます。この時に表示される属性情報に対応した色分けを行うことができます。
  

  ![image](https://eukarya-inc.github.io/reearth-plugin-3dtile-style/src/img1.png)

  - 画像：インフォボックスでのプロパティの確認方法（PLATEAU-3D Tilesの場合）


#### 特定の3DTilesのみにスタイルを適応する場合
- プロジェクト上に複数の3DTilesレイヤが存在する場合、特定の3DTilesレイヤのみにスタイルを当てることができます。「ウィジェット」一覧から「3D tiles Style」をクリック氏、右パネルに表示される「Enable tag filter」を有効にしてください。
- 
### 使用方法
#### フィルター
- 特定の地物のみ表示させることができます。
- 条件設定では「属性名」、「演算条件」、「値」を指定します。
- 「属性名」は3DTilesの属性候補から使用する属性を選択します。
- 演算条件と、値を入力してください。

例：「高さ10m以上の建物のみを表示させる」場合、以下のような内容になります。
（「_height」が「10」「以上」という意味になります。）
  
  ![image](https://eukarya-inc.github.io/reearth-plugin-3dtile-style/src/img2.png)
  
- スタイルの適用をクリックすると、入力した条件式に合致した対物のみが表示されます。
- 複数フィルターを設定する場合は、「フィルタの追加」をクリックしてください。



#### 色の設定
- プラグインのメニュー「Show Setting」は、3D都市モデルの表示・非表示の条件設定が行えます。条件を入力し「Apply style file」をクリックすると条件に合致するモデルのみが表示されるようになります。また、プラグインのメニューで「＋」をクリックすることで、条件を追加していくことができます。
- 3DTilesの地物の色分け設定が行えます。
- 条件で、「属性名」、「演算条件」、「値」を指定・入力し、さらに色を指定します。
- 「スタイルの適用」をクリックすると条件に合致するモデルのみの色を変えます。
- 複数条件で色をつけたい場合は、「＋条件の追加」をクリックすることで、条件を追加していくことができます。
  
 ![image](https://eukarya-inc.github.io/reearth-plugin-3dtile-style/src/img3.png)

#### スタイルのクリア
  - 「Remove stile file」をクリックすると入力した条件を一括で削除できます。

#### スタイルファイルのエクスポート
- 条件を保存したい場合は、「Export style file 」ボタンを押してjsonファイルを作成します。
- ※ブラウザの更新などをするとエクスポートしていない条件は消えてしまうので注意してください。
- 作成したjsonファイルはRe:Earthの３DTilesメニューでスタイルファイルとして使用することができます。
- エクスポートしたファイルをRe:Earthの3DTilesのスタイルurlで使用することで、プラグインを使わずにスタイルを変更することができます。

#### スタイルjsonファイルのサンプル
エクスポートされるスタイルファイルはテキストで開くことができ、内容は以下のようになります。


```
{"show":"(Number(${feature['_height']})>10)&&(Number(${feature['_height']})>0)",
    "color":{"conditions":[
        ["Number(${feature['_height']})<=30","color('#f26969')"],
        ["Number(${feature['_height']})>60","color('#FFFFFF')"]
        ]}
}
```


## 備考

このプラグインは、以下のOS,ブラウザで動作確認をしています。

- OS
  - Mac OS

- ブラウザ
  - Chrome: 107.0.5304.110
  - Safari: 16.0 (17614.1.25.9.10, 17614)
  - FireFox: 107.0
  - Edge: 107.0.1418.56


## 開発者欄

このプラグインは、Re:Earth公式プラグインです。

 ![](https://eukarya-inc.github.io/reearth-plugin-shinsuiNavi/src/logo-3.png)

ソースコードはこちら(https://github.com/eukarya-inc/reearth-plugin-3dtile-style)

- コミュニティ

  - このプラグインを利用したプロジェクトをユーザーコミュニティでシェアしましょう。

  - このプラグインについての不明点がある場合にもここからRe:Earthチームや他の開発者に質問することができます。

  - Discordへのリンクはこちら(https://discord.gg/BXcQhvwqqM)
