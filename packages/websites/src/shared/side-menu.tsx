/**
 * @email: aric.zheng@alo7.com
 * @description: A React component.
 * @updated_at: 2024-05-19 18:58:42
 */

import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { Link, LinkProps } from '@tanstack/react-router';

type IProps = {
  className?: string;
  items: LinkProps[];
} & HTMLAttributes<HTMLDivElement>;

const Anonymous = (props: IProps) => {
  const { className, items, ...rest } = props;

  return (
    <div className={cx('w-60 min-h-screen bg-slate-200 border-r-2 border-gray-300', className)} {...rest}>
      {
        items.map((item, index) => (
          <Link
            className="block padding-[3,5] bg-sky-100 hover:bg-sky-200 text-gray-500 hover:text-gray-900 [&.active]:bg-slate-500 [&.active]:text-white"
            key={index} {...item}>
            {item.children}
          </Link>
        ))
      }
    </div>
  );
};

Anonymous.defaultProps = {};

export default Anonymous;
