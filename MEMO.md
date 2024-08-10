# Webの基礎を学びながらReact Hooksでポートフォリオサイトを作ろう

## 環境構築


### 手順
- Windows環境にWSL2(Ubuntu)をインストール
- Gitとcurlをインストール
  - ※WSL2をインストールした時点でインストールされていた
  - git --version
  - curl --version
- asdfをインストール
- asdfの権限を設定する
- asdfにPATHを通す
  ```sh
  export ASDF_DIR=/usr/local/asdf
  export ASDF_DATA_DIR=$ASDF_DIR
  ASDF_BIN="${ASDF_DIR}/bin"
  ASDF_USER_SHIMS="${ASDF_DATA_DIR}/shims"
  PATH="${ASDF_BIN}:${ASDF_USER_SHIMS}:${PATH}"
  . "${ASDF_DIR}/lib/asdf.sh"
  . "${ASDF_DIR}/completions/asdf.bash"
  ```
- node.jsに必要なプラグイン等をインストールする
  - sudo apt install -y dirmngr gpg gawk
  - dirmngr --version
  - gpg --version
  - gawk --version
  - asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
  - asdf plugin list
- node.jsをインストールする
  - バージョン：18.17.0
- GitHubと連携する
  - ssh -T git@github.com

### 次回以降の設定方法
- git clone https://github.com/kuromon11/techpit-react-portfolio
- cd techpit-react-portfolio
- 

# 困ったとき

# Learn
## aptコマンド
- aptコマンドはLinuxにパッケージをインストール、アンインストール、アップデートなどを行なうためのコマンド
- apt install {パッケージ名1} {パッケージ名2} ・・・とすることで、複数のパッケージを同時にインストールすることができます
- -yオプションを付加することで、確認をスキップしてインストールすることができます
- sudoコマンドを実行したいコマンドの頭に付加することで、スーパーユーザ(全ての権限を持つユーザ)として実行することができます

## Webについて
### Webとは
- Webの意味：「クモの巣」
  - 世界中のクライアント(端末)間を、データ・文書がクモの巣のようにめぐっているため
- ハイパーメディア
  - テキストとリンクによって表される文書、音声、画像、動画など
    - 例：Googleの検索結果からGoogleとは関係のないWebサイト、Webアプリケーションのページに遷移する
  - Webはハイパーメディアの一種
    - Webというシステムの提案以降、世界中でコンテンツの公開が始まり、インターネットによってそれらのコンテンツがつながっていった
### Webの種類
- HTML(HyperText Markup Language)とCSS(Cascading Style Sheets)の組み合わせ
  - 静的サイト。Webサイト≒ホームページ
  - https://www.techpit.jp/
- HTML,CSSに加えて、JavaScriptというブラウザ上でも動作する軽量なプログラミング言語。
  - 動的サイト
  - https://zozo.jp/
- WebAPI
  - プログラムから情報を取得、更新する
  - https://www.googleapis.com/youtube/v3
### Webの要素
- URL(Uniform Resource Locator)
  - インターネット上にあるコンテンツの「住所」
- REST(Representational State Transfer)
  - Web APIの設計思想（アーキテクチャスタイル）の一つ
    - リソース
      - Web上のありとあらゆる情報
        - Techpitの場合 => 教材、講師
        - https://www.techpit.jp/courses/0 => course
          - idが0のcourseというリソースは`https://www.techpit.jp/courses/0`にある
    - RESTful API
      - RESTの原則にのっとったWeb API
      - リソースに対するアクション(取得、更新、新規作成...)を一意に定めることができる
### URLの解読
- https://www.techpit.jpの場合
  - https：プロトコル
  - www：ホスト名
  - techpit.jp：ドメイン名
    - .jp：トップレベルドメイン
- プロトコル
  - 通信のルール(規約)
  - HTTP or HTTPS
- ドメイン名
  - インターネット上の住所
  - 任意の文字列とトップレベルドメインの組み合わせ
- DNS(Domain Name System)サーバー
  - ドメインから対応したIPアドレスを教えてくれる（名前解決してくれる）
  - 最終的に導き出すのはグローバルIPアドレス
- Webサーバー
  - IPアドレス先にあるサーバー
- HTTP(Hypertext Transfer Protocol)リクエスト
  - HTTP：サーバー/クライアント間で通信をすること
  - IPアドレス先のWebサーバーへコンテンツをリクエストする際の通信方法
