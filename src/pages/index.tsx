import Footer from "../components/footer";
import Header from "../components/header";
import Impulse from "../components/Impulse";
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
