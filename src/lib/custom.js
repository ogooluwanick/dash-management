import toast from "react-hot-toast";

const customToast = (message, state , primary, secondary) => {
        
        return toast[state](message, {
                position:"top-center",
                duration:3500,
                style: {
                        border: `1px solid ${state == "success" ? "#0F920F"  : "#FF4040"  }`,
                        padding: '16px',
                        color: state == "success" ? "#0F920F"  : "#FF4040",
                        maxWidth: screen.width < 800 ? "60vw":"80vw",
                        top:"500px",
                },
                iconTheme: {
                        primary: state == "success" ? "#0F920F"  : "#FF4040",
                        secondary: state == "success" ? "#C6FAAE"  : "#FFD1D1",
                },
                    
        });
};

export { customToast }
