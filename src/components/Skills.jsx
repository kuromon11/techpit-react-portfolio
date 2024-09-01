import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {
  const [fetchRequestState, convertCountToPercentage, sortedLanguageList] =
    useSkills();
  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {/* 現在のステートがローディング中 */}
          {fetchRequestState === requestStates.loading && (
            <p className="description">取得中...</p>
          )}
          {/* 成功時 */}
          {fetchRequestState === requestStates.success &&
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
          {fetchRequestState === requestStates.error && (
            <p className="description">エラーが発生しました</p>
          )}
        </div>
      </div>
    </div>
  );
};
