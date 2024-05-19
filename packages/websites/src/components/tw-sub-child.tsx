/**
 * @email: aric.zheng@alo7.com
 * @description: A React component.
 * @created_at: 2024-04-11 08:19:01
 */

// import React from 'react';
import cx from 'classnames';

interface AnonymousProps extends React.PropsWithChildren {
  className?: string;
}

const Anonymous = (props: AnonymousProps) => {
  const { className, children, ...restProps } = props;

  return (
    <div
      className={cx(className, 'my-2 border border-green-600 p-3')}
      {...restProps}>
      <ul className="... flex gap-2 *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-4 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
        <li>Sales</li>
        <li>Marketing</li>
        <li>SEO</li>
      </ul>
      {children}
    </div>
  );
};

Anonymous.defaultProps = {};

export default Anonymous;
