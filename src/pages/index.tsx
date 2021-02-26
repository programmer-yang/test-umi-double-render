import styles from './index.less';

export default function IndexPage(props: any) {
  console.log('home page');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <a onClick={() => props.history.push('/about')}>go home</a>
    </div>
  );
}
