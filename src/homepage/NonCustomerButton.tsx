import { useState } from "react";
import IdInputWindow from "./IdInputWindow";

interface NonCustomerButtonProps {
  onButtonClick: () => void;
}
const NonCustomerButton = ({onButtonClick}:NonCustomerButtonProps) => {
  const [showWindow, setShowWindow] = useState(false);

  const handleClick = () => {
    setShowWindow(true);
    onButtonClick();
  };

  return (
    <div>
      {!showWindow && (
        <button onClick={handleClick} type="button">Non-Customer</button>
      )}
      {showWindow && <IdInputWindow />}
    </div>
  );
};

export default NonCustomerButton;
