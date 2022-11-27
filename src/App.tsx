import Main from "./components/Main";
import Modal from "./components/Modal";
import React, { useState } from "react";
function App() {
  const [switchModal, setSwitchModal] = useState(false);
  return (
    <React.Fragment>
      <Main setSwitchModal={setSwitchModal} switchModal={switchModal}></Main>
      {switchModal && <Modal></Modal>}
    </React.Fragment>
  );
}

export default App;