- HTTPメソッド
  - 特徴
    - サーバーは状態を持たない（ステートレス）
      - 連続的なリクエストであっても、それぞれのリスエスト間で関係を持たない
        - ステートレス：「マグロを、サビ抜きで、シャリ半分」
        - ステートフル：「マグロ！」「サビ抜きで！」「シャリ半分で！」
  - 主に使われるHTTPメソッド
    - GET：特定のリソースの「取得」
    - POST：特定のリソースの「新規作成」
    - PUT：特定のリソースの「更新」
    - DELETE：特定のリソースの「削除」
- Proxy(プロキシ)
  - キャッシュ機能
    - クライアントからの同一リクエストに対応するレスポンスをProxyに保持し、サーバーを介さずに直接クライアントに返すこと
      - 「切って、握って、渡して」 => 「渡して」
- キャッシュの種類
  - プロキシキャッシュ：プロキシでキャッシュしておく
  - ブラウザキャッシュ：Webブラウザがキャッシュしておく
  - CDNキャッシュ：動画や画像等のコンテンツをキャッシュしておくネットワーク
- URLの解読の流れ
  - WebサーバーはHTMLファイルを返却する
    - ブラウザは上から順番にファイルを読んでいく
    - ブラウザはHTMLファイルそのものを理解できないため、解析（Nodeという要素に分解）し、最終的にDOMツリーと呼ばれる構造に変換する
  - HTMLファイル読み取り時、途中でCSSやJavaScriptなどの外部ファイルを発見すると、都度Webサーバーへ要求する
    - ブラウザはCSSを解析し、最終的にCSSOM(CSS Object Model)と呼ばれるものを構築
    - JavaScriptファイルを読み込む指定がHTMLにあれば、その際にJavaScriptファイルを要求し、即時実行する
      - JavaScriptはそのままでは解読できないため、JavaScriptエンジンでコードを解析する
        - JavaScriptエンジンはコードを左から右、上から下に解析（字句解析）
  - レンダリングツリーを作成する
    - HTML, CSS, JavaScriptをマージし画面に描画する
  - ブラウザの見えている範囲ViewPort内でのNodeの位置とサイズを計算する
    - ViewPortが設定されていないとPCとスマホでみた場合に差が出る
  - ブラウザはレンダリングツリーをもとに画面に要素を描画する
- URI
  - パス
    - 特定のなにかが存在する場所を表す文字列
      - 文字列はASCII文字（アルファベット、数字、記号）
      - 日本語をURIに含める場合にはエンコーディングする必要がある
      - ブラウザ・サーバー間の通信ではエンコードされたURIがやりとりされる
        - 2バイト以上(マルチバイト)の文字列を1バイトに変換するため
    - ドメイン名のあとにスラッシュで区切って続く部分
    - 住所の後にマンション名や部屋番号を付けるようなもの
- クエリパラメータ（クエリ文字列、クエリストリング）
  - URLの末尾に文字列を追加してWebサーバーへ問い合わせる際に使用する
  - 画面をリロードしてもそのまま同じ状態でサーバーに問い合わせができる
  - URLの末尾に`?`をつける
  - 複数付ける場合は2つ目以降は`&`をつける
  - 例：`https://www.techpit.jp/articles?from=20200101&to=20201231`
- XHR
  - 非同期で行われた通信の一覧
- 非同期通信
  - サーバーがHTMLを返し終わった(=画面に文章などが一部表示された)後、タイミングをずらしてコンテンツを取得すること

## JavaScript基礎
### JavaScriptの歴史・背景
- 特徴
  - JITコンパイラ(Just-In-Timeコンパイラ)
    - プログラムの実行時にコンパイルされる
  - オブジェクト指向言語
    - プロトタイプベース
      - `prototype`というオブジェクトを通じて「移譲」を行う
      - 継承においてJSが持っている構成要素はオブジェクトだけ
    - ※Javaはクラスベース
      - クラスからインスタンスを生成して「移譲」を行う
  - シングルスレッド（単一のスレッド）
    - スレッド：プログラムの処理が実行される単位
    - JSで書かれた処理は連続した一つのスレッドにまとめられ、順番を担保されながら実行される
- ES6
  - ECMAScript2015
  - 2015年誕生
  - `let`,`const`、アロー関数導入
- Babel
  - ES6をコンパイルするOSSツール
### JavaScriptにおける変数の使い方
- 定数
  - staticなデータ(読み取り専用)に使用する
  - 定数は大文字で宣言する
    - 例：`const PI_NUM = 3.14;`
