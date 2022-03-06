import { ArrowBackOutlined } from '@material-ui/icons';
import './Watch.scss';


const Watch = () => {
    return (
        <div className = "watch">
            <div className = "back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video 
                className='video' 
                autoPlay
                progress 
                controls
                src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
        </div>
    );
}

export default Watch;