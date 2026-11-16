init-project を使用してください．

このリポジトリはTypeScriptでよく使うutils集を作ります．
ランタイムは node.js を使用します．
テストはvitestを使用します．
src内に配置します．
ポータビリティを重視します．
Reactのコンポーネントも対象とします．
パッケージマネージャーは pnpmを使用します． (高速でディスク容量を節約でき、依存関係の管理が厳格でポータビリティに向いています)
ビルドツールは tsupを使用します． (esbuildベースで非常に高速。ESM/CJS両方の出力を簡単に生成でき、ユーティリティライブラリの配布に最適です)
formatter や linter も使用してください．選定はお願いします．
品質ガードとして scripts/quality_guard.sh に formatter や linter , test を強制するように記述してください．
Github Action の 設定ファルも作成してください．
