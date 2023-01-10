#  3D tiles style plugin


## このプラグインについて
Re:Earthで読み込んだ3D都市モデル（PLATEAU）の表示・非表示や色の変更をノンコードで行うことができるプラグインです。複数の条件の設定で3D都市モデル（PLATEAU）の色分けや表示・非表示の設定を行い、jsonファイルでのエクスポートも可能です。


## （準備）3タイルの読み込み・プロパティの確認方法
- 中央上部パネルから3Dタイルアイコンを地図上にドラッグアンドドロップし、使用したい3DタイルのURLやファイルをRe:Earthに読み込みます。
  ※3D都市モデル（PLATEAU）のURLは[こちら](https://github.com/Project-PLATEAU/plateau-streaming-tutorial/blob/main/3d-tiles/plateau-3dtiles-streaming.md)から参照できます。

- 3Dタイルを読み込んだあと、左パネルのレイヤーで「3Dタイル」を選択した状態で、右パネル上部の「インフォボックス」をクリックし「新規インフォボックス」をクリックすると、3Dタイルのプロパティを閲覧することができるようになります。プロパティを確認したい建物をクリックすると、インフォボックスが表示されます。
  

![image](https://github.com/eukarya-inc/reearth-plugin-3dtilestyles/src/img1.png)

画像（PLATEAU-3D Tilesの場合）：インフォボックスでのプロパティの確認方法


## 使用方法
- プラグインのメニュー「Show Setting」は、3D都市モデルの表示・非表示の条件設定が行えます。条件を入力し「Apply style file」をクリックすると条件に合致するモデルのみが表示されるようになります。また、プラグインのメニューで「＋」をクリックすることで、条件を追加していくことができます。
- プラグインのメニュー「Color Setting」は、3D都市モデルの色分けの条件設定が行えます。「Apply style file」をクリックすると条件に合致するモデルのみの色を変えます。また、プラグインのメニューで「＋Condition」をクリックすることで、条件を追加していくことができます。
- 条件設定は、「プロパティ名」＋「演算条件」＋「プロパティの内容」から設定を行えます。「プロパティ」は建物のインフォボックスより確認し、コピー＆ペーストで入力ができます。
例：「高さ10m以上の建物のみを表示させる」場合、以下のような設定を行います。

  
  ![image](https://github.com/eukarya-inc/reearth-plugin-3dtilestyles/src/img2.png)
  - Show Settingで「_height」＋「以上」＋「10」
  - - 「Remove stile file」をクリックすると入力した条件を一括で削除できます。



### スタイルファイルのエキスポート
- 条件を保存したい場合は、「Export style file 」ボタンを押してjsonファイルを作成します。作成したjsonファイルはRe:Earthのファイルインポート機能でインポートすることができます。
※ブラウザの更新などをするとエクスポートしていない条件は消えてしまうので注意してください。

  ### スタイルjsonファイルのサンプル

> {"show":"(Number(${feature['_height']})>10)&&(Number(${feature['_height']})>0)",
>     "color":{"conditions":[
>         ["Number(${feature['_height']})<=30","color('#f26969')"],
>         ["Number(${feature['_height']})>60","color('#FFFFFF')"]
>         ]}
>}



## 備考
このプラグインは以下のブラウザでテストしています。
- Chrome: 107.0.5304.110
- Safari: 16.0 (17614.1.25.9.10, 17614)
- FireFox: 107.0
- Edge: 107.0.1418.56




## What is this?
This is a plugin that enable you to create 3D tiles style json file and apply it to 3D models.
You can create style file including multiple condisions and colorize the 3D model differnt colors for each condistion.

## How to use it?

### Preperation
  Drug and Drop the 3Dtles icon to the map then 3DTile layer is added to left side menu.
  Click the "Tileset URL" on right panel menu.
  Click the URL tab and then input 3D city model that you want to display.

### Create Style
  You can create feature's property filter on "Show Setting" menu.Available property name is found on 3D Tiles' Infobox. Infobox is created by clicking Infobox Icon on right side menu of 3DTiles layer. If you click the feature sucha as building, the features' property is displayed in Infobox.  ß
  You can add filter by clicking "+" button. Then create cloring rule on "Color Setting" menu. Press the "Apply style file" button to apply the setting to the 3D tiles.

### Export Style file
  When you satsify the result, press the "Export style file" button to create json file.
  
  ### sample json file


> {"show":"(Number(${feature['_height']})>10)&&(Number(${feature['_height']})>0)",
>     "color":{"conditions":[
>         ["Number(${feature['_height']})<=30","color('#f26969')"],
>         ["Number(${feature['_height']})>60","color('#FFFFFF')"]
>         ]}
>}


### Import Style file
  You can import 3D tile style json file through Styling URL input on the rithe side menu of 3Dtiles Layer.
  Click the Styleing URL input then upload and select the json file.
  If the style is not applied, try reload the brwoser.

## Note
This plugin is tested on following browsers.
- Chrome:  108.0.5359.94
- Safari:  16.0 (17614.1.25.9.10, 17614)
- FireFox: 107.0.1
- Edge:    107.0.1418.56
