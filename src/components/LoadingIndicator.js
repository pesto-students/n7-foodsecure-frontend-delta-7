import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&

        <div style={{ position: 'fixed', left: '0px', top: '0px', backgroundColor: 'lightskyblue', opacity: 0.3, width: '100%', height: '100vh', zIndex: 99999998 }}>
            <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, 0)', zIndex: 99999999 }}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        </div>
    );
}