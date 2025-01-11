import Modal from "../common/Modal/Modal";
import { useNavigate } from "react-router-dom";
export const FailModal = ({ setModalState }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setModalState(false);
    navigate("/");
  };
  return (
    <Modal
      type="basic"
      title="기회를 모두 소진하였습니다."
      content="hallucination 부스로 오시면 기회를 드립니다!"
      onClose={handleClick}
    />
  );
};
