import Loader from "../Loader/index.jsx";

const PageLoader = ({children, isLoading}) => {

    return (
        <div style={{position: "relative"}}>
            {isLoading ? <div style={{
                minWidth: 50,
                minHeight: 50,
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
            }}><Loader /></div> : null}
            <div style={isLoading ? {opacity: 0.001} : {}} >{children}</div>
        </div>
    );
};

export default PageLoader;