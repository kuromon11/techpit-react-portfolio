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
