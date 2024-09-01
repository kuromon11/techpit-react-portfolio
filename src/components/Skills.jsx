import { useEffect, useState } from 'react';
import axios from 'axios';

// 特定のユーザーのリポジトリ一覧を取得するエンドポイント
const URL = 'https://api.github.com/users/kuromon11/repos';

export const Skills = () => {
  const [languageList, setLanguageList] = useState([]);
  console.log(languageList);

  useEffect(() => {
    axios.get(URL).then((response) => {
      const languageList = response.data.map((res) => res.language);
      const countedLanguageList = generateLanguageCountObj(languageList);
      setLanguageList(countedLanguageList);
    });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    // nullを取り除く
    const notNullLanguageList = allLanguageList.filter(
      (language) => language != null
    );
    // 重複を取り除く
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    // 中身を整形
    return uniqueLanguageList.map((item) => {
      return {
        language: item,
        count: allLanguageList.filter((language) => language === item).length,
      };
    });
  };

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
