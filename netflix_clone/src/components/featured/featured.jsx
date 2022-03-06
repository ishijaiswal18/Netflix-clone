import { InfoOutlined, PlayArrow} from '@material-ui/icons';
import './featured.scss';

const Featured = (props) => {
    let type = props.type;
    return (
        <div className = "featured">
            {type && (
                <div className = "category">
                    <span>{type === 'movie' ? "Movies" : 'TV Series'}</span>
                    <select name = "genre" id = 'genre'>
                        <option value = "">All</option>
                        <option value = "action">Action</option>
                        <option value = "comedy">Comedy</option>
                        <option value = "drama">Drama</option>
                        <option value = "horror">Horror</option>
                        <option value = "romance">Romance</option>
                        <option value = "thriller">Thriller</option>
                        <option value = "sci-fi">Sci-Fi</option>
                        <option value = "animation">Animation</option>
                        <option value = "adventure">Adventure</option>
                        <option value = "crime">Crime</option>
                        <option value = "documentary">Documentary</option>
                        <option value = "family">Family</option>
                        <option value = "fantasy">Fantasy</option>
                        <option value = "history">History</option>
                        <option value = "mystery">Mystery</option>
                        <option value = "war">War</option>
                        <option value = "western">Western</option>
                        <option value = "musical">Musical</option>
                        <option value = "sport">Sport</option>
                        
                    </select>
                </div>
            )}
        
            <img 
                width = "100%"
                src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt = "" 
            />
            <div className = "info">
                <img 
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className = "desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iusto, quam consequatur dolores commodi repellendus quia sunt,
                     itaque ullam amet distinctio neque excepturi adipisci, impedit 
                     cumque vero. Dolores deserunt iure nisi. 
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;