- プリミティブデータ型
  - オブジェクト以外のメソッドを持たないデータのこと
    - Null、未定義(Undefined)、真偽値(Boolean)、数値（Number）、文字列（String）など

### JavaScriptにおける関数の使い方
- 関数
  - 一連の決まった処理を抽象化したもの
    - 何かしらの入力(引数) + 一連の処理 + 出力(return)
  - camelCaseで記述する
- アロー関数 `(arg) => `
  - メリット
    - 端的に書ける
    - 呼び出す側に依存しにくい（バグを生みにくい）
  - デメリット
    - アロー関数で対応できない処理もあるため、常に使えるわけではない
  - 複数行の場合、`{ return ... }`と記述する
  - 1行の場合は処理のみを記述する
- 配列操作
  - 引数にNumber型を格納
    - push
    - pop
    - length
  - アロー関数を使用。引数には各要素の仮引数を定義
    - map
    - forEach
    - find
    - findIndex
    - filter
    - some

### 非同期処理 Promise
#### Promiseの概要
- 非同期処理が正常に完了したこと、エラーが発生したことを検知するオブジェクト
- ある処理A,B,Cがあったとき、A,B,Cを同時に処理する
  - 同期処理の場合はA→B→Cの順番を担保したまま処理する
- 使用例
  - フロントからAPIを叩いてそのレスポンスの返り値に応じて後続の処理を変更する
    - 非同期処理の結果を「成功」と「失敗」に分けて擬似的に同期的処理を作り出す

#### Promiseの状態
- pending: 結果を待っている状態(成功/失敗どちらでもない)
- fulfilled: 処理が成功した状態
- rejected: 処理が失敗した状態

#### Promiseオブジェクトのインスタンスメソッド
- then(成功時, 失敗時)
  - 第一引数に成功時に呼ばれ、第二引数は失敗時に呼ばれる
  - 引数は任意
- catch()
  - 失敗したとき「のみ」呼ばれる

#### Promiseオブジェクトの基本的な使い方
```js
// APIが返ってくるまでの間後続の処理を待たせて、またAPIの返り値に応じて成功時、失敗時の処理をかき分ける
asyncFunc(
  // APIを叩く
).then(
  // 成功したら、その返り値(APIレスポンス)を画面に表示する
).catch(
  // APIが失敗したら、エラーがでたことを画面に表示する
)
```

#### 例1 setTimeout()
```js
// A => C => B の順番に実行される
console.log('A');
setTimeout(() => {
  console.log('B');
}, 500);
console.log('C');
```

### 例2 Promiseを使って処理を待つ
```js
function asyncFunc() {
  return new Promise((resolve) => {
    console.log('A1')
    console.log('A2')
    setTimeout(() => {
      resolve('B');  // 成功時。'B'を返す
      // reject(); // 失敗時。ここでreject()するとcatch()に入る
    }, 500);
  })
};

// A => 0.5秒待つ => B => C の順番に実行される
asyncFunc().then((value) => { // A => 0.5秒待つ。resolveの中身を受け取る
  console.log(value) // Bが返ってくる
}).then(() => {
  console.log('C')
}).catch(() => {
  // 成功するためここは通らない
  console.error('Error!');
});

// A => 0.5秒待つ => Error! の順番に実行される
asyncFunc().then((value) => { // A => 0.5秒待つ。resolveの中身を受け取る
  hoge.log(value) // Bが返ってくるが、hoge.logなんてものはないため、エラーとなる
}).then(() => {
  // 失敗するためここは通らない
  console.log('C')
}).catch(() => {
  console.error('Error!');
});
```

## 参考URL
- HTTP レスポンスステータスコード
  - https://developer.mozilla.org/ja/docs/Web/HTTP/Status
- HTTPメッセージ
  - https://developer.mozilla.org/ja/docs/Web/HTTP/Messages
- HTTPの概要
  - https://developer.mozilla.org/ja/docs/Web/HTTP/Overview
- 継承とプロトタイプチェーン
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

# コマンド
```sh
# タイムゾーンの確認
timedatectl
# Ubuntuアップデート
sudo apt update && sudo apt upgrade
# asdfのプラグインのリスト表示
asdf plugin list
# nodejsのインストール（最新のLTSを取得する場合は「lts」とする）
asdf install nodejs {バージョン}
# nodejsをグローバル設定
asdf global nodejs <バージョン>
# nodejsをローカル設定（設定したいプロジェクトのルートディレクトリに移動して実行）
asdf local nodejs <バージョン>
```
