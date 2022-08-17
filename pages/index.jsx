import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import {
  CostomInputField,
  CustomCheckBox,
  CutomSelect,
  initError,
  ModifiedMuiInputBase,
} from "../src/components/CustomComponents/CustomComponents";
import { createTask } from "../src/features/taskSlice";
import LoadingComponent, {
  DialogTypes,
  initOpenDialog,
} from "../src/components/DialogComponents/LoadingComponent";

//icons
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { ETHLightIcon } from "../src/assets/icons/svgIcons";
import { themeColors } from "../src/theme/theme";

export const CreateTaskForm = ({ onChange, task, onClickCheckBox }) => {
  const [isAdvance, setIsAdvance] = useState(false); // advance -- state

  const onClcikAdvance = () => {
    // on clcik advance -- func
    setIsAdvance(!isAdvance);
  };

  const onClickContractAddressHelp = () => {
    //  onClick ? icon Contract Address -- func
  };

  const onClickNftTransferAddressHelp = () => {
    //  onClick ? icon Transfer Address -- func
  };

  const [selectFuncOptions, setSelectFuncOptions] = useState([
    // Select Function Options -- state
    { name: "Mint", value: "mint" },
  ]);

  return (
    <>
      <Grid container spacing={3} justifyContent="">
        <Grid item xs={11} md={12}>
          <CostomInputField
            lableName={"Contract Address"}
            id={"contract-address-field"}
            onChange={onChange}
            value={task.contractAddress}
            name={"contractAddress"}
            endadornment={
              <InputAdornment position="end" sx={{ color: themeColors.text4 }}>
                <IconButton
                  color="inherit"
                  onClick={onClickContractAddressHelp}
                >
                  <HelpOutlineRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
            error={{ status: true, msg: "error msg" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={6}>
          <CutomSelect
            lableName={"Select Function"}
            id="selectFunction-select"
            onChange={onChange}
            name={"selectFunction"}
            options={selectFuncOptions}
            optionName={"name"}
            optionValue={"value"}
            value={task.selectFunction}
            error={{ status: false, msg: "error selected" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <CostomInputField
            lableName={"Max mint"}
            id={"maxMint-field"}
            onChange={onChange}
            value={task.maxMint}
            name={"maxMint"}
            currencyType="ETH" // add currency type like this
            error={{ status: false, msg: "error selected" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={6}>
          <CostomInputField
            lableName={"NFT Price"}
            id={"nftPrice-field"}
            onChange={onChange}
            value={task.nftPrice}
            name={"nftPrice"}
            currencyType="ETH" // add currency type like this
            error={{ status: false, msg: "error selected" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <CostomInputField
            lableName={"How you want to mint"}
            id={"mintType-field"}
            onChange={onChange}
            value={task.mintType}
            name={"mintType"}
            // currencyType='ETH' // add currency type like this
            error={{ status: false, msg: "error selected" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={11}>
          <Stack
            direction={"row"}
            justifyContent="flex-end"
            alignItems={"center"}
            spacing={0}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"flex-start"}
              spacing={0.3}
            >
              <Typography
                fontFamily={"Poppins"}
                fontSize="15px"
                fontWeight={300}
                letterSpacing="0.03px"
                color={themeColors.text5}
                sx={{ margin: "0px 0px 0px 10px" }}
              >
                Secondary Wallets Creation Gas
              </Typography>

              <Stack
                direction={"row"}
                justifyContent="flex-start"
                alignItems={"center"}
                spacing={3}
              >
                <CustomCheckBox
                  lable={"Slow"}
                  checked={task.secondaryWalletsCreationGas.slow}
                  name="secondaryWalletsCreationGas.slow"
                  onClick={onClickCheckBox}
                />
                <CustomCheckBox
                  lable={"Medium"}
                  checked={task.secondaryWalletsCreationGas.medium}
                  name="secondaryWalletsCreationGas.medium"
                  onClick={onClickCheckBox}
                />
                <CustomCheckBox
                  lable={"High"}
                  checked={task.secondaryWalletsCreationGas.high}
                  name="secondaryWalletsCreationGas.high"
                  onClick={onClickCheckBox}
                />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={11} md={12}>
          <CostomInputField
            lableName={"NFT Transfer Address"}
            id={"mintType-field"}
            onChange={onChange}
            value={task.nftTransferAddress}
            name={"nftTransferAddress"}
            endadornment={
              <InputAdornment position="end" sx={{ color: themeColors.text4 }}>
                <IconButton
                  color="inherit"
                  onClick={onClickNftTransferAddressHelp}
                >
                  <HelpOutlineRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
            error={{ status: false, msg: "error selected" }} // add errors like this
          />
        </Grid>
        <Grid item xs={10} md={11}>
          {!isAdvance ? (
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"flex-start"}
              spacing={0.3}
            >
              <Typography
                fontFamily={"Poppins"}
                fontSize="15px"
                fontWeight={300}
                letterSpacing="0.03px"
                color={themeColors.text5}
                sx={{ margin: "0px 0px 0px 10px" }}
              >
                Claim Gas
              </Typography>

              <Stack
                direction={"row"}
                justifyContent="flex-start"
                alignItems={"center"}
                spacing={3}
              >
                <CustomCheckBox
                  lable={"Slow"}
                  checked={task.claimGas.slow}
                  name="claimGas.slow"
                  onClick={onClickCheckBox}
                />
                <CustomCheckBox
                  lable={"Medium"}
                  checked={task.claimGas.medium}
                  name="claimGas.medium"
                  onClick={onClickCheckBox}
                />
                <CustomCheckBox
                  lable={"High"}
                  checked={task.claimGas.high}
                  name="claimGas.high"
                  onClick={onClickCheckBox}
                />
              </Stack>
              <div onClick={onClcikAdvance}>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize="12px"
                  fontWeight={300}
                  letterSpacing="0.03px"
                  color={`${themeColors.text3}`}
                  sx={{
                    padding: "15px 0px 0px 5px",
                    textDecoration: "underline",
                    cursor: "pointer",
                    "&:hover": {
                      color: themeColors.text6,
                    },
                  }}
                >
                  Advance
                </Typography>
              </div>
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              justifyContent="flex-start"
              alignItems={"center"}
              spacing={3}
            >
              <FormControl>
                <ModifiedMuiInputBase
                  value={task.gasLimit}
                  name={"gasLimit"}
                  onChange={onChange}
                />
                <FormLabel
                  sx={{
                    padding: "10px 0px 0px 5px",
                    display: "flex",
                    alignItems: "normal",
                  }}
                >
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize="15px"
                    fontWeight={300}
                    letterSpacing="0.03px"
                    color={`${themeColors.text2}`}
                  >
                    {`Gas Limit`}
                  </Typography>
                </FormLabel>
              </FormControl>

              <FormControl>
                <ModifiedMuiInputBase
                  value={task.maxPiorityFee}
                  name={"maxPiorityFee"}
                  onChange={onChange}
                />
                <FormLabel
                  sx={{
                    padding: "10px 0px 0px 8px",
                    display: "flex",
                    alignItems: "normal",
                  }}
                >
                  <Typography
                    fontFamily={"Poppins"}
                    fontSize="15px"
                    fontWeight={400}
                    letterSpacing="0.03px"
                    color={`${themeColors.text2}`}
                  >
                    {`Max Piority Fee`}
                  </Typography>
                </FormLabel>
              </FormControl>
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export const WalletsSelecter = ({ task, wallets, setTask }) => {
  function start_and_end(str) {
    //
    if (str.length > 7) {
      return str.substr(0, 5) + "..." + str.substr(str.length - 4, str.length);
    }
    return str;
  }

  const isWalletSelected = (id) => {
    let isChecked = task.selectedwWallets.includes(id);
    return isChecked;
  };

  const onClickWalletCheckBox = (id) => {
    // on click wallet check box -- func
    const isChecked = isWalletSelected(id);
    let newSelectedwWallets = task.selectedwWallets;
    // Object.preventExtensions(newSelectedwWallets);

    if (isChecked) {
      newSelectedwWallets = newSelectedwWallets.filter(
        (walletId) => walletId !== id
      );
    } else {
      newSelectedwWallets.push(id);
    }
    setTask({ ...task, selectedwWallets: newSelectedwWallets });
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          background: `${themeColors.Background1}`,
          borderRadius: "8px",
          border: "2px solid rgba(135, 144, 194, 1)",
          width: "100%",
          minHeight: "550px",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -2,
            left: -2,
            background: `${themeColors.background2}`,
            padding: 0,
            margin: 0,
            borderRadius: "8px 8px 0px 0px",
            border: "2px solid rgba(135, 144, 194, 1)",
            width: "100%",
            minHeight: "50px",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily={"Poppins"}
            fontSize="18px"
            fontWeight={500}
            letterSpacing="0.03px"
            color={`${themeColors.text1}`}
          >
            Select one or more wallets for this task
          </Typography>
        </div>

        <div
          style={{
            marginTop: "50px",
            padding: 0,
            height: "fit-content",
          }}
        >
          {wallets.map((wallet, i) => {
            return (
              <div
                key={i}
                style={{
                  padding: "20px 0px 0px 0px",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  spacing={2}
                >
                  <Stack
                    direction={"column"}
                    justifyContent="center"
                    alignItems={"start"}
                    spacing={0}
                    sx={{
                      borderBottom: "2px solid #7981AE",
                      width: "100%",
                      padding: "5px 20px",
                    }}
                  >
                    <Typography
                      fontFamily={"Poppins"}
                      fontSize="16px"
                      fontWeight={500}
                      letterSpacing="0.03px"
                      color={`${themeColors.text1}`}
                    >
                      Primary
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent="space-between"
                      alignItems={"center"}
                      spacing={1}
                    >
                      <Typography
                        fontFamily={"Poppins"}
                        fontSize="14px"
                        fontWeight={500}
                        letterSpacing="0.03px"
                        color={`${themeColors.text2}`}
                        sx={{ textDecoration: "underline", cursor: "pointer" }}
                      >
                        {`${start_and_end(wallet.walletId)}`}
                      </Typography>

                      <Typography
                        fontFamily={"Poppins"}
                        fontSize="20px"
                        fontWeight={600}
                        letterSpacing="0.03px"
                        color={`${themeColors.text1}`}
                      >
                        &bull;
                      </Typography>
                      <Stack
                        direction={"row"}
                        justifyContent="center"
                        alignItems={"center"}
                        spacing={0.7}
                      >
                        <ETHLightIcon sx={{ fontSize: "21px" }} />

                        <Typography
                          fontFamily={"Poppins"}
                          fontSize="14px"
                          fontWeight={400}
                          letterSpacing="0.03px"
                          color={`${themeColors.text1}`}
                          sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width: "150px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {wallet.walletValue}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    <CustomCheckBox
                      checked={isWalletSelected(wallet.walletId)}
                      name="claimGas.medium"
                      onClick={() => onClickWalletCheckBox(wallet.walletId)}
                    />
                  </div>
                </Stack>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const styles = {
  createTaskbtn: {
    background: `${themeColors.text3}`,
    borderRadius: "8px",
    width: "100%",
    border: "none",
    padding: "10px 0px",
    margin: "10px 0px 0px 0px",
    cursor: "pointer",
    transition: "0.3s",
  },

  createTaskbtnHover: {
    background: `${themeColors.text6}`,
    borderRadius: "8px",
    width: "100%",
    border: "none",
    padding: "10px 0px",
    margin: "10px 0px 0px 0px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

const NftBot = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(initOpenDialog); // dialog -- state
  const [createTaskbtnHoverStatus, setCreateTaskbtnHoverStatus] =
    useState(false); // hover effect

  const initTask = {
    contractAddress: "",
    selectFunction: "",
    maxMint: "",
    nftPrice: "",
    mintType: "",
    gasLimit: "",
    maxPiorityFee: "",
    nftTransferAddress: "",
    selectedwWallets: [],
    secondaryWalletsCreationGas: {
      slow: false,
      medium: false,
      high: false,
    },
    claimGas: {
      slow: false,
      medium: false,
      high: false,
    },
    active: true,
  };

  // get wallets => dispatch

  // states
  const [task, setTask] = useState(initTask);

  const [wallets, setWallets] = useState([
    // set wallet -- state
    { walletId: "12616", walletValue: "0.55165165100" },
    { walletId: "12616s", walletValue: "1.500" },
    { walletId: "1261sadgadadadf6", walletValue: "0.456565450000" },
  ]);

  const onChange = (event) => {
    // on chanage by name (except check boxes) -- func
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const onClickCheckBox = (event) => {
    // on change checkbox value -- func
    const nameArr = event.target.name.split(".");
    let newCheckBoxes = {
      slow: false,
      medium: false,
      high: false,
    };
    newCheckBoxes[nameArr[1]] = !newCheckBoxes[nameArr[1]];
    setTask({ ...task, [nameArr[0]]: newCheckBoxes });
  };

  const onClickCreateTask = () => {
    // Create task -- button

    // dispatch create task
    dispatch(createTask(task));

    setOpenDialog({
      ...openDialog,
      open: true,
      isSuccessResponse: true, // < -- response from create task here as a bool
      progressBarName: "Pending.....",
      dialogType: DialogTypes.PROGRESS_BAR,
    });
    console.log(task);
    setTask(initTask);
  };

  // hover effect

  return (
    <div>
      <div style={{ padding: "20px 25px" }}>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} md={12} lg={8} xl={7}>
            <CreateTaskForm // create task form Component
              onClickCreateTask={onClickCreateTask}
              onChange={onChange}
              onClickCheckBox={onClickCheckBox}
              task={task}
            />
          </Grid>
          <Grid item xs={10} lg={7} xl={5}>
            <div
              style={{
                margin: "20px 0px 0px 0px",
              }}
            >
              <WalletsSelecter // Select one or more wallets for this task Component
                onChange={onChange}
                task={task}
                wallets={wallets}
                setTask={setTask}
              />
            </div>
          </Grid>
          <Grid item xs={10} md={10} lg={7} xl={7}>
            <button
              style={
                createTaskbtnHoverStatus
                  ? styles.createTaskbtnHover
                  : styles.createTaskbtn
              }
              onClick={onClickCreateTask}
              onMouseEnter={() => setCreateTaskbtnHoverStatus(true)}
              onMouseLeave={() => setCreateTaskbtnHoverStatus(false)}
            >
              <Typography
                fontFamily={"Poppins"}
                fontSize="18px"
                fontWeight={500}
                letterSpacing="0.03px"
                color={`${themeColors.text1}`}
                sx={{ margin: "0px 0px 0px 5px" }}
              >
                Create Task
              </Typography>
            </button>
          </Grid>
        </Grid>
      </div>

      <LoadingComponent openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default NftBot;
