import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import { styling } from "../styles/js/Button";

const ButtonComponent = (props) => {
  const styles = styling(props.styles);
  const Button = styled(LoadingButton)({
    background: styles?.background.default,
    color: styles?.color.default,
    textTransform: "capitalize",
    borderRadius: props?.borderRadius,
    borderColor: styles?.borderColor.default,
    fontFamily: [].join(","),
    "&:hover": {
      background: styles?.background.hover,
      color: styles?.color.default,
      borderColor: styles?.borderColor.hover,
    },
  });

  return (
    <Button
      disableElevation
      variant={styles?.variant}
      fullWidth={styles?.fullWidth}
      {...props}
    >
      <span>{props.label}</span>
    </Button>
  );
};

export default ButtonComponent;
