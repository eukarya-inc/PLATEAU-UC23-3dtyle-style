#  Plugin
3D tiles style generator 

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

  ```
 {"show":"(Number(${feature['_height']})>10)&&(Number(${feature['_height']})>0)",
      "color":{"conditions":[
          ["Number(${feature['_height']})<=30","color('#f26969')"],
          ["Number(${feature['_height']})>60","color('#FFFFFF')"]
          ]}
 }
  ```

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

## このプラグインについて
Re:Earthで読み込んだ3D都市モデル（PLATEAU）の表示・非表示や色の変更をノンコードで行うことができるプラグインです。複数の条件の設定で3D都市モデル（PLATEAU）の色分けや表示・非表示の設定を行い、jsonファイルでのエクスポートも可能です。

## 利用方法

### （準備）3タイルの読み込み・プロパティの確認方法
  3Dtilesアイコンを地図上にドラッグアンドドロップすると左メニューに3DTilesレイヤが追加されます。右パネルのTileset URL をクリックします。URLタブをクリックし、表示したい3D都市モデルのURLを入力します。  

### Styleの作成
  Show Settingメニューで造形物のプロパティによるフィルターを作成することができます。 利用可能なプロパティ名は3D TilesのInfoboxで調べることができます。Infoboxは3DTilesレイヤのInfoboxアイコンをクリックすることで作成可能です。 例えば建物などの造形物をクリックすることで利用可能なプロパティが表示されます。フィルタは'+'ボタンをクリックすることで追加可能です。次にColor Settingメニューで色付けのルールを作成します。Apply style fileボタンを押して設定を3Dモデルに反映します。

### スタイルファイルのエキスポート
　満足する結果が得られたらExport style fileボタンを押すことでjsonファイルを作成することができます。

  ### jsonファイルのサンプル

  ```
 {"show":"(Number(${feature['_height']})>10)&&(Number(${feature['_height']})>0)",
      "color":{"conditions":[
          ["Number(${feature['_height']})<=30","color('#f26969')"],
          ["Number(${feature['_height']})>60","color('#FFFFFF')"]
          ]}
 }
  ```

### スタイルファイルのインポート
　3Dtilesレイヤの右メニューにあるStyling URL入力でスタイルファイルを読み込むことができます。Styling URL入力をクリックしてスタイルファイルをアップロード後選択してください。もしスタイルが反映されない場合はブラウザの再読み込みを試してください。


## 備考
このプラグインは以下のブラウザでテストしています。
- Chrome:  108.0.5359.94
- Safari:  16.0 (17614.1.25.9.10, 17614)
- FireFox: 107.0.1
- Edge:    107.0.1418.56
