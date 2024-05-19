/**
 * @email: aric.zheng@alo7.com
 * @description: A React component.
 * @updated_at: 2024-05-19 18:58:42
 */

import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { Link } from '@tanstack/react-router';

type IProps = {
  className?: string;
  items: any[];
} & HTMLAttributes<HTMLDivElement>;

const Anonymous = (props: IProps) => {
  const { className, items, ...rest } = props;

  return (
    <div className={cx(className)} {...rest}>
      {
        items.map((item, index) => (
          <Link key={index} href={item.href}>
            <a className="block py-2 text-sm text-gray-700 hover:bg-gray-100">
              {item.label}
            </a>
          </Link>
        ))
      }
    </div>
  );
};

Anonymous.defaultProps = {};

export default Anonymous;
