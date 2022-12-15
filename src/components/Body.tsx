import styles from "./Body.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return <main className={styles.body}>{children}</main>;
}
