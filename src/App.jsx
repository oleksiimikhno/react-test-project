import { useState } from 'react'

import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { ConfirmDialog } from './components/ConfirmDialog/ConfirmDialog'

import './App.css'

function App() {
  const [user, setUser] = useState({});

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [isConfirmDialog, setIsConfirmDialog] = useState(false);

  const closeDialog = () => setConfirmDialogOpen(false);
  const confirmDialog = () => {
    closeDialog();
    setIsConfirmDialog(true);
  };

  const confirmUserData = (data) => {
    setUser(data);
    setConfirmDialogOpen(true);
  };

  return (
    <>
      <main className="App">
        
        {isConfirmDialog ? (
          `Congratulations user ${user.name}!`
        ) : (
          <RegisterForm onSubmit={confirmUserData}/>
        )}
        
      </main>
      <ConfirmDialog
        title="Please confirm your registration"
        cancel={closeDialog}
        open={confirmDialogOpen}
        confirm={confirmDialog}
      >
        <p>Please confirm your email: {user.email}</p>
      </ConfirmDialog>
    </>
  )
}

export default App
