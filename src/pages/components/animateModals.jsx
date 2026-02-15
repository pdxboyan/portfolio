import Modal from "./modal";
import FerrofluidWriteup from "../FerrofluidWriteup";
// import CheckInWriteup from "../CheckInWriteup";
import MoodRunWriteup from "../MoodRunWriteup";
import CFlatWriteup from "../CFlatWriteup";

export default function AnimateModals({ trigger }) {
  // trigger = { activeModal, setActiveModal } from parent
  const { activeModal, setActiveModal } = trigger;

  const close = () => setActiveModal(null);

  // Map keys to components
  const MODALS = {
    ferro: FerrofluidWriteup,
    // checkin: CheckInWriteup,
    moodrun: MoodRunWriteup,
    cflat: CFlatWriteup,
  };

  const ActiveModalComponent = activeModal ? MODALS[activeModal] : null;

  return (
    <Modal isOpen={activeModal !== null} onClose={close}>
      {ActiveModalComponent && <ActiveModalComponent />}
    </Modal>
  );
}
