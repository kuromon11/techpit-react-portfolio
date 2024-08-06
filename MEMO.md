# Webの基礎を学びながらReact Hooksでポートフォリオサイトを作ろう
- https://www.techpit.jp/courses/194

- 
## 環境構築
- 以下の講座を使って環境構築を行う
  - https://www.techpit.jp/courses/216

### 手順
- Windows環境にWSL2(Ubuntu)をインストール
- Gitとcurlをインストール
  - ※WSL2をインストールした時点でインストールされていた
  - git --version
  - curl --version
- asdfをインストール
- asdfの権限を設定する
- asdfにPATHを通す
- node.jsに必要なプラグイン等をインストールする
  - sudo apt install -y dirmngr gpg gawk
  - dirmngr --version
  - gpg --version
  - gawk --version
  - asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
  - asdf plugin list
- jode.jsをインストールする
  - バージョン：18.17.0

# コマンド
```sh
# Ubuntuアップデート
sudo apt update && sudo apt upgrade
# asdfのプラグインのリスト表示
asdf plugin list
# nodejsのインストール（最新のLTSを取得する場合は「lts」とする）
asdf install nodejs {バージョン}
```

# 参考サイト
- Ubuntu の初期設定
  - https://zenn.dev/nishiyama/articles/23d9e75352f3ce0bde52
