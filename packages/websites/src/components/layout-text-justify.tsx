/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-17 15:21:02
 */
export default () => {
  return (
    <div className="border-2 border-slate-800">
      <h3>Layout Text Justify</h3>
      <ul className="layout-text-justify debug-red *:w-30 *:debug-blue w-100 mx-auto">
        <li className="text-xs">
          <a className="share-figure" href="##">
            <img src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg" alt="" />
          </a>
          <span className="share-name"><a title="对着飞机你能尿多远。" href="##">对着飞机你能尿多远。</a></span>
        </li>{' '}
        <li className="text-xs">
          <a className="share-figure" href="##">
            <img src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg" alt="" />
          </a>
          <span className="share-name"><a href="##">赵本山和范围的《说情》，可算找到了，太TM的...</a></span>
        </li>{' '}
        <li className="text-xs">
          <a className="share-figure" href="##">
            <img src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg" alt="" />
          </a>
          <span className="share-name"><a href="##">萧敬腾版《愛情買賣》我受不鸟啦 好霸气</a></span>
        </li>
      </ul>
    </div>
  );
};
