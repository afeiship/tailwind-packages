/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-05-17 15:21:02
 */

export default () => {
  return (
    <div className="border-2 border-slate-800">
      <h3>blank-y-1, blank-y-10, blank-y-20</h3>
      <ul className="debug-red my-2 *:debug-outline-red">
        <li>道可道，非常道；名可名，非常名。</li>
        <li className="blank-y-1"></li>
        <li>无名，天地之始，有名，万物之母。</li>
        <li className="blank-y-10"></li>
        <li>故常无欲，以观其妙，常有欲，以观其徼。</li>
        <li className="blank-y-20"></li>
        <li>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</li>
      </ul>
      <h3>Blanks-b-[1,2,3,10]</h3>
      <div className="debug-blue blanks-b-[1,2,3,10]">
        <p>天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。</p>
        <p>故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。</p>
        <p>
          是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
        </p>
        <p>夫惟弗居，是以不去。</p>
      </div>
    </div>
  );
};
