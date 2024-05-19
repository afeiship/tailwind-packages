/**
 * @email: aric.zheng@alo7.com
 * @description: A React component.
 * @created_at: 2024-04-10 22:30:59
 */

// import React from 'react';
import cx from 'classnames';

interface AnonymousProps extends React.PropsWithChildren {
  className?: string;
}

const Anonymous = (props: AnonymousProps) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={cx(className)} {...restProps}>
      <h1 className="font-bold">child-variant</h1>
      <ul className="flex flex-col gap-2 child:bg-purple-400 child:px-5">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      {children}
    </div>
  );
};

Anonymous.defaultProps = {};

export default Anonymous;
