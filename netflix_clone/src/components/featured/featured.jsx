import { InfoOutlined, PlayArrow} from '@material-ui/icons';
import './featured.scss';
import axios from "axios";
import { useEffect, useState } from "react";

const Featured = (props) => {
    let type = props.type;
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
        try {
            const res = await axios.get(`/movies/random?type=${type}`, {
            headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFlNmY2ZTU0YTJmYTBjZjk3NmEwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk3OTUzOCwiZXhwIjoxNjQ3NDExNTM4fQ.SU_PcTHzueZUPw4uh5nouI9_1YZGjSAVXRAByGwV6bk",
            },
            });
            setContent(res.data[0]);
            // console.log("helloooooooooooooooo");
            // console.log(res.data[0]);
        } catch (err) {
            console.log(err);
        }
        };
        getRandomContent();
    }, [type]);
    // console.log(content);

    const changeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        props.setGenre(e.target.value);
    };

    return (
        <div className = "featured">
            {type && (
                <div className = "category">
                    <span>{type === 'movie' ? "Movies" : 'TV Series'}</span>
                    <select name = "genre" id = 'genre' onChange = {changeHandler}>
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
                src = {content.img}
                alt = "" 
            />
            <div className = "info">
                <img 
                    src= "https://www.citypng.com/public/uploads/preview/no-way-home-spider-man-white-logo-11641394492ark1pf5b62.png"
                    alt="Movie"
                />
                <span className = "desc">
                    {content.desc}
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

