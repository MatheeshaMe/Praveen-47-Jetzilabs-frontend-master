import styled from "@emotion/styled";
import {
  Checkbox,
  FormControl,
  FormLabel,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { TickIcon } from "../../assets/icons/svgIcons";
import { themeColors } from "../../theme/theme";
import { useState } from "react";

export const ModifiedMuiInputBase = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    position: "relative",
    background: `${themeColors.Background1}`,
    backdropFilter: "blur(100px)",
    color: `${themeColors.text7}`,
    border: `1px solid ${themeColors.border1}`,

    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Poppins",
    padding: "10px 26px 10px 12px",
    transition: "0.3s",

    "&:hover": {
      background: `${themeColors.background4}`,
      transition: "0.3s",
    },
    "&:focus": {
      background: `${themeColors.background4}`,
      transition: "0.3s",
    },
  },
}));

export const initError = {
  status: false,
  msg: "",
};

export const CostomInputField = ({
  value,
  currencyType,
  onChange,
  name,
  id,
  multiline,
  rows,
  color,
  variant,
  size,
  endadornment,
  sx,
  lableName,
  flexDirection,
  justifyContent,
  alignItems,
  spacing,
  type,
  disabled,
  onMouseOver,
  error,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <FormControl fullWidth>
        <Stack
          direction={flexDirection}
          spacing={spacing ? spacing : 0.5}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          {lableName ? (
            <Typography
              fontFamily={"Poppins"}
              fontSize="18px"
              fontWeight={400}
              letterSpacing="0.03px"
              color={`${themeColors.text1}`}
              sx={{ margin: "0px 0px 0px 5px" }}
            >
              {lableName}
            </Typography>
          ) : (
            <></>
          )}
          <div>
            {!currencyType ? (
              <ModifiedMuiInputBase
                fullWidth
                id={id}
                value={`${value}`}
                name={name}
                onChange={onChange}
                multiline={multiline}
                rows={rows}
                color={color}
                variant={variant}
                size={size}
                endAdornment={endadornment}
                sx={sx}
                type={type}
                disabled={disabled}
                onMouseOver={onMouseOver}
              />
            ) : (
              <div
                style={{
                  borderRadius: "8px",
                  position: "relative",
                  background: `${
                    isHovering
                      ? themeColors.background4
                      : isFocus
                      ? themeColors.background4
                      : themeColors.Background1
                  }`,
                  backdropFilter: "blur(100px)",
                  color: `${themeColors.text7}`,
                  border: `1px solid ${themeColors.border1}`,

                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  padding: "9.5px 10px",
                  transition: "0.3s",
                }}
              >
                <input
                  style={{
                    color: `${themeColors.text7}`, //inputField_1_Error
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Poppins",

                    padding: "0px 0px 0px 3px",
                    margin: 0,
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    width: "100%",
                    ...sx,
                  }}
                  value={`${value ? value : ""}`}
                  onChange={onChange}
                  name={name}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  type={type}
                  disabled={disabled}
                />
                <div style={{ paddingLeft: "7px" }}>
                  {`${currencyType ? currencyType : ""}`}
                </div>
              </div>
            )}
          </div>
          {error?.status ? (
            <FormLabel
              error
              sx={{
                padding: "0px 0px 0px 20px",
                display: "flex",
                alignItems: "normal",
              }}
            >
              <WarningAmberIcon
                sx={{ fontSize: "17px", margin: "0px 5px 0px 0px" }}
              />
              <Typography
                fontFamily={"Poppins"}
                fontSize="13px"
                fontWeight={500}
                letterSpacing="0.03px"
                color={"inherit"}
              >
                {error.msg}
              </Typography>
            </FormLabel>
          ) : (
            <></>
          )}
        </Stack>
      </FormControl>
    </>
  );
};

export const CutomSelect = ({
  value,
  onChange,
  name,
  id,
  lable,
  options,
  optionName,
  optionValue,
  color,
  variant,
  size,
  sx,
  lableName,
  flexDirection,
  justifyContent,
  alignItems,
  spacing,
  error,
}) => {
  return (
    <>
      <Stack
        direction={flexDirection}
        spacing={spacing ? spacing : 0.5}
        justifyContent={justifyContent?.justifyContent}
        alignItems={alignItems}
        sx={{ width: "100%" }}
      >
        {lableName ? (
          <Typography
            fontFamily={"Poppins"}
            fontSize="18px"
            fontWeight={400}
            letterSpacing="0.03px"
            color={themeColors.text1}
            sx={{ margin: "0px 0px 0px 5px" }}
          >
            {lableName}
          </Typography>
        ) : (
          <></>
        )}
        <FormControl fullWidth>
          <Select
            id={id}
            name={name}
            value={value}
            label={lable}
            onChange={onChange}
            input={<ModifiedMuiInputBase />}
            color={themeColors.text7}
            variant={variant}
            size={size}
            sx={sx}
            fullWidth
          >
            {options ? (
              options.map((option, i) => {
                return (
                  <MenuItem key={i} value={option[optionValue]}>
                    {option[optionName]}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem value={""}>{""}</MenuItem>
            )}
            ;
          </Select>
        </FormControl>
        {error?.status ? (
          <FormLabel
            error
            sx={{
              padding: "0px 0px 0px 10px",
              display: "flex",
              alignItems: "normal",
            }}
          >
            <WarningAmberIcon
              sx={{ fontSize: "17px", margin: "0px 5px 0px 0px" }}
            />
            <Typography
              fontFamily={"Poppins"}
              fontSize="13px"
              fontWeight={500}
              letterSpacing="0.03px"
              color={"inherit"}
            >
              {error.msg}
            </Typography>
          </FormLabel>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

const ModifiedCheckBoxIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 14,
  height: 14,
  boxShadow: "",
  background: `${themeColors.Background1}`,
  border: `2px solid ${themeColors.border1}`,
  transition: "0.3s",
  ".Mui-focusVisible &": {
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    background: `${themeColors.background4}`,
    transition: "0.3s",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
  },
}));

const ModifiedCheckBoxIconChecked = styled(ModifiedCheckBoxIcon)({
  backgroundColor: `${themeColors.Background1}`,
  "&:before": {
    display: "block",
    width: 14,
    height: 14,
    background:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: `${themeColors.background4}`,
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<ModifiedCheckBoxIconChecked />}
      icon={<ModifiedCheckBoxIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export const CustomCheckBox = (props) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent="flex-end"
        alignItems={"center"}
        spacing={0.5}
        sx={{ color: `${themeColors.text1}` }}
      >
        <BpCheckbox {...props} />
        {props.lable ? (
          <Typography
            fontFamily={"Poppins"}
            fontSize="14px"
            fontWeight={300}
            letterSpacing="0.03px"
            color={"inherit"}
          >
            {props.lable}
          </Typography>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};
