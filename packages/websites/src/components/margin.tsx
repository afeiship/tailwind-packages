/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-17 15:21:02
 */

export default () => {
  return (
    <div className="border-2 bg-white border-slate-800">
      <h3>margin-[1,2,3,10]</h3>
      <div className="margin-[1,2,3,10] debug-red bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with margin.</p>
        </div>
      </div>
      <hr />
      <div className="margin-[2,4] debug-red bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with margin.</p>
        </div>
      </div>
      <hr />
      <h3>margin-px-[1,20,3,200]</h3>
      <div className="margin-px-[1,20,3,200] bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with margin.</p>
        </div>
      </div>
    </div>
  );
};
