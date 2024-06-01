/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-06-01 17:48:38
 */

export default () => {
  return (
    <div className="debug-red y-4">
      <h3 className="text-center fw-8">layout-float-justify</h3>
      <div className="layout-float-list-[2,2] debug-red wp-4 mx-auto *:bg-red-200 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
      </div>

      <div className="layout-float-list-[3,5,2] debug-red wp-4 mx-auto *:bg-red-200 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
      </div>

      <div className="layout-float-list-[6,5,1] debug-red wp-4 mx-auto *:bg-red-200 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
        <div className="is-item">6</div>
        <div className="is-item">7</div>
        <div className="is-item">8</div>
        <div className="is-item">9</div>
        <div className="is-item">10</div>
      </div>

      <div className="layout-float-list-[9,5,3] debug-red wp-4 mx-auto *:bg-red-200 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
        <div className="is-item">6</div>
        <div className="is-item">7</div>
        <div className="is-item">8</div>
        <div className="is-item">9</div>
        <div className="is-item">10</div>
      </div>
    </div>
  );
};
