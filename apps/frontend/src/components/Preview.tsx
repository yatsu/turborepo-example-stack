import '@uiw/react-markdown-preview/markdown.css';
import cn from 'classnames';
import { Remark } from 'react-remark';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import './markdown.css';
import styles from './Preview.module.css';

type Props = {
  code: string;
};

const Preview = (props: Props) => {
  const { code } = props;
  return (
    <div className={cn(styles.preview, 'wmde-markdown')}>
      <Remark remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}>
        {code}
      </Remark>
    </div>
  );
};

export default Preview;
