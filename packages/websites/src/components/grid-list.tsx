/**
 * @email: aric.zheng@alo7.com
 * @description: A react component.
 * @created_at: 2024-02-25 11:45:42
 */

interface ComponetNameProps extends React.PropsWithChildren {
  className?: string;
}

const ComponetName = (props: ComponetNameProps) => {
  const { children } = props;

  return <div className="grid grid-cols-4 gap-2">{children}</div>;
};

export default ComponetName;
