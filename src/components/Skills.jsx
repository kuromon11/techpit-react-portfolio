import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  skillReducer,
  initialState,
  actionTypes,
} from '../reducers/skillReducer';
import { requestStates } from '../constants';

// 特定のユーザーのリポジトリ一覧を取得するエンドポイント
const URL = 'https://api.github.com/users/kuromon11/repos';

export const Skills = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
    axios
      .get(URL)
      .then((response) => {
        const languageList = response.data.map((res) => res.language);
        const countedLanguageList = generateLanguageCountObj(languageList);
        dispatch({
          type: actionTypes.success,
          payload: { languageList: countedLanguageList },
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.error });
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

  // 各言語のパーセンテージを返す。5つ以上の場合は100とする。
  const convertCountToPercentage = (count) => (count > 5 ? 100 : count * 20);

  // プログラミング言語のパーセンテージを数の降順に並び替える
  const sortedLanguageList = () =>
    state.languageList.sort(
      (firstLang, nextLang) => nextLang.count - firstLang.count
    );

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {/* 現在のステートがローディング中 */}
          {state.requestState === requestStates.loading && (
            <p className="description">取得中...</p>
          )}
          {/* 成功時 */}
          {state.requestState === requestStates.success &&
            sortedLanguageList().map((item) => (
              <div className="skill-item" key={item.language}>
                <p className="description">
                  <strong>{item.language}</strong>
                </p>
                <CircularProgressbar
                  value={convertCountToPercentage(item.count)}
                  text={`${convertCountToPercentage(item.count)}%`}
                />
              </div>
            ))}
          {/* エラー発生時 */}
          {state.requestState === requestStates.error && (
            <p className="description">エラーが発生しました</p>
          )}
        </div>
      </div>
    </div>
  );
};
