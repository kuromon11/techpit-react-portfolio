export const Header = () => {
  // 本PJTではシングルクオーテーションで囲む
  const componentName = 'Header'; // 変数の場合
  // const componentName = () => 'Header'; // 関数の場合
  // HTMLではなくJSXを返す
  return (
    <div className="test-wrapper">
      <span>このコンポーネントの名前は{componentName}です。</span>
      {/* <span>このコンポーネントの名前は{componentName()}です。</span> */}
    </div>
  );
};
