import { useEffect } from 'react';
import axios from 'axios';

// 特定のユーザーのリポジトリ一覧を取得するエンドポイント
const URL = 'https://api.github.com/users/kuromon11/repos';

export const Skills = () => {
  // 第二引数に空配列を渡すと、コンポーネントの最初のレンダリング時に一度だけ関数を実行
  useEffect(() => {
    axios.get(URL).then((response) => console.log(response));
  }, []);

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container" />
      </div>
    </div>
  );
};
