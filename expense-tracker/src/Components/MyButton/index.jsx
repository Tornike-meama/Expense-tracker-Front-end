import { Button } from "@mui/material";

const MyButton = (props) => {
    const {isLoading, ...otherProps} = props;
    return <Button className={isLoading ? "disabled" : ""}  {...otherProps} />
};

export default MyButton;