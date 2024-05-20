/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-20 22:44:03
 */

export default () => {
  return (
    <div className="y-2 [&>div]:bg-red-50 debug-red">
      <h3>Welcome to the debug page</h3>
      <div className="wh-[100,40] p-3 debug-blue">
        <p>This is a debug container with width of 10 and height of 20.</p>
      </div>
      <div className="wh-px-[300,80] p-2 debug-blue">
        <p>This is a debug container with width of 1px and height of 1px.</p>
      </div>
    </div>
  );
};
