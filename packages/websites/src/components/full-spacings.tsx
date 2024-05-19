/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-17 17:37:38
 */

export default () => {
  return (
    <div className="debug-red *:debug-blue">
      <div className="p-0.5">Padding 0.5</div>
      <div className="p-1">Padding 1</div>
      <div className="p-25">Padding 25</div>
      <div className="debug-red *:bg-slate-50">
        <span className="mx-0.5">Margin 0 5</span>
        <span className="mx-1">Margin 1 1</span>
        <span className="mx-25">Margin 25 25</span>
      </div>
    </div>
  );
};
