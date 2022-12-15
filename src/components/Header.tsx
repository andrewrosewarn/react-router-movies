import styles from "./Header.module.css";

type Props = {
  isLoading: boolean;
};

export default function Header({ isLoading }: Props) {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      {isLoading ? "Loading..." : null}
    </header>
  );
}
