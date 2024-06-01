/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-20 22:44:03
 */

export default () => {
  return (
    <div className="debug-red y-4">
      <h3 className="text-center fw-8">layout-flex-justify</h3>
      <div className="layout-flex-list-[2,2] wp-4 mx-auto debug-green *:bg-red-200 *:size-20 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
      </div>

      <div className="layout-flex-list-[3,5] gap-y-2 wp-4 mx-auto debug-green *:bg-red-200 *:size-20 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
      </div>

      <div className="layout-flex-list-[2,5,8] gap-y-2 wp-4 mx-auto debug-green *:bg-red-200 *:size-20 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
      </div>
    </div>
  );
};
