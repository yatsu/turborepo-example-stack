import '@uiw/react-markdown-preview/markdown.css';
import cn from 'classnames';
import { Remark } from 'react-remark';
import styles from './Preview.module.css';

type Props = {
  code: string;
};

const Preview = (props: Props) => {
  const { code } = props;
  return (
    <div className={cn(styles.preview, 'wmde-markdown')}>
      <Remark>{code}</Remark>
    </div>
  );
};

export default Preview;
