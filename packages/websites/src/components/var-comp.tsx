/**
 * @email: aric.zheng@alo7.com
 * @description: A React component.
 * @created_at: 2024-04-09 08:30:26
 */

// import React from 'react';
import cx from 'classnames';

/**
测试一下 tailwind 会不会预生成样式,
*/
const bgList = {
  '1': 'bg-slate-100',
  '2': 'bg-slate-200',
  '3': 'bg-slate-300'
};

// @title: Tailwind classes used predict
// @description: DO NOT DELETE THIS COMMENT
// @enums: 'bg-red-100', 'bg-red-200', 'bg-red-300'

interface ComponentNameProps extends React.PropsWithChildren {
  className?: string;
  level: keyof typeof bgList;
}

const ComponentName = (props: ComponentNameProps) => {
  const { className, children, level, ...restProps } = props;

  return (
    <div className={cx(className)} {...restProps}>
      <h1 className={cx(bgList[level])}>Hello World</h1>
      <p className={`bg-red-${100 * Number(level)} text-gray-600`}>
        tw not work when dynamic!
      </p>
      {children}
    </div>
  );
};

ComponentName.defaultProps = {};

export default ComponentName;
