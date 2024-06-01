import GridList from './components/grid-list';
import VarComp from './components/var-comp';
import ChildVariant from './components/child-variant';
import TwSubChild from './components/tw-sub-child';
import FlexGap from './components/flex-gap';
import LayoutFlex from './components/layout-flex';
import LayoutAbsCenter from './components/layout-abs-center';
import LayoutTranslateCenter from './components/layout-trans-center';
import ShortcutsCorner from './components/shortcuts-corner';
import LhComponents from './components/lh-components';
import Blanks from './components/blanks';
import FullSpacings from './components/full-spacings';
import FontSize from './components/font-size';
import Fw from './components/fw';
import Padding from './components/padding';
import Margin from './components/margin';
import Wh from './components/wh';
import LayoutTextJustify from './components/layout-text-justify';
import LayoutFlexJustify from './components/layout-flex-justify';
import LayoutFloatJustify from './components/layout-float-justify';

function App() {
  return (
    <div className="mx-auto y bg-gray-200 p-10">
      <LayoutFloatJustify />
      <hr />
      <LayoutTextJustify />
      <hr />
      <LayoutFlexJustify />
      <hr />
      <GridList>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
      </GridList>
      <div className="my-2 flex flex-col gap-1 border border-solid border-green-600 p-2">
        <VarComp level="1" />
        <VarComp level="2" />
        <VarComp level="3" />
      </div>
      <ChildVariant />
      <TwSubChild />

      <div className="mb_ border border-solid border-slate-500 *:mb-2">
        <button className="btn">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </div>
      <hr />
      <FlexGap />
      <hr />
      <LayoutFlex />
      <hr />
      <LayoutAbsCenter />
      <hr />
      <LayoutTranslateCenter />
      <hr />
      <ShortcutsCorner />
      <hr />
      <LhComponents />
      <hr />
      <Blanks />
      <hr />
      <FullSpacings />
      <hr />
      <FontSize />
      <hr />
      <Fw />
      <hr />
      <Padding />
      <hr />
      <Margin />
      <hr />
      <Wh />
    </div>
  );
}

export default App;
