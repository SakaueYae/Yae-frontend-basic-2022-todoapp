import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  if (AlertHandlerContext.visible === true) {
    setTimeout(() => {
      AlertHandlerContext.closeAlert();
    }, 5000);
  }

  return (
    <Alert
      text={AlertHandlerContext.errorText}
      isActive={AlertHandlerContext.visible}
    />
  );
};
export default AlertManager;
