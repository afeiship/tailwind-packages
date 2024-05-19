/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @created_at: 2024-04-28 21:08:01
 */

export default () => {
  return (
    <>
      <div className="debug-red relative size-80">
        <h1>Dialog center</h1>
        <div className="layout-trans-center fcc absolute size-16 rounded-xl bg-green-400 text-white">
          center
        </div>
      </div>
      <div className="debug-red relative size-80">
        <h1>Layout Translate Center</h1>
        <div className="layout-trans-center-xy fcc absolute size-16 rounded-xl bg-amber-400 text-white">
          xy
        </div>
        <div className="layout-trans-center-y fcc absolute size-16 rounded-full bg-blue-400 text-white">
          y
        </div>
        <div className="layout-trans-center-x fcc absolute top-0 size-16 rounded-3xl bg-red-400 text-white">
          x
        </div>
      </div>
    </>
  );
};
