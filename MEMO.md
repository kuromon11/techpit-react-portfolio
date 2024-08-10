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
- Babel
  - ES6をコンパイルするOSSツール


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
