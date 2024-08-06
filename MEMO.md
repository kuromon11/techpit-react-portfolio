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

### 次回以降の設定方法
- git clone https://github.com/kuromon11/techpit-react-portfolio
- cd techpit-react-portfolio
- 

# 困ったとき

# Tips
## aptコマンド
- aptコマンドはLinuxにパッケージをインストール、アンインストール、アップデートなどを行なうためのコマンド
- apt install {パッケージ名1} {パッケージ名2} ・・・とすることで、複数のパッケージを同時にインストールすることができます
- -yオプションを付加することで、確認をスキップしてインストールすることができます
- sudoコマンドを実行したいコマンドの頭に付加することで、スーパーユーザ(全ての権限を持つユーザ)として実行することができます
- 


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
