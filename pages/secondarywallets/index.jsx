import React, { useState } from 'react';
import SecondaryWalletCard from '../../src/components/CardComponents/SecondaryWalletCard';
import ConfirmationDialog, { initOpenConfirmationDialog } from '../../src/components/DialogComponents/confirmationDialog';
import LoadingComponent, { DialogTypes, initOpenDialog } from '../../src/components/DialogComponents/LoadingComponent';




const SecondaryWallets = () => {

    const [openDialog, setOpenDialog] = useState(initOpenDialog);
    const [openConfirmationDialog,setOpenConfirmationDialog] = useState(initOpenConfirmationDialog);

    const [wallets, setWallets] = useState([ // set wallet -- state
        {walletId: '12616', password: '215454', walletValue: '500' },
        {walletId: '12616s', password: '215sd454', walletValue: '1500' },
        {walletId: '1261sadgadadadf6', password: '2154dsfa54', walletValue: '50000' },

    ]);

    const onClickTransfer = () => { // transfer -- func (call-back popup)
        setOpenConfirmationDialog({...openConfirmationDialog, open: true, title: 'Do you Want to Transfer'})
    };

    const onClickNo = () => { // No in comfirmation popup => transfer -- func
        setOpenConfirmationDialog(initOpenConfirmationDialog);
    };

    const onClickYes = () => { // Yes in comfirmation popup => transfer -- func
        setOpenDialog({...openDialog,
            open: true,
            isSuccessResponse: true,
            progressBarName: 'Pending.....',
            dialogType: DialogTypes.PROGRESS_BAR
        });
        setOpenConfirmationDialog(initOpenConfirmationDialog);

        // type here transfer func

    };

    return (
        <div style={{ padding:'20px 25px'}} >
            
            { wallets.map((wallet, i) => {
                return (
                    <div
                        style={{
                            padding: '0px 0px 20px 0px'
                        }}
                        key={i}
                    >
                        <SecondaryWalletCard
                            onClickTransfer={onClickTransfer}
                            password={wallet.password}
                            walletValue={wallet.walletValue}
                            walletId={wallet.walletId}
                        />
                    </div>
                );
            })}

            <LoadingComponent
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
            <ConfirmationDialog
                openDialog={openConfirmationDialog}
                setOpenDialog={setOpenConfirmationDialog}
                onClickNo={onClickNo} 
                onClickYes={onClickYes}
            />
        </div>
    );
};

export default SecondaryWallets;

// ETHIcon