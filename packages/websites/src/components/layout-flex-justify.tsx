/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-06-01 17:48:38
 */

export default () => {
  return (
    <div className="debug-red y-4">
      <h3 className="text-center fw-8">layout-flex-justify</h3>
      <div className="layout-flex-list-[2,2] wp-4 mx-auto *:bg-red-200 *:size-20 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
      </div>

      <div className="layout-flex-list-[3,5] gap-y-2 wp-4 mx-auto *:bg-red-200 *:size-20 *:fcc">
        <div className="is-item">1</div>
        <div className="is-item">2</div>
        <div className="is-item">3</div>
        <div className="is-item">4</div>
        <div className="is-item">5</div>
      </div>

      <div className="layout-flex-list-[4,5,8] gap-y-2 wp-4 mx-auto text-xs *:p-2 *:bg-slate-50 *:w-20 *:fcc *:rounded-md">
        <div className="is-item">道可道，非常道；名可名，非常名。
          无名，天地之始，有名，万物之母。
          故常无欲，以观其妙，常有欲，以观其徼。
          此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</div>
        <div className="is-item">2</div>
        <div className="is-item">此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</div>
        <div className="is-item">4</div>
        <div className="is-item">此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</div>
      </div>
    </div>
  );
};
