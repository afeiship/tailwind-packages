/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-17 15:21:02
 */

export default () => {
  return (
    <div className="border-2 border-slate-800">
      <h3>padding-[1,2,3,10]</h3>
      <div className="padding-[1,2,3,10] bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with padding.</p>
        </div>
      </div>
      <hr />
      <div className="padding-[2,4] bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with padding.</p>
        </div>
      </div>
      <hr />
      <h3>padding-px-[10,20,30,40]</h3>
      <div className="padding-px-[1,20,3,200] bg-slate-50">
        <div className="content size-full bg-slate-200">
          <p>This is a paragraph with padding.</p>
        </div>
      </div>
    </div>
  );
};
