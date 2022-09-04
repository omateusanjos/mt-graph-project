import Footer from "../components/footer";
import Header from "../components/header";
import Impulse from "../components/Impulse";
import { Modal } from "../components/modal";
import { ConfirmationModal } from "../components/modal/confirmation";
import { useModal } from "../hooks/useModal";
import styles from "../styles/index.module.scss";

const Index = () => {
  // const { isShown, toggle } = useModal();

  // const onConfirm = () => toggle();
  // const onCancel = () => toggle();

  return (
    <div className={styles.body}>
      <Header />
      <Impulse />
      <Footer />
    </div>
  );
};

export default Index;
