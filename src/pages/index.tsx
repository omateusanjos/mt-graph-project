import { Header, Impulse, Footer } from "../components";
import styles from "../styles/index.module.scss";
const Index = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Impulse />
      <Footer />
    </div>
  );
};

export default Index;
