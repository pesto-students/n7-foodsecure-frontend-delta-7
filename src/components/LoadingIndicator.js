import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&

        <div style={{ position: 'fixed', left: '0px', top: '0px', width: '100%', height: '100vh', zIndex: 99999998 }}>
            <div style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 99999999 }}>
                <div className="spinner">
                    <Loader type="ThreeDots" color="#AD71FF" height="100" width="100" />
                </div>
            </div>
        </div>
    );
}